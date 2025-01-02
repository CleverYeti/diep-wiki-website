import { useEffect, useState } from "react";
import { xml2js } from "xml-js";



export function PageXMLBody({url} : {url: string}) {
    const [parsedXML, setParsedXML] = useState({} as any)
    const [loadingStatus, setLoadingStatus] = useState("loading")
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        let ignore = false;
        (async() => {
            setLoadingStatus("loading")
            setParsedXML({})
            setErrorMessage("")
            console.log(url)
            const response = await fetch(url)
            if (ignore) return
            if (!response.ok) {
                setErrorMessage("response code " + response.status)
                setLoadingStatus("error")
                return
            }
            const xmlString = await response.text()
            console.log(xmlString)
            if (ignore) return
            try {
                const parsed = xml2js(xmlString)
                setParsedXML(parsed)
                setLoadingStatus("loaded")
            } catch(e) {
                setErrorMessage("failed to parse XML:\n" + e)
                setLoadingStatus("error")
            }
        })()
        return () => {ignore = true}
    }, [url])
    
    if (loadingStatus == "error") {
        return (<>
            error <br/>
            {errorMessage}
        </>)
    }

    if (loadingStatus == "loading") {
        return (<>
            Loading
        </>)
    }

    if (loadingStatus == "loaded") {
        let contentElement = parsedXML.elements.filter((el:any) => el.name == "content")[0]
        if (!contentElement) {
            return (<>
                invalid XML file: no content element
            </>)
        }
        console.log(contentElement)
        return (<>
            {
                parseRecursive(contentElement, 0, 0)
            }
        </>)
    }

    return <></>
}

function parseRecursive(element: any, index: number, total: number) {
    if (element.type == "text") {
        let lines:Array<string> = element.text.split(/\r?\n|\r|\n/g)
        //lines = lines.map(line => line.trim())
        if (index == 0 && lines[0] == "") {lines.shift()}
        if (index == total - 1 && lines[lines.length - 1] == "") {lines.pop()}
        return lines.map((text:any, i:number) => i > 0 ? [<br/>, text] : text)
    }
    
    // define custom elements here
    
    if (element.elements) return element.elements.map((el:any, i:number) => parseRecursive(el, i, element.elements.length))
    return <></>
}
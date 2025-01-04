import { useEffect, useState } from "react";
import { ElementCompact, xml2js } from "xml-js";
import collapseIcon from '/icons/chevron-down.svg'
import "./pageXMLBody.css"

interface XMLFile {
    declaration: {
        attributes: {
            [key: string]: string
        }
    };
    elements: Array<XMLElement>;
}
interface XMLElement {
    type: string;
    name?: string;
    text?: string;
    attributes?: {
        [key: string]: string
    } 
    elements?: Array<XMLElement>
}

interface XMLWrapperElement {
    type: string;
    name: string;
    attributes: {
        [key: string]: string
    }
    elements: Array<XMLElement>
}
interface XMLTextElement {
    type: "text";
    text: string
}



export function PageXMLBody({url} : {url: string}) {
    const [parsedXML, setParsedXML] = useState(null as XMLFile | null)
    const [loadingStatus, setLoadingStatus] = useState("loading")
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        let ignore = false;
        (async() => {
            setLoadingStatus("loading")
            setParsedXML(null)
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
                const parsed:XMLFile = xml2js(xmlString) as XMLFile
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

    if (loadingStatus == "loaded" && parsedXML != null) {
        let contentElement = parsedXML.elements.filter(el => el.name == "content")[0]
        if (!contentElement) {
            return (<>
                invalid XML file: no content element
            </>)
        }
        console.log(contentElement)
        return (<RenderXMLElement element={contentElement} index={0} total={0}/>)
    }

    return <></>
}

function RenderXMLElement({element, index = 0, total = 0} : {element: XMLElement; index: number; total: number}): JSX.Element {
    if (element.type == "text") {
        const textElement = element as XMLTextElement
        let lines = textElement.text.split(/\r?\n|\r|\n/g)
        //lines = lines.map(line => line.trim())
        if (index == 0 && lines[0] == "") {lines.shift()}
        if (index == total - 1 && lines[lines.length - 1] == "") {lines.pop()}
        return <>{lines.map((text, i) => i > 0 ? [<br/>, text] : text)}</>
    } else {
        const wrapperElement = element as XMLWrapperElement
        
        function renderContent() {{
            return wrapperElement.elements.map((el, i) => <RenderXMLElement element={el} index={i} total={wrapperElement.elements.length}/>)
        }}

        // define custom elements here

        if (wrapperElement.name == "section") {
            const [isCollapsed, setIsCollapsed] = useState(false)
            wrapperElement.attributes.name
            return (
                <div className="xml-section" key={wrapperElement.attributes.name} data-is-collapsed={isCollapsed}>
                    <div className="title-bar">
                        <div className="title">{wrapperElement.attributes.name}</div>
                        <div className="arrow" onClick={() => {setIsCollapsed(!isCollapsed)}}>
                            <img src={collapseIcon} alt="" />
                        </div>
                    </div>
                    <div className="content">
                        {renderContent()}
                    </div>
                </div>
            )
        }

        return <>{renderContent()}</>
    }
    return <></>
}


function XMLSection({element}: {element: XMLElement}) {

}
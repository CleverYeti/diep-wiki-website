import { useEffect, useState } from "react";
import { ElementCompact, xml2js } from "xml-js";
import "./PageXMLBody.css"
import { XMLSection } from "./XMLComponents/XMLSection";
import { XMLPage } from "../Pages/XMLPage";
import { XMLBuild } from "./XMLComponents/XMLBuild";

interface XMLFile {
    declaration: {
        attributes: {
            [key: string]: string
        }
    };
    elements: Array<XMLElement>;
}
export interface XMLElement {
    type: string;
    name?: string;
    text?: string;
    attributes?: {
        [key: string]: string
    } 
    elements?: Array<XMLElement>
}

export interface XMLWrapperElement {
    type: string;
    name: string;
    attributes: {
        [key: string]: string
    }
    elements: Array<XMLElement>
}
export interface XMLTextElement {
    type: "text";
    text: string
}

export function RenderXMLElementArray({elements}: {elements: Array<XMLElement>}) {
    return <>{elements.map((el, i) => <RenderXMLElement element={el} index={i} total={elements.length}/>)}</>
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
    try {
        if (element.type == "text") {
            const textElement = element as XMLTextElement
            let lines = textElement.text.split(/\r?\n|\r|\n/g)
            //lines = lines.map(line => line.trim())
            if (index == 0 && lines[0] == "") {lines.shift()}
            if (index == total - 1 && lines[lines.length - 1] == "") {lines.pop()}
            return <>{lines.map((text, i) => i > 0 ? [<br/>, text] : text)}</>
        } else {
            const wrapperElement = element as XMLWrapperElement
            
            // define custom elements here
            if (wrapperElement.name == "section") return <XMLSection el={wrapperElement}/>
            if (wrapperElement.name == "build") return <XMLBuild el={wrapperElement}/>
    
            if (wrapperElement.name == "br") return <br key={index}/> // line break
            if (wrapperElement.name == "i") return <i key={index}><RenderXMLElementArray elements={wrapperElement.elements ?? []}/></i> // italic
            if (wrapperElement.name == "b") return <b key={index}><RenderXMLElementArray elements={wrapperElement.elements ?? []}/></b> // bold
            if (wrapperElement.name == "s") return <s key={index}><RenderXMLElementArray elements={wrapperElement.elements ?? []}/></s> // strikethrough
            if (wrapperElement.name == "u") return <u key={index}><RenderXMLElementArray elements={wrapperElement.elements ?? []}/></u> // underline
    
            return <RenderXMLElementArray elements={wrapperElement.elements ?? []}/>
        }
    } catch (error) {
        return (<>Failed to render XML element: <br/>{"" + error}</>)
    }
}
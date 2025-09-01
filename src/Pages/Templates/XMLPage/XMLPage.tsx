import { basePath } from "../../../App";
import { PageXMLBody } from "../../../Components/XML/PageXMLBody";
import "./XMLPage.css"

export function XMLPage({path}: {path:string}) {
    return (
        <div id="XML-page">
            <PageXMLBody url={`${basePath}${path}`}/>
        </div>
    )
}
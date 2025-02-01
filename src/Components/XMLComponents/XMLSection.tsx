import { useState } from "react";
import { RenderXMLElementArray, XMLWrapperElement } from "../PageXMLBody";
import collapseIcon from '/icons/chevron-down.svg'

export function XMLSection({el}: {el: XMLWrapperElement}) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div className="xml-section" key={el.attributes?.name} data-is-collapsed={isCollapsed}>
            <div className="title-bar">
                <div className="title">{el.attributes?.name}</div>
                <div className="arrow" onClick={() => {setIsCollapsed(!isCollapsed)}}>
                    <img src={collapseIcon} alt="" />
                </div>
            </div>
            <div className="content">
                <RenderXMLElementArray elements={el.elements ?? []}/>
            </div>
        </div>
    )
}
import { useState } from "react";
import { XMLWrapperElement } from "../PageXMLBody";
import { statPointColors, statPointSetups } from "../../tanksData";
import { renderColor } from "../../functions/renderColor";
import "./XMLBuild.css"

export function XMLBuild({el}: {el: XMLWrapperElement}) {
    const [isOpen, setIsOpen] = useState(false)
    const statPointSetupKey = el.attributes.statPointSetupKey ?? ""
    let statPointSetup = statPointSetups[statPointSetupKey] ?? statPointSetups["normal"]
    let buildPoints = (el.attributes.points ?? "").split("/").map(v => parseInt(v))
    if (buildPoints.length == 4) buildPoints = [buildPoints[0], buildPoints[1], buildPoints[2], 0, 0, 0, 0, buildPoints[3]]
    if (buildPoints.length != 8) throw new Error("invalid <build> points parameter")
    return (
        <div className="xml-build"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {
                statPointSetup.limits.map((limit, i) => {
                    if (limit == 0) return <></>
                    return (
                        <div className="point-count" style={{"--color": renderColor(statPointColors[i])} as React.CSSProperties}>{buildPoints[i]}</div>
                    )
                })
            }
            <div className="better-preview">

            </div>
        </div>
    )
}
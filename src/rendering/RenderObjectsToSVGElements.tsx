import { ReactElement } from "react";
import { Color, formatColorToCss, multiplyColor } from "./Color";
import { RenderingObject } from "./RenderingObject";
import { DEFAULT_RENDERING_SETTINGS, RenderingSettings } from "./RenderingSettings";
import { Point } from "./Vector";

export function renderObjectsToSVGElements({
    renderingObjects,
    renderingSettings = DEFAULT_RENDERING_SETTINGS
}: {
    renderingObjects: Array<RenderingObject>;
    renderingSettings?: RenderingSettings;
}) {
    const elements:Array<ReactElement> = []
    for (let object of renderingObjects) {
        let fill = formatColorToCss(object.color)
        let borderColor = ""
        if (renderingSettings.useNewBorders) {
            borderColor = formatColorToCss(multiplyColor(object.color, 1 - (renderingSettings.borderOpacity ?? 0.2)))
        } else {
            borderColor = formatColorToCss(renderingSettings.borderColor ?? [0,0,0])
        }
        if (object.type == "circle") {
            elements.push(<circle
                key={"circle-" + Math.random()}
                cx={(object.position ?? [0,0])[0]} cy={(object.position ?? [0,0])[1]}
                r={object.radius ?? 0}
                fill={fill}
                stroke={borderColor}
                strokeWidth={renderingSettings.borderThickness}
                strokeLinejoin="round"
            />)
        } else if (object.type == "polygon") {
            elements.push(<polygon
                key={"polygon-" + Math.random()}
                points={(object.points ?? []).map(([x,y]) => x + "," + y).join(" ")}
                fill={fill}
                stroke={borderColor}
                strokeWidth={renderingSettings.borderThickness}
                strokeLinejoin="round"
            />)
        }
    }
}
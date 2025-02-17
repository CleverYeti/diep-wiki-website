import { formatColorToCss, multiplyColor } from "./Color";
import { RenderingObject } from "./RenderingObject";
import { DEFAULT_RENDERING_SETTINGS, RenderingSettings } from "./RenderingSettings";
import { Point } from "./Vector";

export function renderObjectsToCanvas({
    renderingObjects,
    ctx,
    renderingSettings = DEFAULT_RENDERING_SETTINGS
}: {
    renderingObjects: Array<RenderingObject>;
    ctx: CanvasRenderingContext2D;
    renderingSettings?: RenderingSettings;
}) {
    for (let object of renderingObjects) {
        ctx.lineWidth = renderingSettings.borderThickness ?? 0;
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        
        ctx.fillStyle = formatColorToCss(object.color)
        if (renderingSettings.useNewBorders) {
            ctx.strokeStyle = formatColorToCss(multiplyColor(object.color, 1 - (renderingSettings.borderOpacity ?? 0.2)))
        } else {
            ctx.strokeStyle = formatColorToCss(renderingSettings.borderColor ?? [0,0,0])
        }
        if (object.type == "circle") {
            ctx.beginPath();
            ctx.arc(...(object.position ?? [0,0]), object.radius ?? 0, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (object.type == "polygon") {
            ctx.beginPath();
            for (let i = 0; i < (object.points ?? []).length; i++) {
                if (i == 0) {
                    ctx.moveTo(...(object.points ?? [])[i])
                } else {
                    ctx.lineTo(...(object.points ?? [])[i])
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
}
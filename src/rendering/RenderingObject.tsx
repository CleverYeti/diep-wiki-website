import { Color } from "./Color";
import { Point } from "./Vector";

export enum renderingObjectTypes {
    circle = "circle",
    polygon = "polygon"
}
export interface RenderingObject {
    type: "polygon"|"circle",
    color: Color,
    layer: number,
    highlightGroup?: string;

    position?: Point,
    radius?: number,
    points?: Array<Point>,
}
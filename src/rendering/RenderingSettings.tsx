import { Color } from "./Color";

export interface RenderingSettings {
    borderOpacity?: number; // 0.2
    useNewBorders: boolean; // true
    borderColor?: Color;
    borderThickness: number; // 7.5
}

export const DEFAULT_RENDERING_SETTINGS: RenderingSettings = {
    borderOpacity: 0.25,
    useNewBorders: true,
    borderThickness: 7.5,
    borderColor: [85,85,85]
}
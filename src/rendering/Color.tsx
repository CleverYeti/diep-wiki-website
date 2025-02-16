export {}
export type Color = [number, number, number]
export function renderColorToCss(color: Color, opacity = 1) {
    return "rgb(" + color.map(v => Math.round(v)).join(",") + "," + opacity + ")"
}
export function multiplyColor(color: Color, factor: number): Color {
    return color.map(v => v * factor) as Color
}
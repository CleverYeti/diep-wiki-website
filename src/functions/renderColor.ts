export function renderColor(clr: Array<number>, opacity = 1) {
    return "rgb(" + clr.map(v => Math.round(v)).join(",") + "," + opacity + ")"
}
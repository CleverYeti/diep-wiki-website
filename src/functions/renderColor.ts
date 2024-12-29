export function renderColor(clr: Array<number>, opacity = 1) {
    return "rgb(" + clr.join(",") + "," + opacity + ")"
}
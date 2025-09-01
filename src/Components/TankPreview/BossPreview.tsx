import { useState, MutableRefObject, useRef} from "react";
import { Tank } from "../../Data/tanksData";
import "./tankPreview.css"
import settingsIcon from '/icons/settings.svg'
import downloadIcon from '/icons/download.svg'
import { renderColor } from "../../functions/renderColor"
import { tankColors } from "../../Data/tanksData";
import { downloadSVG } from "../../functions/downloadSVG";
import { RenderTank } from "../RenderedComponents/renderTank";


export function BossPreview({tank}: {tank: Tank}) {
    const [isSettingsOpen, setSettingsOpen] = useState(false)
    const [isDownloadOpen, setDownloadOpen] = useState(false)

    const [rotation, setRotation] = useState(-45)
    const [gridColor, setGridColor] = useState([255,255,255])
    const [gridAlpha, setGridAlpha] = useState(0.1)
    const [gridHexColor, setGridHexColor] = useState(getHexColor(gridColor))

    function setGridColorFromHex(value:string) {
        setGridHexColor(value)
        value = value.replaceAll(" ", "")
        if (value[0] == "#") value = value.slice(1)
        const hexRegex = /^[0-9A-Fa-f]{3,6}$/;
        if (!hexRegex.test(value)) return
        if (value.length === 3) value = value.split('').map(x => x + x).join('')
        if (value.length !== 6) return
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        setGridColor([r, g, b])
    }

    function getHexColor(color: Array<number>) {
        return "#" + color.map(value => value.toString(16).padStart(2, '0')).join('');
    }

    const elementRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={elementRef} className="tank-preview" style={{"--color": renderColor(tank.bodyColor ?? [0,0,0])} as React.CSSProperties}>
            <RenderTank
                tank={tank}
                rotation={rotation / 180 * Math.PI}
                color={tank.bodyColor ?? [0,0,0]}
                gridColor={gridColor}
                gridAlpha={gridAlpha}
                zoom={tank.displayScale ?? 1}
            />
            <div className="toggle-settings corner-button" onClick={() => {setSettingsOpen(!isSettingsOpen); setDownloadOpen(false)}}>
                <img src={settingsIcon}/>
            </div>
            <div className="toggle-download corner-button" onClick={() => {setDownloadOpen(!isDownloadOpen); setSettingsOpen(false)}}>
                <img src={downloadIcon} alt="" />
            </div>
            <div className="preview-download" data-active={isDownloadOpen}>
                <a className="option" onClick={() => {
                    if (!elementRef.current) return
                    const svg = elementRef.current.querySelector("svg")
                    if (!svg) return
                    downloadSVG(svg, tank.key, false, 1)
                    setDownloadOpen(false)
                }}>Download SVG</a>
                <a className="option" onClick={() => {
                    if (!elementRef.current) return
                    const svg = elementRef.current.querySelector("svg")
                    if (!svg) return
                    downloadSVG(svg, tank.key, true, 1)
                    setDownloadOpen(false)
                }}>Download PNG (x1)</a>
                <a className="option" onClick={() => {
                    if (!elementRef.current) return
                    const svg = elementRef.current.querySelector("svg")
                    if (!svg) return
                    downloadSVG(svg, tank.key, true, 5)
                    setDownloadOpen(false)
                }}>Download PNG (x5)</a>
            </div>
            <div className="preview-settings" data-active={isSettingsOpen}>
                <div className="setting-row">
                    <div className="name">Rotation</div>
                    <input type="number" name="" id="" min={0} max={360} value={rotation} onChange={event => setRotation(parseInt(event.target.value))}/>
                    <input type="range" name="" id="" min={0} max={360} value={rotation} onChange={event => setRotation(parseInt(event.target.value))}/>
                </div>
                <div className="setting-row">
                    <div className="name">Grid Color</div>
                    <input type="text" name="" id="" value={gridHexColor} onChange={event => setGridColorFromHex(event.target.value)}/>
                    <input type="color" name="" id="" value={getHexColor(gridColor)} onChange={event => setGridColorFromHex(event.target.value)}/>
                </div>
                <div className="setting-row grid-alpha">
                    <div className="name">Grid Alpha</div>
                    <input type="number" name="" id="" min={0} max={1} value={gridAlpha} step={0.01} onChange={event => setGridAlpha(Math.min(1, parseFloat(event.target.value)))}/>
                    <input type="range" name="" id="" min={0} max={1} value={gridAlpha} step={0.01} onChange={event => setGridAlpha(Math.min(1, parseFloat(event.target.value)))}/>
                </div>
            </div>
        </div>
    )
}
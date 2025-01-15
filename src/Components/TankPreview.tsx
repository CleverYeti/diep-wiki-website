import { useState, MutableRefObject, useRef} from "react";
import { BarrelTypes, Tank } from "../tanksData";
import { RenderTank } from "./renderTank";
import "./tankPreview.css"
import settingsIcon from '/icons/settings.svg'
import downloadIcon from '/icons/download.svg'
import { renderColor } from "../functions/renderColor"
import { tankColors } from "../tanksData";
import { downloadSVG } from "../functions/downloadSVG";


export function TankPreview({tank}: {tank: Tank}) {
    const [isSettingsOpen, setSettingsOpen] = useState(false)
    const [isDownloadOpen, setDownloadOpen] = useState(false)

    let hasAutoTurret = false
    let hasAutoCannons = false
    for (let barrel of tank.barrels) {
        if (barrel.type == BarrelTypes.autoTurret) hasAutoTurret = true
        if (barrel.type == BarrelTypes.autoCannon) hasAutoCannons = true
    }

    const [rotation, setRotation] = useState(315)
    const [autoTurretRotation, setAutoTurretRotation] = useState(0)
    const [color, setColor] = useState([0, 177, 222])
    const [gridColor, setGridColor] = useState([255,255,255])
    const [gridAlpha, setGridAlpha] = useState(0.1)
    const [fixedLevel, setFixedLevel] = useState(0)
    const [lastTankFixedLevel, setLastTankFixedLevel] = useState("")
    const setLevel = (level: number) => {
        setLastTankFixedLevel(tank.key)
        setFixedLevel(level)
    }
    const [hexColor, setHexColor] = useState(getHexColor(color))
    const [gridHexColor, setGridHexColor] = useState(getHexColor(gridColor))
    function setColorFromHex(value:string) {
        setHexColor(value)
        value = value.replaceAll(" ", "")
        if (value[0] == "#") value = value.slice(1)
        const hexRegex = /^[0-9A-Fa-f]{3,6}$/;
        if (!hexRegex.test(value)) return
        if (value.length === 3) value = value.split('').map(x => x + x).join('')
        if (value.length !== 6) return
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        setColor([r, g, b])
    }
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
        <div ref={elementRef} className="tank-preview" style={{"--color": renderColor(tankColors[tank.color ?? 0])} as React.CSSProperties}>
            <RenderTank
                tank={tank}
                rotation={rotation / 180 * Math.PI}
                color={color}
                gridColor={gridColor}
                gridAlpha={gridAlpha}
                autoTurretRotation={autoTurretRotation / 180 * Math.PI}
                level={lastTankFixedLevel == tank.key ? fixedLevel : Math.max(1, tank.levelRequirement ?? 0)}
                zoom={tank.displayScale ?? 1}
            />
            <div className="toggle-settings corner-button" onClick={() => {setSettingsOpen(!isSettingsOpen); setDownloadOpen(false)}}>
                <img src={settingsIcon}/>
            </div>
            <div className="toggle-download corner-button" onClick={() => {setDownloadOpen(!isDownloadOpen); setSettingsOpen(false)}}>
                <img src={downloadIcon} alt="" />
            </div>
            <div className="tank-name">{tank.name}</div>
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
                    <div className="name">Level</div>
                    <input type="number" name="" id="" min={1} max={45}
                        value={lastTankFixedLevel == tank.key ? fixedLevel : Math.max(1, tank.levelRequirement ?? 0)}
                        onChange={event => setLevel(parseInt(event.target.value))}
                    />
                    <input type="range" name="" id="" min={1} max={45}
                        value={lastTankFixedLevel == tank.key ? fixedLevel : Math.max(1, tank.levelRequirement ?? 0)}
                        onChange={event => setLevel(parseInt(event.target.value))}
                    />
                </div>
                {
                    hasAutoTurret? <>
                        <div className="setting-row">
                            <div className="name">Turret^</div>
                            <input type="number" name="" id="" min={0} max={360} value={autoTurretRotation} onChange={event => setAutoTurretRotation(parseInt(event.target.value))}/>
                            <input type="range" name="" id="" min={0} max={360} value={autoTurretRotation} onChange={event => setAutoTurretRotation(parseInt(event.target.value))}/>
                        </div>
                    </> : hasAutoCannons ? <>
                        <div className="setting-row">
                            <div className="name">Turret^</div>
                            <input type="number" name="" id="" min={-90} max={90} value={autoTurretRotation} onChange={event => setAutoTurretRotation(parseInt(event.target.value))}/>
                            <input type="range" name="" id="" min={-90} max={90} value={autoTurretRotation} onChange={event => setAutoTurretRotation(parseInt(event.target.value))}/>
                        </div>
                    </> : <></>
                }
                <div className="setting-row">
                    <div className="name">Rotation</div>
                    <input type="number" name="" id="" min={0} max={360} value={rotation} onChange={event => setRotation(parseInt(event.target.value))}/>
                    <input type="range" name="" id="" min={0} max={360} value={rotation} onChange={event => setRotation(parseInt(event.target.value))}/>
                </div>
                <div className="setting-row">
                    <div className="name">Color</div>
                    <input type="text" name="" id="" value={hexColor} onChange={event => setColorFromHex(event.target.value)}/>
                    <input type="color" name="" id="" value={getHexColor(color)} onChange={event => setColorFromHex(event.target.value)}/>
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
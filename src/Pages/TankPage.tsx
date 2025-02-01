import { useParams } from "react-router-dom"
import "./TankPage.css"
import { tanksData, Tank, statPointColors, statPointSetups } from "../tanksData"
import { Page404 } from "./Page404"
import { tankColors } from "../tanksData"
import { Link } from "react-router-dom"
import { renderColor } from "../functions/renderColor"
import { RenderTank } from "../Components/renderTank"
import { TankPreview } from "../Components/TankPreview"
import { BarrelStatsDisplay, TankStatsDisplay } from "../Components/StatBlocks"
import { PageXMLBody } from "../Components/PageXMLBody"
import { basePath } from "../App"
import { useState } from "react"

function TankGrid({tankIds}: {tankIds: Array<string>}) {
    return (
        <div className="tank-grid">
            {tankIds.map((id, i) => {
                const tank = tanksData[id]
                return (
                    
                    <Link to={"/tanks/" + id} className="tank" style={{"--color": renderColor(tankColors[i])} as React.CSSProperties}>
                        <RenderTank tank={tank} level={Math.max(tank.levelRequirement ?? 0, 1)} rotation={-Math.PI / 4} />
                        <div className="name">{tank.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export function TankPage() {
    let { tankId } = useParams()
    if (!(tankId ?? "" in tanksData)) {
        return (<Page404/>)
    }
    const tank:Tank = tanksData[tankId ?? ""]
    if (tank == undefined) {
        return (<Page404/>)
    }

    const [statsLevel, setStatsLevel] = useState(1)
    const [levelInputValue, setLevelInputValue] = useState("1")
    function attemptSettingStatsLevel(inputValue: string) {
        try {
            let value = parseInt(inputValue)
            if (isNaN(value)) value = 1
            setStatsLevel(Math.max(1, Math.min(value, 45)))
        } catch (err) {
            // nothing
        }
    }
    const [statsBuild, setStatsBuild] = useState([0,0,0,0,0,0,0,0])
    const [buildInputValue, setBuildInputValue] = useState("0/0/0/0/0/0/0/0")

    const [statsCompareCopyLevel, setStatsCopyLevel] = useState(true)
    const [statsCompareCopyBuild, setStatsCopyBuild] = useState(false)
    const [statsCompareCopyTank, setStatsCopyTank] = useState(false)

    function attemptSettingStatsBuild(inputValue: string) {
        let statPointSetup = statPointSetups[tank.statPointSetup ?? "normal"] ?? statPointSetups["normal"]
        
        const split = inputValue.split("/")
        const values = [0,0,0,0,0,0,0,0]
        for (let i = 0; i < split.length && i < 8; i++) {
            try {
                let value = parseInt(split[i])
                if (isNaN(value)) value = 0
                values[i] = Math.max(0, Math.min(value, statPointSetup.limits[i]))
            } catch(err) {
                // nothing
            }
        }
        setStatsBuild(values)
    }

    return (
        <>
             <div id="tank-page">
                <div id="tank-page-main-content">
                    <PageXMLBody url={`${basePath}tankPages${tank.levelRequirement ? "/level" + tank.levelRequirement : "/other"}/${tank.key}.xml`}/>
                </div>
                <div id="tank-page-sidebar">
                    <TankPreview tank={tank}/>
                    {tank.upgradesFrom && tank.upgradesFrom.length > 0 && (
                        <div className="section">
                            <div className="title">Upgrades From</div>
                            <TankGrid tankIds={tank.upgradesFrom}/>
                        </div>
                    )}
                    {tank.upgrades && tank.upgrades.length > 0 && (
                        <div className="section">
                            <div className="title">Upgrades Into</div>
                            <TankGrid tankIds={tank.upgrades}/>
                        </div>
                    )}
                    
                    <div className="title">Stats</div>
                    <div className="stats-settings">
                        <div className="row">
                            <div className="name">Level:</div>
                            <input type="number" value={levelInputValue}
                                onChange={(event) => {
                                    setLevelInputValue(event.target.value)
                                    attemptSettingStatsLevel(event.target.value)
                                }} onBlur={(event) => {
                                    attemptSettingStatsLevel(event.target.value)
                                    setLevelInputValue("" + statsLevel)
                                }}
                                onKeyDown={(event) => {
                                    if (event.key != "Enter") return
                                    (event.target as HTMLInputElement).blur()
                                }}
                            />
                        </div>
                        <div className="row">
                            <div className="name">Build:</div>
                            <div className="build-input">
                                <div className="preview">
                                    {
                                        Array(8).fill(0).map((_, i) => (
                                            <div className="point-count" style={{"--color": renderColor(statPointColors[i])} as React.CSSProperties}>{statsBuild[i]}</div>
                                        ))
                                    }
                                </div>
                                <input type="text" value={buildInputValue}
                                    onChange={(event) => {
                                        setBuildInputValue(event.target.value)
                                        attemptSettingStatsBuild(event.target.value)
                                    }}
                                    onBlur={(event) => {
                                        attemptSettingStatsBuild(event.target.value)
                                        setBuildInputValue(statsBuild.join("/"))
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key != "Enter") return
                                        (event.target as HTMLInputElement).blur()
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="name">vs</div>
                        </div>

                        <div className="row">
                            <div className="selector">
                                <div className="option" data-active={!statsCompareCopyLevel} onClick={() => setStatsCopyLevel(false)}>Level 1</div>
                                <div className="option" data-active={statsCompareCopyLevel} onClick={() => setStatsCopyLevel(true)}>Same level</div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="selector">
                                <div className="option" data-active={!statsCompareCopyTank} onClick={() => setStatsCopyTank(false)}>Basic Tank</div>
                                <div className="option" data-active={statsCompareCopyTank} onClick={() => setStatsCopyTank(true)}>Same Tank</div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="selector">
                                <div className="option" data-active={!statsCompareCopyBuild} onClick={() => setStatsCopyBuild(false)}>No build</div>
                                <div className="option" data-active={statsCompareCopyBuild}  onClick={() => setStatsCopyBuild(true)}>Same build</div>
                            </div>
                        </div>
                    </div>
                    <div className="section stats">
                        <div className="stats-header">
                            <div className="title">Tank Stats</div>
                            <RenderTank tank={tank} highlight={"body"} rotation={Math.PI * 1.75} zoom={1.5} level={statsLevel}/>
                        </div>
                        <TankStatsDisplay
                            tank={tank}
                            level={statsLevel}
                            points={statsBuild}
                            comparisonTank={statsCompareCopyTank ? tank : tanksData["basic"]}
                            comparisonLevel={statsCompareCopyLevel ? statsLevel : 1}
                            comparisonPoints={statsCompareCopyBuild ? statsBuild : [0,0,0,0,0,0,0,0]}
                        />
                    </div>
                    {
                        Object.entries(tank.barrelStats).map(([key, stats]) => {
                            return (
                                <div className="section stats">
                                    <div className="stats-header">
                                        <div className="title">{stats.name}</div>
                                        <RenderTank tank={tank} highlight={key} rotation={Math.PI * 1.75} zoom={1.5} level={statsLevel}/>
                                    </div>
                                    <BarrelStatsDisplay
                                        stats={stats}
                                        level={statsLevel}
                                        points={statsBuild}
                                        comparisonStats={statsCompareCopyTank ? stats : tanksData["basic"].barrelStats["main"]}
                                        comparisonLevel={statsCompareCopyLevel ? statsLevel : 1}
                                        comparisonPoints={statsCompareCopyBuild ? statsBuild : [0,0,0,0,0,0,0,0]}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
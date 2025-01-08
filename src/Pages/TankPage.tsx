import { useParams } from "react-router-dom"
import "./TankPage.css"
import { tanksData, Tank } from "../tanksData."
import { Page404 } from "./Page404"
import { tankColors } from "../tanksData."
import { Link } from "react-router-dom"
import { renderColor } from "../functions/renderColor"
import { RenderTank } from "../Components/renderTank"
import { TankPreview } from "../Components/TankPreview"
import { BarrelStatsDisplay, TankStatsDisplay } from "../Components/StatBlocks"
import { PageXMLBody } from "../Components/PageXMLBody"

const basePath = import.meta.env.BASE_URL || '/';

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

    return (
        <>
             <div id="tank-page">
                <div id="tank-page-main-content">
                    <PageXMLBody url={`${basePath}tankPages/${tank.key}.xml`}/>
                </div>
                <div id="tank-page-sidebar">
                    <TankPreview tank={tank}/>
                    {tank.upgradesFrom.length > 0 && (
                        <div className="section">
                            <div className="title">Upgrades From</div>
                            <TankGrid tankIds={tank.upgradesFrom}/>
                        </div>
                    )}
                    {tank.upgrades.length > 0 && (
                        <div className="section">
                            <div className="title">Upgrades Into</div>
                            <TankGrid tankIds={tank.upgrades}/>
                        </div>
                    )}
                    
                    <div className="title">Stats</div>

                    <div className="section stats">
                        <div className="stats-header">
                            <div className="title">Tank Stats</div>
                            <RenderTank tank={tank} highlight={"body"} rotation={Math.PI * 1.75} zoom={1.5}/>
                        </div>
                        <TankStatsDisplay tank={tank} level={1} points={[0,0,0,0,0,0,0,0]}/>
                    </div>
                    {
                        Object.entries(tank.barrelStats).map(([key, stats]) => {
                            return (
                                <div className="section stats">
                                    <div className="stats-header">
                                        <div className="title">{stats.name}</div>
                                        <RenderTank tank={tank} highlight={key} rotation={Math.PI * 1.75} zoom={1.5}/>
                                    </div>
                                    <BarrelStatsDisplay stats={stats} level={1} points={[0,0,0,0,0,0,0,0]}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
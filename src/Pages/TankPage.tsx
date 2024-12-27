import { useParams } from "react-router-dom"
import "./TankPage.css"
import { tanksData, Tank } from "../tanksData."
import { Page404 } from "./Page404"
import { tankColors } from "../tanksData."
import { Link } from "react-router-dom"
import { renderColor } from "../functions/renderColor"
import { RenderTank } from "../Components/renderTank"
import { TankPreview } from "../Components/TankPreview"

function TankGrid({tankIds}: {tankIds: Array<string>}) {
    return (
        <div className="tank-grid">
            {tankIds.map(id => {
                const tank = tanksData[id]
                return (
                    
                    <Link to={"/tanks/" + id} className="tank" style={{"--color": renderColor(tankColors[tank.color])} as React.CSSProperties}>
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
             <div id="tank-header-section">
                <div id="tank-header-main"></div>
                <div id="tank-header-sidebar">
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
                </div>
                <div id="stats">
                    <div className="title">Stats</div>
                    <div className="carousel">
                        <div className="block">
                            <div className="title"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
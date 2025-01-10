import { Link } from "react-router-dom";
import { Tank, tanksData, tankColors} from "../tanksData";
import { renderColor } from "../functions/renderColor";
import { RenderTank } from "../Components/renderTank";
import "./TanksPage.css"

export function TanksPage() {
    return (
        <div id="tanks-page">
            <div id="tanks-page-grid">
            {
                    Object.entries(tanksData).map(([tankKey, tank]) => {
                        return (
                            <Link className="tank-card" key={tank.key} to={"/tanks/" + tank.key} style={{"--color": renderColor(tankColors[tank.color])} as React.CSSProperties}>
                                <RenderTank tank={tank} level={Math.max(tank.levelRequirement ?? 0, 1)} rotation={-Math.PI / 4} />
                                <div className="name">{tank.name}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
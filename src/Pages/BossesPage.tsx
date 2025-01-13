import { Link } from "react-router-dom";
import { Tank, tankColors} from "../tanksData";
import { renderColor } from "../functions/renderColor";
import { RenderTank } from "../Components/renderTank";
import "./TanksPage.css"
import { bossesData } from "../bossesData";

export function BossesPage() {
    return (
        <div id="tanks-page" className="bosses-page">
            <div id="tanks-page-grid">
            {
                    Object.entries(bossesData).map(([bossKey, boss]) => {
                        return (
                            <Link className="tank-card" key={boss.key} to={"/bosses/" + boss.key} style={{"--color": renderColor(boss.bodyColor ?? [0,0,0])} as React.CSSProperties}>
                                <RenderTank tank={boss} color={boss.bodyColor ?? [0,0,0]} rotation={-Math.PI / 4} zoom={boss.displayScale ?? 1}/>
                                <div className="name">{boss.name}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
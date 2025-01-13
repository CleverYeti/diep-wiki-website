import { useParams } from "react-router-dom"
import "./TankPage.css"
import { Page404 } from "./Page404"
import { RenderTank } from "../Components/renderTank"
import { TankPreview } from "../Components/TankPreview"
import { BarrelStatsDisplay, TankStatsDisplay } from "../Components/StatBlocks"
import { PageXMLBody } from "../Components/PageXMLBody"
import { basePath } from "../App"
import { bossesData } from "../bossesData"
import { Tank } from "../tanksData"
import { BossPreview } from "../Components/BossPreview"

export function BossPage() {
    let { bossId } = useParams()
    if (!(bossId ?? "" in bossesData)) {
        return (<Page404/>)
    }
    const boss:Tank = bossesData[bossId ?? ""]
    if (boss == undefined) {
        return (<Page404/>)
    }

    return (
        <>
             <div id="tank-page">
                <div id="tank-page-main-content">
                    <PageXMLBody url={`${basePath}bossPages/${boss.key}.xml`}/>
                </div>
                <div id="tank-page-sidebar">
                    <BossPreview tank={boss}/>
                    
                    <div className="title">Stats</div>

                    <div className="section stats">
                        <div className="stats-header">
                            <div className="title">Boss Stats</div>
                            <RenderTank tank={boss} highlight={"body"} rotation={Math.PI * 1.75} zoom={1.5} color={boss.bodyColor ?? [0,0,0]}/>
                        </div>
                        <TankStatsDisplay tank={boss} level={1} points={[0,0,0,0,0,0,0,0]}/>
                    </div>
                    {
                        Object.entries(boss.barrelStats).map(([key, stats]) => {
                            return (
                                <div className="section stats">
                                    <div className="stats-header">
                                        <div className="title">{stats.name}</div>
                                        <RenderTank tank={boss} highlight={key} rotation={Math.PI * 1.75} zoom={1.5} color={boss.bodyColor ?? [0,0,0]}/>
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
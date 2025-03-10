import { Link } from "react-router-dom";
import { Tank, tanksData, tankColors} from "../tanksData";
import { renderColor } from "../functions/renderColor";
import { RenderTank } from "../Components/renderTank";
import "./TanksPage.css"
import { useState } from "react";
import gridViewIcon from '/icons/grid-view.svg'
import tableViewIcon from '/icons/table-view.svg'
import chevronIcon from '/icons/chevron-down.svg'

export function TanksPage() {
    const [isTableView, setTableView] = useState(false)
    const [sort, setSort] = useState("id")
    const [sortDirection, setSortDirection] = useState(1)

    function sortClick(column = "") {
        if (sort == column) {
            setSortDirection(-sortDirection)
        } else {
            setSort(column)
            setSortDirection(1)
        }
    }

    function columnButton(id:string, name:string) {
        return (
            <div
                className={"column " + id}
                onClick={() => sortClick(id)}
                data-is-active={sort == id}
                data-is-flipped={sortDirection == -1}
            >
                {name}
                <img src={chevronIcon} alt="" />
            </div>

        )
    }

    return (
        <div id="tanks-page">
            <div id="tanks-page-settings">
                <div className="space"></div>
                <div className="view-type-selector">
                    <div className="view-type" data-is-active={isTableView} onClick={() => setTableView(true)}>
                        <img src={tableViewIcon} alt="" />
                    </div>
                    <div className="view-type" data-is-active={!isTableView} onClick={() => setTableView(false)}>
                        <img src={gridViewIcon} alt="" />
                    </div>
                </div>
            </div>
            {
                isTableView ? <>
                    <div id="tanks-page-table">
                        <div className="header-row">
                            {columnButton("name", "Name")}
                            {columnButton("id", "Id")}
                            {columnButton("tier", "Tier")}
                            {columnButton("level", "Level")}
                        </div>
                        {
                            Object.entries(tanksData).sort((a: [string, Tank], b:[string, Tank]) => {
                                if (sort == "name") {
                                    if (a[1].name < b[1].name) {
                                        return -sortDirection;
                                    }
                                    if (a[1].name > b[1].name) {
                                        return sortDirection;
                                    }
                                    return 0
                                }
                                if (sort == "id") {
                                    return sortDirection * ((a[1].id ?? 0) - (b[1].id ?? 0))
                                }
                                if (sort == "tier" || sort == "level") {
                                    return sortDirection * ((a[1].levelRequirement ?? 0) - (b[1].levelRequirement ?? 0))
                                }
                                return 0
                            }).map(([tankKey, tank]) => {
                                return (
                                    <Link className="tank-row" key={tank.key} to={"/tanks/" + tank.key} style={{"--color": renderColor(tankColors[tank.color ?? 0])} as React.CSSProperties}>
                                        <div className="image">
                                            <RenderTank tank={tank} level={Math.max(tank.levelRequirement ?? 0, 1)} rotation={-Math.PI / 4} zoom={1.25}/>
                                        </div>
                                        <div className="column name">{tank.name}</div>
                                        <div className="column id">{tank.id ?? "?"}</div>
                                        <div className="column tier">{Math.round((tank.levelRequirement ?? 0) / 15) + 1}</div>
                                        <div className="column level">{tank.levelRequirement ?? "?"}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </> : <>
                    <div id="tanks-page-grid">
                        {
                            Object.entries(tanksData).map(([tankKey, tank]) => {
                                return (
                                    <Link className="tank-card" key={tank.key} to={"/tanks/" + tank.key} style={{"--color": renderColor(tankColors[tank.color ?? 0])} as React.CSSProperties}>
                                        <RenderTank tank={tank} level={Math.max(tank.levelRequirement ?? 0, 1)} rotation={-Math.PI / 4} />
                                        <div className="name">{tank.name}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </>
            }
            
        </div>
    )
}
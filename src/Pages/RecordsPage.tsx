import { Link } from "react-router-dom";
import { Tank, tanksData, tankColors} from "../tanksData";
import { renderColor } from "../functions/renderColor";
import { RenderTank } from "../Components/renderTank";
import "./TanksPage.css"
import { useState } from "react";
import gridViewIcon from '/icons/grid-view.svg'
import tableViewIcon from '/icons/table-view.svg'
import chevronIcon from '/icons/chevron-down.svg'
import { RecordData } from "../recordData";
import { formatScore } from "../functions/formatScore";

export function RecordsPage({
    recordData
}: {
    recordData: RecordData|null
}) {
    const [sort, setSort] = useState("id")
    const [sortDirection, setSortDirection] = useState(1)

    function sortClick(column = "") {
        if (sort == column) {
            setSortDirection(-sortDirection)
        } else {
            setSort(column)
            setSortDirection(-1)
        }
    }

    function columnButton(id: string, name: string) {
        return (
            <div
                className={"column " + (id == "name" ? "name" : "gamemode")}
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
            <div id="tanks-page-table" className="records-page-table">
                <div className="header-row">
                    {columnButton("name", "Name")}
                    {columnButton("ffa", "FFA")}
                    {columnButton("2tdm", "2 Teams")}
                    {columnButton("4tdm", "4 Teams")}
                    {columnButton("maze", "Maze")}
                </div>
                {
                    recordData != null && Object.entries(tanksData).sort((a: [string, Tank], b:[string, Tank]) => {
                        if (sort == "name") {
                            if (a[1].name < b[1].name) {
                                return -sortDirection;
                            }
                            if (a[1].name > b[1].name) {
                                return sortDirection;
                            }
                            return 0
                        } else if (sort == "id") {
                            return sortDirection * ((a[1].id ?? 0) - (b[1].id ?? 0))
                        } {
                            return sortDirection * ((recordData[a[0]]?.[sort]?.score ?? 0) - (recordData[b[0]]?.[sort]?.score ?? 0))
                        }
                        return 0
                    }).filter(([tankKey, tank]) => recordData[tankKey] != undefined).map(([tankKey, tank]) => {
                        return (
                            <Link className="tank-row" key={tank.key} to={"/tanks/" + tank.key} style={{"--color": renderColor(tankColors[tank.color ?? 0])} as React.CSSProperties}>
                                <div className="image">
                                    <RenderTank tank={tank} level={Math.max(tank.levelRequirement ?? 0, 1)} rotation={-Math.PI / 4} zoom={1.25}/>
                                </div>
                                <div className="column name">{tank.name}</div>
                                {["ffa", "2tdm", "4tdm", "maze"].map(gamemode => (
                                    <div className="column gamemode">
                                        {formatScore(recordData[tankKey]?.[gamemode]?.score ?? 0)}
                                        <div className="record-name">
                                            {recordData[tankKey]?.[gamemode].scorer ?? ""}
                                        </div>
                                    </div>
                                ))}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import { Tank, tanksData, tankColors} from "../../Data/tanksData";
import { renderColor } from "../../functions/renderColor";
import { RenderTank } from "../../Components/RenderedComponents/renderTank";
import "./RecordsPage.css"
import { useState } from "react";
import gridViewIcon from '/icons/grid-view.svg'
import tableViewIcon from '/icons/table-view.svg'
import chevronIcon from '/icons/chevron-down.svg'
import { RecordData } from "../../Data/recordData";
import { formatScore } from "../../functions/formatScore";

export function RecordsPage({
    pcRecordData,
    mobileRecordData,
}: {
    pcRecordData: RecordData|null
    mobileRecordData: RecordData|null
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

    const [isShowingMobile, setIsShowingMobile] = useState(false)

    const recordData = isShowingMobile ? mobileRecordData : pcRecordData
    return (
        <div id="tanks-page">
            <div id="tanks-page-settings">
                <div className="platform-selector">
                    <div className="platform" onClick={() => setIsShowingMobile(false)} data-is-active={!isShowingMobile}>
                        PC Records
                    </div>
                    <div className="platform" onClick={() => setIsShowingMobile(true)} data-is-active={isShowingMobile}>
                        Mobile Records
                    </div>
                </div>
                <div className="space"></div>
            </div>
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
                                {["ffa", "2tdm", "4tdm", "maze"].map(gamemode => {
                                    const entry = recordData[tankKey]?.[gamemode]
                                    if (entry == null) return  (
                                        <div className="column gamemode">
                                            0
                                        </div>
                                    )
                                    return (
                                        <div className="column gamemode">
                                            {formatScore(entry.score)}
                                            <div className="record-name">
                                                {entry.scorer}
                                            </div>
                                            {entry.year != null && (
                                                <div className="record-year">
                                                    ({entry.year})
                                                </div>
                                            )}
                                            <div className="record-proof" onClick={(event) => {event.stopPropagation()}}>
                                                {entry.proofImages == null && entry.proofVideo == null && <>No proof in the database</>}
                                                {entry.proofVideo != null && <>
                                                    <a target="_blank" href={recordData[tankKey]?.[gamemode]?.proofVideo}>{recordData[tankKey]?.[gamemode]?.proofVideo}</a>
                                                    {entry.proofVideo.includes("youtu.be") &&
                                                        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + (entry.proofVideo.split("youtu.be/")[1]?.split("?")[0])} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                                    }
                                                    {entry.proofVideo.includes("youtube.com") && (new URL(entry.proofVideo)).searchParams.get("v") != null && (
                                                        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + (new URL(entry.proofVideo)).searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                                    )}
                                                </>}
                                                {entry.proofImages != null && entry.proofImages.map((imageURL, i) => (
                                                    <a target="_blank" href={imageURL} key={i}>{imageURL}</a>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
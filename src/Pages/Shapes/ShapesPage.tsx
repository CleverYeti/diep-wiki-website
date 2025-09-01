import { basePath } from "../../App";
import { PageXMLBody } from "../../Components/XML/PageXMLBody";
import { RenderShape } from "../../Components/RenderedComponents/renderShape";
import { ShapeStatsDisplay } from "../../Components/StatBlocks/StatBlocks";
import { renderColor } from "../../functions/renderColor";
import { shapesData, shinyColor } from "../../Data/shapesData";
import "./ShapesPage.css"

export function ShapesPage() {
    return (
        <div id="shapes-page">
            <div id="shapes-page-grid">
            {
                Object.entries(shapesData).map(([shapeKey, shape]) => {
                    return (
                        <div className="shape-card" style={{"--color": renderColor(shape.color)} as React.CSSProperties}>
                            <div className="image">
                                <RenderShape shape={shape}/>
                                <div className="name">{shape.name}</div>
                            </div>
                            <div className="stats">
                                <ShapeStatsDisplay shape={shape}/>
                            </div>
                        </div>
                    )
                })
            }
            {
                Object.entries(shapesData).map(([shapeKey, shape]) => {
                    return (
                        <div className="shape-card" style={{"--color": renderColor(shinyColor)} as React.CSSProperties}>
                            <div className="image">
                                <RenderShape shape={shape} isShiny={true}/>
                                <div className="name">Shiny {shape.name}</div>
                            </div>
                            <div className="stats">
                                <ShapeStatsDisplay shape={shape} isShiny={true}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div id="shapes-page-content">
                <PageXMLBody url={`${basePath}pages/shapes.xml`}/>
            </div>
        </div>
    )
}
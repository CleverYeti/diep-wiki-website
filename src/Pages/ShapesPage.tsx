import { basePath } from "../App";
import { PageXMLBody } from "../Components/PageXMLBody";
import { RenderShape } from "../Components/renderShape";
import { ShapeStatsDisplay } from "../Components/StatBlocks";
import { renderColor } from "../functions/renderColor";
import { shapesData } from "../shapesData";
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
            </div>
            <div id="shapes-page-content">
                <PageXMLBody url={`${basePath}pages/shapes.xml`}/>
            </div>
        </div>
    )
}
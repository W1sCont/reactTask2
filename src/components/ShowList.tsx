import React from "react";
import type { ICitySection } from "../types";

export class ShowList extends React.Component<ICitySection> {
    render() {
        const { title, paragraphs } = this.props;

        return (
            <div 
                className="card border-0 mb-4 text-light rounded-4 shadow-lg"
                style={{
                    backgroundColor: "rgba(30, 41, 59, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
            >
                <div className="card-body p-4 text-start">
                    <h3 className="h5 text-info border-start border-4 border-info ps-3 mb-4 fw-bold">
                        {title}
                    </h3>

                    <div className="d-flex flex-column gap-3">
                        {paragraphs.map((item, index) => {
                            const cleanText = item.replace(/^\d+\s*/, "");

                            return (
                                <div key={index} className="d-flex align-items-start gap-3">
                                    <span 
                                        className="mt-2 bg-info rounded-circle flex-shrink-0" 
                                        style={{ width: "8px", height: "8px" }}
                                    ></span>
                                    <span className="fs-6 lh-base text-light opacity-90">
                                        {cleanText}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
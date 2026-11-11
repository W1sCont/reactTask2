import React from "react";
import type { ICitySection, ICityPhoto } from "../types";
import { ShowList } from "./ShowList";

type CityHeaderProps = {
    name: string;
    country: string;
    foundedYear: number;
    description: ICitySection[];
    photos: ICityPhoto[];
};

export const CityHeader: React.FC<CityHeaderProps> = ({ 
    name, 
    country, 
    foundedYear, 
    description,
    photos 
    }) => {

    const coatOfArms = photos.find(p => p.caption.toLowerCase().includes("герб")) || photos[0];

    return (
        <div className="city-header-container">
            <div className="text-center mb-4">
                <h1 className="display-3 fw-bold text-white mb-2">{name}</h1>
                <p className="fs-5 text-light opacity-75">
                    <span className="badge bg-info text-dark me-2">{country}</span>
                    Засновано у {foundedYear} році
                </p>
            </div>

            {coatOfArms && (
                <div className="text-center mb-5">
                    <img 
                        src={coatOfArms.url} 
                        alt={coatOfArms.caption}
                        className="img-fluid"
                        style={{ 
                            maxHeight: "240px", 
                            objectFit: "contain",
                            filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.6))"
                        }}
                    />
                    <p className="text-light opacity-50 mt-2 small">{coatOfArms.caption}</p>
                </div>
            )}

            <div className="city-sections">
                {description.map((section, index) => (
                    <ShowList key={index} {...section} />
                ))}
            </div>
        </div>
    );
};
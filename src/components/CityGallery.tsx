import React, { useState } from "react";
import type { ICityPhoto } from "../types";

type CityGalleryProps = {
    photos: ICityPhoto[];
};

export const CityGallery: React.FC<CityGalleryProps> = ({ photos }) => {
    const [selectedPhoto, setSelectedPhoto] = useState<ICityPhoto | null>(null);

    if (!photos || photos.length === 0) return null;

    return (
        <>
            <div className="row g-4 mt-4">
                <h3 className="h4 mb-3 text-white fw-bold text-center">Галерея міста</h3>
                {photos.map((photo, index) => (
                    <div key={photo.id} className={`col-md-6 ${index % 2 === 0 ? 'pe-md-3' : 'ps-md-3'}`}>
                        <div 
                            className="card border-0 rounded-4 overflow-hidden text-light h-100"
                            style={{
                                backgroundColor: "rgba(30, 41, 59, 0.7)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                                cursor: "pointer" 
                            }}
                            // При кліку на картку відкриваємо це фото
                            onClick={() => setSelectedPhoto(photo)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                                e.currentTarget.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)";
                                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
                            }}
                        >
                            <div className="overflow-hidden" style={{ height: "260px" }}>
                                <img 
                                    src={photo.url} 
                                    alt={photo.caption} 
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div className="card-body text-center py-3 d-flex align-items-center justify-content-center">
                                <p className="card-text fw-medium m-0 fs-6">{photo.caption}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        backdropFilter: "blur(8px)",
                        zIndex: 1050, 
                        cursor: "zoom-out"
                    }}
                    onClick={() => setSelectedPhoto(null)} 
                >
                    <div 
                        className="position-relative text-center"
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            type="button" 
                            className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
                            aria-label="Close"
                            onClick={() => setSelectedPhoto(null)}
                            style={{ zIndex: 1060, cursor: "pointer" }}
                        ></button>

                        <img 
                            src={selectedPhoto.url} 
                            alt={selectedPhoto.caption} 
                            className="img-fluid rounded-4 shadow-lg mb-3"
                            style={{ 
                                maxHeight: "80vh", 
                                objectFit: "contain",
                                border: "1px solid rgba(255, 255, 255, 0.2)"
                            }}
                        />
                        <p className="text-white fs-5 fw-medium m-0">{selectedPhoto.caption}</p>
                    </div>
                </div>
            )}
        </>
    );
};
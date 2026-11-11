export interface ICitySection {
    title: string;      
    paragraphs: string[];
}

export interface ICityPhoto {
    id: number;
    url: string;
    caption: string;
}

export interface ICity {
    name: string;
    country: string;
    foundedYear: number;
    description: ICitySection[];
    photos: {
        id: number;
        url: string;
        caption: string;
    }[];
}
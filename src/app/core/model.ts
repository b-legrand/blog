
export interface Post {
    uuid: string;
    title: string;
    slug?: string;
    date?: Date;
    strip?: Strip;
    content?: string;
    comments?: Comment[];
    createdAt?: Date;
}

export interface Strip {
    cases: {[key: string]: Case};
}

export interface Case {
    content: any;
    bubbles: [];
}

export interface ThreeDeeCase {
    camera: any;
    scene: any;
    shaders?: any;
}

export interface SVGCase {
    shapes: string[];
}

export interface Comment {
    author: string;
    email: string;
    createdAt: Date;
    content: string;
}
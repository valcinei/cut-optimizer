export interface ICutOptimizer {
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;

    // fit(shapes: Shape[]): void;
    // findNode(root: any, width: number, height: number): void;
    // splitNode(node: any, width: number, height: number):any;
    // growNode(width: number, height: number):any;
    // growRight(width: number, height: number):any;
    // growDown(width: number, height: number):any;
    optmizer(items: Shape[], options?:any): any;
}

export class Shape {
    public height?: number;
    public width?: number;
    public x?: number;
    public y?: number;

    constructor(height?: number, width?: number, x?: number, y?: number){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;

    }
}


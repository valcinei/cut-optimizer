export interface ICutOptimizer {
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
    optmizer(items: Shape[], options?: any): any;
}
export declare class Shape {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    constructor(height?: number, width?: number, x?: number, y?: number);
}

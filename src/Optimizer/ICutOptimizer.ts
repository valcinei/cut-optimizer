export interface ICutOptimizer {
    optimize(items: Shape[], options?:any): any;
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


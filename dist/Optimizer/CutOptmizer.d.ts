import { ICutOptimizer, Shape } from './ICutOptimizer';
export declare class CutOptimizer implements ICutOptimizer {
    private root;
    constructor();
    private fit;
    private findNode;
    private splitNode;
    private growNode;
    private growRight;
    private growDown;
    optmizer(items: Shape[], options?: any): {
        width: number;
        height: number;
        items: Shape[];
    };
}

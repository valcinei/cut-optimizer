
import { CutOptimizer } from '../Optimizer/CutOptimizer';
import { Shape } from '../Optimizer/ICutOptimizer';
let cut_opt = new CutOptimizer(100,100);
let shapes = [
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100),
    new Shape(100,100)
];     

describe("Create Cut Opitimizer", () => {
    it("Has optimized shapes", () => {
        expect(cut_opt.optimize(shapes).items.length).toBeGreaterThan(0);
    }); 
} );
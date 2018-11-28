
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
describe("CutOpitimizer", () => {
    
    it("Has optimized shapes", () => {
        expect(cut_opt.optimize(shapes).items.length).toBeGreaterThan(0);
    });

    it("Has X coordinate", () => {
        cut_opt.optimize(shapes).items.forEach((item)=>expect(item.x).not.toBeNull());
    }); 

    it("Has Y coordinate", () => {
        cut_opt.optimize(shapes).items.forEach((item)=>expect(item.y).not.toBeNull());
    });

    it("Has X coordinate number", () => {
        cut_opt.optimize(shapes).items.forEach((item)=>expect(item.x).toEqual(jasmine.any(Number)));
    });
    it("Has Y coordinate number", () => {
        cut_opt.optimize(shapes).items.forEach((item)=>expect(item.y).toEqual(jasmine.any(Number)));
    });
    
} );
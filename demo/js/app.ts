import { CutOptimizer, Shape } from "cut-optimizer";
 
let cut_opt: CutOptimizer = new CutOptimizer();
 
let shapes: Shape [] =[
 new Shape(10, 22),
 new Shape(12, 220),
 new Shape(13, 230),
 new Shape(13, 20),
 new Shape(120, 241)
]
console.log(cut_opt.optimize(shapes));

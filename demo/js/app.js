"use strict";
exports.__esModule = true;
var cut_optimizer_1 = require("cut-optimizer");
var cut_opt = new cut_optimizer_1.CutOptimizer();
var shapes = [
    new cut_optimizer_1.Shape(10, 22),
    new cut_optimizer_1.Shape(12, 220),
    new cut_optimizer_1.Shape(13, 230),
    new cut_optimizer_1.Shape(13, 20),
    new cut_optimizer_1.Shape(120, 241)
];
console.log(cut_opt.optimize(shapes));

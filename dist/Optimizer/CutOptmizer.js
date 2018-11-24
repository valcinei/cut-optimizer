"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ICutOptimizer_1 = require("./ICutOptimizer");
var CutOptimizer = /** @class */ (function () {
    function CutOptimizer() {
    }
    CutOptimizer.prototype.fit = function (blocks) {
        // tslint:disable-next-line:prefer-const
        var n, node, block, len = blocks.length, fit;
        var width = len > 0 ? blocks[0].width : 0;
        var height = len > 0 ? blocks[0].height : 0;
        this.root = { x: 0, y: 0, width: width, height: height };
        for (n = 0; n < len; n++) {
            block = blocks[n];
            if (node = this.findNode(this.root, block.width, block.height)) {
                fit = this.splitNode(node, block.width, block.height);
                block.x = fit.x;
                block.y = fit.y;
            }
            else {
                fit = this.growNode(block.width, block.height);
                block.x = fit.x;
                block.y = fit.y;
            }
        }
    };
    CutOptimizer.prototype.findNode = function (root, width, height) {
        if (root.used) {
            return this.findNode(root.right, width, height) || this.findNode(root.down, width, height);
        }
        else if ((width <= root.width) && (height <= root.height)) {
            return root;
        }
        else {
            return null;
        }
    };
    CutOptimizer.prototype.splitNode = function (node, width, height) {
        node.used = true;
        node.down = { x: node.x, y: node.y + height, width: node.width, height: node.height - height };
        node.right = { x: node.x + width, y: node.y, width: node.width - width, height: height };
        return node;
    };
    CutOptimizer.prototype.growNode = function (width, height) {
        var canGrowDown = (width <= this.root.width);
        var canGrowRight = (height <= this.root.height);
        // tslint:disable-next-line:max-line-length
        var shouldGrowRight = canGrowRight && (this.root.height >= (this.root.width + width)); // attempt to keep square-ish by growing right when height is much greater than width
        // tslint:disable-next-line:max-line-length
        var shouldGrowDown = canGrowDown && (this.root.width >= (this.root.height + height)); // attempt to keep square-ish by growing down  when width  is much greater than height
        if (shouldGrowRight) {
            return this.growRight(width, height);
        }
        else if (shouldGrowDown) {
            return this.growDown(width, height);
        }
        else if (canGrowRight) {
            return this.growRight(width, height);
        }
        else if (canGrowDown) {
            return this.growDown(width, height);
        }
        else {
            return null;
        } // need to ensure sensible root starting size to avoid this happening
    };
    CutOptimizer.prototype.growRight = function (width, height) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            width: this.root.width + width,
            height: this.root.height,
            down: this.root,
            right: { x: this.root.width, y: 0, width: width, height: this.root.height }
        };
        var node;
        if (node = this.findNode(this.root, width, height)) {
            return this.splitNode(node, width, height);
        }
        else {
            return null;
        }
    };
    CutOptimizer.prototype.growDown = function (width, height) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            width: this.root.width,
            height: this.root.height + height,
            down: { x: 0, y: this.root.height, width: this.root.width, height: height },
            right: this.root
        };
        var node;
        if (node = this.findNode(this.root, width, height)) {
            return this.splitNode(node, width, height);
        }
        else {
            return null;
        }
    };
    CutOptimizer.prototype.optmizer = function (items, options) {
        options = options || {};
        var packer = new CutOptimizer();
        var inPlace = options.inPlace || false;
        // Clone the items.
        var newItems = items.map(function (item) { return inPlace ? item : { width: item.width, height: item.height, item: item }; });
        newItems = newItems.sort(function (a, b) {
            // TODO: check that each actually HAS a width and a height.
            // Sort based on the size (area) of each block.
            return (b.width * b.height) - (a.width * a.height);
        });
        packer.fit(newItems);
        var w = newItems.reduce(function (curr, item) { return Math.max(curr, item.x + item.width); }, 0);
        var h = newItems.reduce(function (curr, item) { return Math.max(curr, item.y + item.height); }, 0);
        var ret = {
            width: w,
            height: h,
            items: [new ICutOptimizer_1.Shape()]
        };
        if (!inPlace) {
            ret.items = newItems;
        }
        return ret;
    };
    return CutOptimizer;
}());
exports.CutOptimizer = CutOptimizer;

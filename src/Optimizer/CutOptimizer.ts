import { ICutOptimizer, Shape } from './ICutOptimizer';

export class CutOptimizer implements ICutOptimizer {
    private root: any;
    
    constructor(w?: number, h?: number) { 
        if(w && h){
            this.init(w, h);
        }
    }

    private init (w?: number, h?: number) {
            this.root = { x: 0, y: 0, w: w, h: h };
    }

    private fit(blocks: Shape[]): void {
        // tslint:disable-next-line:prefer-const
        let n, node, block: any, len = blocks.length, fit;
        const width = len > 0 ? blocks[0].width : 0;
        const height = len > 0 ? blocks[0].height : 0;
        this.root = { x: 0, y: 0, width: width, height: height };
        for (n = 0; n < len; n++) {
            block = blocks[n];
            if (node = this.findNode(this.root, block.width, block.height)) {
                fit = this.splitNode(node, block.width, block.height);
                block.x = fit.x;
                block.y = fit.y;
            } else {
                fit = this.growNode(block.width, block.height);
                block.x = fit.x;
                block.y = fit.y;
            }
        }
    }

    private findNode(root: any, width: number, height: number): any {
        if (root.used) {
            return this.findNode(root.right, width, height) || this.findNode(root.down, width, height);
        } else if ((width <= root.width) && (height <= root.height)) {
            return root;
        } else {
            return null;
        }
    }

    private splitNode(node: any, width: number, height: number) {
        node.used = true;
        node.down = { x: node.x, y: node.y + height, width: node.width, height: node.height - height };
        node.right = { x: node.x + width, y: node.y, width: node.width - width, height: height };
        return node;
    }

    private growNode(width: number, height: number) {
        const canGrowDown = (width <= this.root.width);
        const canGrowRight = (height <= this.root.height);

        // tslint:disable-next-line:max-line-length
        const shouldGrowRight = canGrowRight && (this.root.height >= (this.root.width + width)); // attempt to keep square-ish by growing right when height is much greater than width
        // tslint:disable-next-line:max-line-length
        const shouldGrowDown = canGrowDown && (this.root.width >= (this.root.height + height)); // attempt to keep square-ish by growing down  when width  is much greater than height

        if (shouldGrowRight) {
            return this.growRight(width, height);
        } else if (shouldGrowDown) {
            return this.growDown(width, height);
        } else if (canGrowRight) {
            return this.growRight(width, height);
        } else if (canGrowDown) {
            return this.growDown(width, height);
        } else {
            return null;
        } // need to ensure sensible root starting size to avoid this happening
    }

    private growRight(width: number, height: number) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            width: this.root.width + width,
            height: this.root.height,
            down: this.root,
            right: { x: this.root.width, y: 0, width: width, height: this.root.height }
        };
        let node;
        if (node = this.findNode(this.root, width, height)) {
            return this.splitNode(node, width, height);
        } else {
            return null;
        }
    }

    private growDown(width: number, height: number) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            width: this.root.width,
            height: this.root.height + height,
            down: { x: 0, y: this.root.height, width: this.root.width, height: height },
            right: this.root
        };
        let node;
        if (node = this.findNode(this.root, width, height)) {
            return this.splitNode(node, width, height);
        } else {
            return null;
        }
    }

    optimize(items: Shape[], options?: any) {
        options = options || {};
        const packer = new CutOptimizer();
        const inPlace = options.inPlace || false;

        // Clone the items.
        let newItems = items.map((item)=> { return inPlace ? item : { width: item.width, height: item.height, item: item }; });

        newItems = newItems.sort((a?: Shape | any, b?:Shape | any) =>{
            // TODO: check that each actually HAS a width and a height.
            // Sort based on the size (area) of each block.
            return (b.width * b.height) - (a.width * a.height);
        });

        packer.fit(newItems);

        const w = newItems.reduce( (curr, item:  Shape | any) =>{ return Math.max(curr, item.x + item.width); }, 0);
        const h = newItems.reduce( (curr, item:  Shape | any) =>{ return Math.max(curr, item.y + item.height); }, 0);

        const ret = {
            width: w,
            height: h,
            items: [new Shape()]
        };

        if (!inPlace) {
            ret.items = newItems;
        }

        return ret;
    }
}

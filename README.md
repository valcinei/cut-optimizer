# Cut Optimize

*Read this in other languages: [English](README.md), [Português-BR](README.pt-br.md).*

Bin pack Lib to cut optimize.

This lib has basead in [code](https://github.com/jakesgordon/bin-packing) and [post](https://codeincomplete.com/posts/bin-packing/) in blog by Jake Gordon.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/cut-optimizer) to install.

```bash
npm i cut-optimizer --save
```
## Javascript Usage

```javascript

var cut_optimizer = require("cut-optimizer");
var cut_opt = new cut_optimizer.CutOptimizer();
var shapes = [
    new cut_optimizer.Shape(10, 22), // OR { height: 10, width: 22 }
    new cut_optimizer.Shape(12, 220),// OR { height: 12, width: 22 }
    new cut_optimizer.Shape(13, 230),// OR { height: 13, width: 22 }
    new cut_optimizer.Shape(13, 20),// OR { height: 13 width: 20 }
    new cut_optimizer.Shape(120, 241)// OR { height: 120, width: 241}
];
console.log(cut_opt.optimize(shapes));


//Output
/*{ width: 241,
  height: 158,
  items: 
   [ { width: 241, height: 120, item: [Object], x: 0, y: 0 },
     { width: 230, height: 13, item: [Object], x: 0, y: 120 },
     { width: 220, height: 12, item: [Object], x: 0, y: 133 },
     { width: 20, height: 13, item: [Object], x: 0, y: 145 },
     { width: 22, height: 10, item: [Object], x: 20, y: 145 } ] }
/*
```

## Typescript Usage

```typescript
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

//Output
/*{ width: 241,
  height: 158,
  items: 
   [ { width: 241, height: 120, item: [Object], x: 0, y: 0 },
     { width: 230, height: 13, item: [Object], x: 0, y: 120 },
     { width: 220, height: 12, item: [Object], x: 0, y: 133 },
     { width: 20, height: 13, item: [Object], x: 0, y: 145 },
     { width: 22, height: 10, item: [Object], x: 20, y: 145 } ] }
/*
```
## [Typescript Demo](https://stackblitz.com/edit/cut-optimize-canvas-demo-ts?embed=1&file=index.ts)
## [Angular 6 Demo](https://stackblitz.com/edit/cut-optimize-canvas-demo-ng?embed=1&file=src/app/app.component.ts)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

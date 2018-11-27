# Cut Optimize

*Leia em outra linguagens : [English](README.md), [Português-BR](README.pt-br.md).*

Bin pack Biblioteca para calculos de cortes.

Essa biblioteca foi baseada no [código](https://github.com/jakesgordon/bin-packing) e na [postagem](https://codeincomplete.com/posts/bin-packing/) no blog realizado por Jake Gordon.

## Instalação

Você pode usar o [npm](https://www.npmjs.com/package/cut-optimizer) para realizar a instalação.

```bash
npm i cut-optimizer --save
```

## Usando com Javascript 

```javascript

var cut_optimizer = require("cut-optimizer");
var cut_opt = new cut_optimizer.CutOptimizer();
var shapes = [
    new cut_optimizer.Shape(10, 22), // OU { height: 10, width: 22 }
    new cut_optimizer.Shape(12, 220),// OU { height: 12, width: 22 }
    new cut_optimizer.Shape(13, 230),// OU { height: 13, width: 22 }
    new cut_optimizer.Shape(13, 20),// OU { height: 13 width: 20 }
    new cut_optimizer.Shape(120, 241)// OU height: 120, width: 241}
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
## Usando com Typescript

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
Pull requests são bem vindas.Para grandes mudanças, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.


## Licença
[MIT](https://choosealicense.com/licenses/mit/)
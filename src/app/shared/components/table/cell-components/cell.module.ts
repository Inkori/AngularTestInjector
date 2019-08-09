import { NgModule, APP_INITIALIZER } from '@angular/core';
import { PillStatusCellComponent } from './pill-status-cell/pill-status-cell.component';
import { CommonModule } from '@angular/common';
import { TagCellComponent } from './tag-cell/tag-cell.component';

// export     function CustomNgModule(anotation) {
//   return (target) => {
//     // const anotations = '__anotations__';
//     // const decl = target[anotations][0].declarations;
//     console.log(anotation);
//     const generateProviders = anotation.declarations.map(component => provideTableCell(component.format, component));
//     const anatations = Object.assign(anotation, {providers: generateProviders});
//     const ngModule = new NgModule(anatations);
//     NgModule(ngModule)(target);
//   };
// }


// @CustomNgModule({
//   declarations: [
//     PillStatusCellComponent,
//     TagCellComponent,
//   ],
//   imports: [CommonModule]
// })
//   @NgModule({
//   declarations: [
//     PillStatusCellComponent,
//     TagCellComponent,
//   ],
//     imports: [CommonModule],
// })
// export class CellModule {


// }
console.log('1');

// declarations.map(component => {
//   return {
//     declarations: [component],
//     providers: [provideTableCell(component.format, component)]

//   };
// }

// export function generateModule() {
//     @NgModule({
//       declarations: [
//         PillStatusCellComponent,
//         TagCellComponent,
//       ],
//       imports: [CommonModule]
//     })
//     class CustomModule { }
//     // declarations =
//   //   const providers = {
//   //     declarations: [declarations.map(component => component)],
//   //     providers: [declarations.map(component => provideTableCell(component.format, component))],
//   //     imports: [CommonModule]

//   // };
//     return (CustomModule as any).__annotations__[0].declarations;

// }

// export const test = {
//   declarations: generateModule().map(component => component),
//   providers: [generateModule().map(component => provideTableCell(component.format, component))],
//   imports: [CommonModule]
// };
// export function generateModule() {
//   return {
//         @NgModule({
//       declarations: [
//         PillStatusCellComponent,
//         TagCellComponent,
//         Test1Component,
//         Test2Component,
//       ],
//       imports: [CommonModule]
//     })
//     class CustomModule { }
//     return CustomModule;
//   };
// }
// export  function CustomNgModule() {
//   // return (target) => {
//   //   const anotations = '__annotations__';
//   //   // const decl = target[anotations][0].declarations;
//   //   const generateProviders = setTimeout(() => target[anotations] ?
//   //   target[anotations][1].declarations.map(component => provideTableCell(component.format, component)) : [], 3000 );

//   //   // const anatations = Object.assign(anotation, {providers: generateProviders});
//   //   console.log([target], generateProviders, target[anotations]);
//   //   // console.log(generateProviders);

//   //   const ngModule = new NgModule();
//   //   NgModule(ngModule)(target);
//   // };
// }



export     function CustomNgModule(anotation) {
  return (target) => {
    const ngModule = new NgModule(anotation);
    NgModule(ngModule)(target);
  };
}

@NgModule({
  declarations: [PillStatusCellComponent,
    TagCellComponent, ],
  imports: [CommonModule],
  })
export class CellModule {
}




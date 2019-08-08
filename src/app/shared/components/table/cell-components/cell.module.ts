import { NgModule } from '@angular/core';
import { PillStatusCellComponent } from './pill-status-cell/pill-status-cell.component';
import { CommonModule } from '@angular/common';
import { TagCellComponent } from './tag-cell/tag-cell.component';

export function ComponentExtender(annotation: any): ((target) => void) {
  return (target) => {
    const parentTarget = Object.getPrototypeOf(target.prototype).constructor;
    // const parentAnnotations = target.__annotations__[0]; // TODO: Doesn't work in Angular 5, returns undefined.
    // const parentAnnotation = parentAnnotations[0];

    // Object.keys(parentAnnotation).forEach(key => {
    //   if (parentAnnotation[key]) {
    //     if (!annotation[key]) {
    //       annotation[key] = parentAnnotation[key];
    //     }
    //   }
    // });
    console.log([target]);
    const metadatas = new NgModule(annotation);

    Reflect.defineMetadata('annotations', [ metadatas ], target);
  };
}

export const ANNOTATIONS = '__annotations__';
export function makeDecorator() {
  const TypeDecorator: TypeDecorator = function TypeDecorator(cls: Type<any>) {
    // Use of Object.defineProperty is important since it creates non-enumerable property which
    // prevents the property is copied during subclassing.
    const annotations = cls.hasOwnProperty(ANNOTATIONS) ?
        (cls as any)[ANNOTATIONS] :
        Object.defineProperty(cls, ANNOTATIONS, {value: []})[ANNOTATIONS]; -- as; -- -
    annotations.push(annotationInstance);
    return cls;
  } as TypeDecorator;
}


    const metadata = {
  declarations: [
    PillStatusCellComponent,
    TagCellComponent,

  ]
};



// export class ControlsModule {}

// @NgModule({
//   declarations: [
//     PillStatusCellComponent,
//     TagCellComponent,

//   ],
//   imports: [CommonModule, ],
//   exports: [],
// })
// @CustomNgModule(metadata)
    export     function CustomNgModule() {
  return (target) => {
    const anotations = '__anotations__';
    // const decl = target[anotations][0].declarations;
    console.log([target]);
    const ngModule = new NgModule();
    NgModule(ngModule)(target);
  };
}

@NgModule({
    declarations: [
      PillStatusCellComponent,
      TagCellComponent,

    ],
    imports: [CommonModule, ],
    exports: [],
})
  @CustomNgModule()
  @ComponentExtender(metadata)
export class CellModule {


}




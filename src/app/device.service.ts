import { Injectable, NgModuleFactory, Injector, NgModuleFactoryLoader, NgModuleRef, Compiler, ReflectiveInjector } from '@angular/core';
import { Device } from './devices/models';
import { of, Observable } from 'rxjs';
import 'reflect-metadata';
import { JitCompiler } from '@angular/compiler';
import { provideTableCell } from './shared/components/dynamic-components/dynamic-table-cell-component/cells-provider/table-cell-providers';


// export function loadModule() { return CellModule; }

@Injectable({ providedIn: 'root' })
export class DeviceServise {
  private moduleRef: NgModuleRef<any>;
  modulePath = 'src/app/shared/components/table/cell-components/cell.module#CellModule';

  constructor(private injector: Injector,
              private loader: NgModuleFactoryLoader, protected compiler: Compiler ) { }
  DEVICES: Device[] = [
    { deviceName: '12321', deviceModelType: 'adsas', deviceManufacturer: 'ADSDAS' },
    { deviceName: '123232131', deviceModelType: 'adDsas', deviceManufacturer: 'ADSDXXZCAS' },
    {deviceName: '1232131232121', deviceModelType: 'adasdasdasdsas', deviceManufacturer: 'ADSAAADAS'}
  ];

  getDevices(): Observable<Device[]> {
    return of(this.DEVICES);
  }

  setProviders() {
    // return Reflect.getOwnPropertyDescriptor(CellModule, '__annotations__').value[0].declarations
    // .map(component => provideTableCell(component.format, component));
  }

  getComponent(format) {
    // const test = Reflect.getOwnPropertyDescriptor(CellModule, '__annotations__').value[0].declarations
    // .filter(component => {
    //   console.log(format);
    //   if (component.format === format) {
    //     return component;
    //   }

    // });
    // return test;
  }

  async getModule() {


    // const declarations = Reflect.getOwnPropertyDescriptor(CellModule, '__annotations__').value[0].declarations;
    // const PROVIDERS = declarations.map(component => provideTableCell(component.format, component));

    try {
      const moduleFactory = await this.loader.load(this.modulePath) as NgModuleFactory<any>;
      this.moduleRef = moduleFactory.create(this.injector);
      console.log(this.moduleRef, moduleFactory);
    } catch (error) {
      console.error(error);
    }

    // const ANNOTATIONS = '__annotations__';
    // const declaration = CellModule[ANNOTATIONS][0].declarations;
    // console.log(declaration);
    // const mod = this.compiler.compileModuleAndAllComponentsSync(CellModule);
    // const factory = mod.componentFactories.map((comp) => {
    //   console.log(comp);


    // );
    // this.compiler.compileModuleAndAllComponentsAsync(CellModule).then(componentFactory => {
    //   console.log(componentFactory);
    // });
  //   this.loader
  //   .load(this.modulePath)
  //     .then((moduleFactory: NgModuleFactory<any>) => {
  //       const moduleType = '_moduleType';
  //       this.moduleRef = moduleFactory.create(this.injector);
  //       const injector = ReflectiveInjector.fromResolvedProviders([], this.moduleRef.injector);
  //       console.log(injector);
  //       console.log(this.moduleRef, this.moduleRef.componentFactoryResolver);
  //       // if (this.moduleRef.instance) {
  //       //   this.compiler.compileModuleAndAllComponentsAsync(this.moduleRef[moduleType]).then(componentFactory => {
  //       //     console.log(componentFactory);
  //       //   });
  //       // }

  //     // const test = (this.moduleRef.injector as any)._moduleType.__annotations__[0].declarations;

  //   }).catch(err => {
  //     console.error('error loading module', err);
  // });


  }
  load(): Promise<void> {
    if (this.moduleRef) {
      return Promise.resolve();
    }
  }

}



// import('./shared/components/table/cell-components/cell.module').then((moduleFactories: any) => {
//   const moduleFactory: NgModuleFactory<any> = moduleFactories.LazyModuleNgFactory;
//   const moduleRef = moduleFactory.create(injector);
//   const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(COMP_TYPE_TOKEN);
//   viewRef.createComponent(compFactory);
// }; )

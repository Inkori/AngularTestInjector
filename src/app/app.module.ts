import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, CompilerFactory, COMPILER_OPTIONS, Compiler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { DevicesModule } from './devices/devices.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { JitCompiler } from '@angular/compiler';
export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
  }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule,
    DevicesModule,
  ],
  providers: [  { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }, ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

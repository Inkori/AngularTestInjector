import { NgModule, APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { DevicesModule } from './devices/devices.module';
import { CellModule } from './shared/components/table/cell-components/cell.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

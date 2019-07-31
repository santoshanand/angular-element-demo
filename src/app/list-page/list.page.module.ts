import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import * as el from '@angular/elements';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import { ListPageComponent } from './list-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    ListPageComponent,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class ListPageModule {
  // constructor(
  //   private inj: Injector
  // ) { }
  // ngDoBootstrap() {
  //   const custom = el.createCustomElement(ListPageComponent, { injector: this.inj });
  //   customElements.define('list-page', custom);
  // }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// import { DemoPageComponent } from './demo-page/demo-page.component';
import * as el from '@angular/elements';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
// import { ListPageComponent } from './list-page/list-page.component';
import { ListPageModule } from './list-page/list.page.module';
import { DemoPageModule } from './demo-page/demo.page.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DemoPageComponent } from './demo-page/demo-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    // DemoPageComponent,
    // ListPageComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ListPageModule,
    DemoPageModule
  ],
  providers: [],
  entryComponents: [
    DemoPageComponent,
    ListPageComponent
  ]
})
export class AppModule {
  constructor(
    private inj: Injector
  ) {
    let custom = el.createCustomElement(DemoPageComponent, { injector: this.inj });
    customElements.define('demo-page', custom);

    custom = el.createCustomElement(ListPageComponent, { injector: this.inj });
    customElements.define('list-page', custom);
  }
  ngDoBootstrap() {

  }

}

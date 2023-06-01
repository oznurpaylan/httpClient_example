import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrnekpostidComponent } from './component/ornekpostid/ornekpostid.component';
import { TokeninterceptorInterceptor } from './interceptor/tokeninterceptor.interceptor';

@NgModule({
  declarations: [AppComponent, OrnekpostidComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

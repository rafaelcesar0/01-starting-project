import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  imports: [BrowserModule, ComponentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

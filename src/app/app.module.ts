import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';

@NgModule({
  declarations: [AppComponent, TestimonialComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

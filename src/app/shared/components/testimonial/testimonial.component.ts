import { Component, Input } from '@angular/core';
import { Testimonial } from '../../interface/Testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  @Input()
  public testimonial: Testimonial[] = [];
  public testimonialActualIndex: number = 0;

  prevTestimonial():void {
    if(this.testimonialActualIndex > 0) {
      this.testimonialActualIndex--;
      console.log(this.testimonialActualIndex)
    }
  }

  nextTestimonial():void {
    if(this.testimonialActualIndex < this.testimonial.length - 1) {
      this.testimonialActualIndex++;
      console.log(this.testimonialActualIndex)
    }
  }
}

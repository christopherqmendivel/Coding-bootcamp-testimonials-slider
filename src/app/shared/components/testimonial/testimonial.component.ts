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
  public animate = true;


  prevTestimonial():void {
    if(this.testimonialActualIndex > 0) {
      this.testimonialActualIndex--;
      this.triggerAnimation();
    }
  }

  nextTestimonial():void {
    if(this.testimonialActualIndex < this.testimonial.length - 1) {
      this.testimonialActualIndex++;
      this.triggerAnimation();
    }
  }

  triggerAnimation() {
    this.animate = true;
  }

  resetAnimation() {
    this.animate = false;
  }
}

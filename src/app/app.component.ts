import { Component } from '@angular/core';
import { Testimonial } from './shared/interface/Testimonial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public listTestimonials: Testimonial[] = [
    {
      imageUrl: '/assets/img/user/image-tanya.jpg',
      testimonial:
        '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
      name: 'Tany Sinclair',
      skill: 'UX Engineer',
    },
    {
      imageUrl: '/assets/img/user/image-john.jpg',
      testimonial:
        '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
      name: 'John Tarkpor',
      skill: 'Junior Front-end Developer',
    },
  ];

}

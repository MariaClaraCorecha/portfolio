import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  host: { class: 'reveal' },
})
export class RevealOnScrollDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const element = this.elementRef.nativeElement;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('revealed');
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(element);
    });
  }
}

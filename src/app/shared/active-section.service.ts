import { DestroyRef, Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  readonly activeId = signal<string | null>(null);

  observe(sectionIds: string[]): void {
    this.observer?.disconnect();

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          this.activeId.set(mostVisible.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => this.observer?.observe(el));
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}

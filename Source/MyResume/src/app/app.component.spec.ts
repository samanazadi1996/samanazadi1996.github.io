import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the resume owner without the removed top role', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('سامان آزادی');
    expect(element.querySelector('.eyebrow')).toBeNull();
  });

  it('should render all resume sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.timeline-item').length).toBe(4);
    expect(element.querySelectorAll('.project-card').length).toBe(5);
    expect(element.querySelectorAll('.course-item').length).toBe(3);
    expect(element.querySelector('.education-grid')).toBeNull();
    expect(element.querySelector('.skills-list')?.textContent).not.toContain('٪');
  });

  it('should toggle between light and dark themes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const initialTheme = app.isDarkTheme;

    app.toggleTheme();
    expect(app.isDarkTheme).toBe(!initialTheme);
    app.toggleTheme();
  });
});

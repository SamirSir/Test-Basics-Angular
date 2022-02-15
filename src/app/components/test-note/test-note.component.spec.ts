import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNoteComponent } from './test-note.component';

describe('TestNoteComponent', () => {
  let component: TestNoteComponent;
  let fixture: ComponentFixture<TestNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

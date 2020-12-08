import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTSComponent } from './posts.component';

describe('POSTSComponent', () => {
  let component: POSTSComponent;
  let fixture: ComponentFixture<POSTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

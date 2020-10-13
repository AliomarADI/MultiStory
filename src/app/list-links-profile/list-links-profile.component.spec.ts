import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinksProfileComponent } from './list-links-profile.component';

describe('ListLinksProfileComponent', () => {
  let component: ListLinksProfileComponent;
  let fixture: ComponentFixture<ListLinksProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLinksProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLinksProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

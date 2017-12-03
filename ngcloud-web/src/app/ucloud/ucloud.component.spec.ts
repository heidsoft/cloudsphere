import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcloudComponent } from './ucloud.component';

describe('UcloudComponent', () => {
  let component: UcloudComponent;
  let fixture: ComponentFixture<UcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

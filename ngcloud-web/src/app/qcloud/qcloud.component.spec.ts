import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcloudComponent } from './qcloud.component';

describe('QcloudComponent', () => {
  let component: QcloudComponent;
  let fixture: ComponentFixture<QcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

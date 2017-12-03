import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiniuComponent } from './qiniu.component';

describe('QiniuComponent', () => {
  let component: QiniuComponent;
  let fixture: ComponentFixture<QiniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnekpostidComponent } from './ornekpostid.component';

describe('OrnekpostidComponent', () => {
  let component: OrnekpostidComponent;
  let fixture: ComponentFixture<OrnekpostidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnekpostidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrnekpostidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

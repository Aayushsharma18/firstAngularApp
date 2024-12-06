import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBondingComponent } from './class-bonding.component';

describe('ClassBondingComponent', () => {
  let component: ClassBondingComponent;
  let fixture: ComponentFixture<ClassBondingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassBondingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBondingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

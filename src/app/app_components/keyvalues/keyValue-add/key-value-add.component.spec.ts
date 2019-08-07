import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueAddComponent } from './key-value-add.component';

describe('KeyValueAddComponent', () => {
  let component: KeyValueAddComponent;
  let fixture: ComponentFixture<KeyValueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

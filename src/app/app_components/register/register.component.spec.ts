import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


describe('registerComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule, RouterModule, HttpClientModule, RouterModule.forRoot([])]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valid title', () => {
    expect(component.title).toEqual('Register');
  });

  it('Inv-valid Form, when no values present or Empty form submitted', () => {
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['password'].setValue('');            
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('Valid Form, when valid values present and form submitted', () => {
    component.registerForm.controls['firstName'].setValue('Inderjit');
    component.registerForm.controls['lastName'].setValue('Sanhotra');
    component.registerForm.controls['username'].setValue('isingh');
    component.registerForm.controls['password'].setValue('Password');            
    expect(component.registerForm.valid).toBeTruthy();
  });
});

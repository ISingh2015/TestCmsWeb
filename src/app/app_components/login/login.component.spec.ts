import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';


describe('loginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, BrowserModule, RouterModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valid title', () => {
    expect(component.title).toEqual('Login');
  });

  it('Inv-valid Form, when no values present or Empty form submitted', () => {
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');            
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Valid Form, when valid values present and form submitted', () => {
    component.loginForm.controls['username'].setValue('isingh');
    component.loginForm.controls['password'].setValue('Password');            
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('check if Login form submits', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
  
  it('Call Submit method', () => {
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    const el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

});

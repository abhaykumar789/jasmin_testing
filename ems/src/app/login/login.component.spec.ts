import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name test interpolation', () => {
    var uname = component.name;
    expect(uname).toBe('abhay');
  });

  it('test to check the method', () => {
    var usname = component.getusername('hello');
    expect(usname).toBe('hello userabhay');
  });

  it("[SPEC-4]:Test Case for HTMLELEMENT H2 ", () => {
    var ref = fixture.nativeElement;
    console.log(fixture);
    var h2ref = ref.querySelector("h2");
    var h2content = h2ref.textContent;
    //  expect(h2content).toBe("Hii there!")
    expect(h2content).toContain("Hii there")

    //  **doubt what is the use of toContain here  **//

  });

  it("[SPEC-5]:Test Case for HTMLELEMENT H3 ", () => {
    var ref = fixture.nativeElement;
    var h3ref = ref.querySelector(".g1");
    var h3content = h3ref.textContent;
    expect(h3content).toBe("Good Afternoon");
  });

  it("[SPEC-6]:Test Case for Form Input To Check Empty Or Not", () => {
    var ref = fixture.nativeElement;
    var unameref = ref.querySelector('#uname');
    console.log(unameref)
    expect(unameref.value).toBe('')
  });

  it("[SPEC-7]:Test Case for Form Input Value UserName", () => {
    var ref = fixture.nativeElement;
    var unameref = ref.querySelector('#uname');
    console.log(unameref);
    unameref.value = "admin";
    expect(unameref.value).toEqual('admin')
  });

  it("[SPEC-8]:Test Case for Form Input Value Password", () => {
    var ref = fixture.nativeElement;
    var pwdref = ref.querySelector('#pwd');
    console.log(pwdref);
    pwdref.value = "admin123";
    expect(pwdref.value).toEqual('admin123')
  });

  it("[SPEC-9]:Test Case for Form Input Value For UserName & Password", () => {
    var ref = fixture.nativeElement;
    var unameref = ref.querySelector('#uname');
    var pwdref = ref.querySelector('#pwd');
    unameref.value = "admin";
    pwdref.value = "admin123";
    expect(unameref.value).toEqual('admin')
    expect(pwdref.value).toEqual('admin123')

  });

});

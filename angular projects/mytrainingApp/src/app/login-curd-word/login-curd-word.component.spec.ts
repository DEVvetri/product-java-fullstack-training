import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCurdWordComponent } from './login-curd-word.component';

describe('LoginCurdWordComponent', () => {
  let component: LoginCurdWordComponent;
  let fixture: ComponentFixture<LoginCurdWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCurdWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCurdWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

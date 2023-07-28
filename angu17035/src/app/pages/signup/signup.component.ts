import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submitted: boolean = false;
  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPasswords });

  constructor(private fb: FormBuilder, private auth: UserService,private router: Router) {

  }

  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }

  onHandleSubmit() {
    this.submitted = true;
    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['signin'])
      });
    }
  }
}

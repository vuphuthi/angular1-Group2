import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  user!: any;
  submitted: boolean = false;

  formUpdate = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
    role: ['']
  }, { validators: this.checkPasswords });

  constructor(private fb: FormBuilder, private auth: UserService,private router: Router) {

  }

  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }


  userId: string;
  onHandleSubmit() {
    this.submitted = true;
    // if (this.formupdate.valid) {
    //   this.auth.signup(this.formupdate.value).subscribe(data => {
    //     console.log(data);
    //     this.router.navigate(['signin'])
    //   });
    // }

    if (this.formUpdate.valid) {
      const formData = this.formUpdate.value;
      // formData.id = this.userId; // Thêm ID của người dùng vào formData
      this.auth.updateUser(formData).subscribe((data) => {
        console.log(data);
        this.router.navigate(['signin']);
      });
  }
}
}

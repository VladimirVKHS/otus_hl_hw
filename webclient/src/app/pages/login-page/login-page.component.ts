import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Login: ['', [Validators.required, Validators.maxLength(255)]],
      Password: ['', [Validators.required, Validators.maxLength(255)]],
      Remember: [true],
    });
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.auth.login({
      Login: this.form.value.Login,
      Password: this.form.value.Password,
    }, this.form.value.Remember).subscribe(() => {
      this.router.navigateByUrl('/');
    }, () => {
      alert('Error!');
    });
  }

}

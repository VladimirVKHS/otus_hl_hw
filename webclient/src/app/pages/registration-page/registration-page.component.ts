import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

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
      FirstName: ['', [Validators.required, Validators.maxLength(255)]],
      LastName: ['', [Validators.required, Validators.maxLength(255)]],
      City: ['', [Validators.required, Validators.maxLength(255)]],
      Interests: ['', [Validators.required, Validators.maxLength(4096)]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(150)]],
      Sex: [null, [Validators.required]],
      IsPublic: [true],
    });
  }

  registration(): void {
    if (this.form.invalid) {
      return;
    }
    this.auth.registration(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (err) => {
      const error = err.error?.error;
      alert(error ? error : 'Error!');
    });
  }

}

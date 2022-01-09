import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss']
})
export class ProfileEditPageComponent implements OnInit {

  public data: IUserFullData;

  public form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.user_data;
    this.initForm();
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }
    this.auth.saveProfile(this.form.value).subscribe((r) => {
      this.data.user = r;
      this.initForm();
    }, (err) => {
      const error = err.error?.error;
      alert(error ? error : 'Error!');
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      Login: [this.data.user.Login, [Validators.required, Validators.maxLength(255)]],
      Password: ['', [Validators.maxLength(255)]],
      FirstName: [this.data.user.FirstName, [Validators.required, Validators.maxLength(255)]],
      LastName: [this.data.user.LastName, [Validators.required, Validators.maxLength(255)]],
      City: [this.data.user.City, [Validators.required, Validators.maxLength(255)]],
      Interests: [this.data.user.Interests, [Validators.required, Validators.maxLength(4096)]],
      Age: [this.data.user.Age, [Validators.required, Validators.min(18), Validators.max(150)]],
      IsPublic: [this.data.user.IsPublic],
    });
  }

}

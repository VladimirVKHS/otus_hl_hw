import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsApiService} from '../../core/services/posts-api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: PostsApiService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Title: ['', [Validators.required, Validators.maxLength(255)]],
      Body: ['', [Validators.required, Validators.maxLength(4096)]],
    });
  }

  save(): void {
    const user = this.auth.payload.user;
    this.api.createPost(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/users/' + user.Id);
    });
  }

}

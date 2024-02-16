import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  userService = inject(UserService);

  loginFormGroup!: FormGroup;
  isValid = false;

  copy = new FormControl('');

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]}),
    });

    this.loginFormGroup.valueChanges.pipe(
      debounceTime(200),
      tap(value => {
        console.log({value});
      })
    ).subscribe();
  }

  get emailControl() { return this.loginFormGroup.get('email'); }
  get passwordControl() { return this.loginFormGroup.get('password'); }

  submit(e: any) {
    if(this.loginFormGroup.valid) {
      this.userService.setUser(this.emailControl?.value);
      this.router.navigateByUrl('/main');
    }
  }

}

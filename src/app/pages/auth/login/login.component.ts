import { AuthenticationService } from './../../../@core/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from './../../../@core/models/authentication/authentication.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageEnum } from './../../../@core/enum/local-storage.enum';
import swal from 'sweetalert2';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createFormControl();
  }

  /* Fungsi untuk membuat nama field pada form */
  createFormControl() {
    this.signinFormGroup = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  onSubmit() {
    const login: Login = this.signinFormGroup.value;
    this.authenticationService.doLogin(login).subscribe(
    result => {
      // Handle result
      if (result.status === 1) {
        localStorage.setItem(LocalStorageEnum.TOKEN_KEY, result.token);
        localStorage.setItem(LocalStorageEnum.NAME, result.name);
        sessionStorage.setItem(LocalStorageEnum.TOKEN_KEY, result.token);
        this.router.navigate(['/dashboard']);
      } else {
        swal(
          'Alert',
          result.message,
          'error',
        );
      }
    },
    error => {
        swal('belisada.co.id', 'unknown error', 'error');
      }
    );
  }

}

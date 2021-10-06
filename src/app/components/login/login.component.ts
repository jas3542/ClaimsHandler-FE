import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_Form: FormGroup;
  formSubmitted : boolean = false;

  defaultReturnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.login_Form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.login_Form.invalid) {

      return;
    }

    this.formSubmitted = true;

    var l = new Login()
    l.UserName="gemmela";
    l.Password="Archie";

    this.loginService.Login(l).subscribe(
      data => {this.router.navigateByUrl('/loseType')}

    );
    
  }

}

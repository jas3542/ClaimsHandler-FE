import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import { Login } from '../models/Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClaimsHandler-FE';

  constructor(private loginService: LoginService){
    
  }
}

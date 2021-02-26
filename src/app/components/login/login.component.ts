import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {login:"",passwd:""};
  recordar = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')){
      this.user.login = localStorage.getItem('login');
      this.recordar = true;
    }
  }

  login($event){

    this.authService.authUser(this.user,this.recordar).subscribe(
      u => {
        console.log(u);
        this.user = u;
      } ,
      error => console.log(error)
    );
  }

}

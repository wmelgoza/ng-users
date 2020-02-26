import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  error: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  // 3. Add a login method
  login(): void{
    this.userService.login(this.user).subscribe(
      (response: any) => {
        console.log(response);

        if(response.success == false){
          this.error=true;
      }
      else
      this.router.navigate(['/articles']);
    }
    );
  }

}

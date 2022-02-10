import { Component, OnInit } from '@angular/core';
import { User } from '../model/User'
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: User = new User();
  
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }


  goToTaskList(){
    this.router.navigate(['/todos']);
  }
  
  onSubmit(){
    this.userService.loginUser(this.user);
    this.goToTaskList();
  }
}

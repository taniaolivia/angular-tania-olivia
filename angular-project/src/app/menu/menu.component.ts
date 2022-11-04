import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show = false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    if(this.authenticationService.isLoggedIn()){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }

  logout(): void {
    this.authenticationService.logout();
  }
}

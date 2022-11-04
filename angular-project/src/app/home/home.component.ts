import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data : any = [];

  constructor(private http: HttpClient) { }

  async ngOnInit()
  {
    this.http.get(environment.ApiUrl.users + "/1").subscribe((result) => {
      this.data.push(result);
    });
  }
}


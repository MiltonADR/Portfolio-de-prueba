import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  dataApi = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getData()
      .subscribe((response) => console.log(response.results));
    /* */
    this.apiService
      .getData()
      .subscribe((response) => (this.dataApi = response.results));
  }
}

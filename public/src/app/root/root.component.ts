import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  allPets =[];

  constructor(private _httpService: HttpService) {
    this.getPets();
  }

  ngOnInit() {
  }

  getPets(){
    let observable = this._httpService.getAllPets();
    observable.subscribe(data=>{
      this.allPets = data['info']
      console.log('Got our data!', data)
    })
  }

}

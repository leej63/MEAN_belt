import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skills_one: null,
      skills_two: null,
      skills_three: null,
    }
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id'])
    });
  }

  createAPet(){
    let observable = this._httpService.createPet(this.newPet);
    observable.subscribe(data=>{
      this.newPet = {name: "", type: "", description: "", skills: null};
      this._router.navigate(['/pets']);
    })
  }

}

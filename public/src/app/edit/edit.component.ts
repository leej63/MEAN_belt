import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petToEdit: any;
  petID: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.petToEdit = {
      name: "",
      type: "",
      description: "",
      skills: null
    }
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id']);
      this.petID = params['id'];
      this.showOnePet(this.petID);
    })
  }

  editAPet(petToEdit){
    let observable = this._httpService.editPet(petToEdit);
    observable.subscribe(data=>{
      this._router.navigate([`/pets/${this.petID}`]);
    })
  }

  showOnePet(id){
    let observable = this._httpService.getOnePet(this.petID);
    observable.subscribe(data=>{
      this.petToEdit = data['info'];
    })
  }
}

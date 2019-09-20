import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  petID: any;
  petDetails: any;
  totalLikes: number;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.petDetails = {
      name: "",
      type: "",
      description: "",
      skills: null,
      likes: 0,
    }
    this.totalLikes = 0;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id']);
      this.petID = params['id'];
      this.showOnePet(this.petID);
    })
    this.totalLikes;
  }

  showOnePet(id){
    let observable = this._httpService.getOnePet(this.petID);
    observable.subscribe(data=>{
      this.petDetails = data['info'];
    })
  }

  // DELETE
  adoptPet(id){
    let observable = this._httpService.deletePet(this.petID);
    observable.subscribe(data=>{
      this._router.navigate(['/pets']);
    })
  }

  likePet(petDetails){
    this.petDetails.likes++;
    console.log(this.petDetails);
    let observable = this._httpService.editPet(petDetails);
    observable.subscribe(data=>{

    })
  }

}

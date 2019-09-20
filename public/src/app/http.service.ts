import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getAllPets(){
    return this._http.get('/api/pets');
  }

  createPet(newPet){
    return this._http.post('/api/pets', newPet);
  }

  getOnePet(id){
    return this._http.get('/api/pets/' + id);
  }

  editPet(updatePet){
    return this._http.put('/api/pets/' + updatePet._id, updatePet);
  }

  deletePet(id){
    return this._http.delete('/api/pets/' + id)
  }

  constructor(private _http: HttpClient) { 

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  rootUrl = "http://localhost:3000";
  url = "http://localhost:3000/restaurant";

  constructor(
            private _http: HttpClient
  ) { }

  getList() {
    return this._http.get(this.url);
  }

  getById(id:any) {
    return this._http.get(this.url+"/"+id);
  }

  addResto(data:any) {
    return this._http.post(this.url, data);
  }

  deleteResto(id:any) {
    return this._http.delete(this.url+"/"+id);
  }

  editResto(data:any, id:any) {
    return this._http.put(this.url+"/"+id,data);
  }

  register(data:any) {
    return this._http.post(this.rootUrl+"/users", data);
  }
}

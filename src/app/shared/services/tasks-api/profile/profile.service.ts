import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService, Param } from 'src/app/shared/utilities/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  sineUpforTaskAPI(name:string, email:string, password:string) {
    let params: Param[] = [
      {key:name, value:name},
      {key:email, value:email},
      {key:password, value:password}
    ]
    let url = this.utilService.generateURL('/users', params, 'task')
    return url
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config:any;
  public configSubject$:Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }

  public loadConfig():any {
    //C:\Users\Manoranjan\Desktop\Bharath\Git\create\angular-resuable-components\src\configmaps\env.json
 
    /* let path = 'angular-resuable-components/src/configmaps/env.json'
    console.log(path)
    return this.http.get(path).toPromise().then((config:any)=>{
      this.config = config;
      console.log(this.config)
      this.configSubject$.next(this.config);
    }).catch((err:any) => {
      return err;
    }) */
    return environment

  }

  public getConfig(){
    return environment;
  }
}

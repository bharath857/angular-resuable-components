import { Injectable } from '@angular/core';

export interface MatSnackBarType {
  error?:string;
  info?:string;
  success?:string;
}
@Injectable({
  providedIn: 'root'
})
export class SnakbarService {
/* 
  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontal = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackBarAutoHide = '1500';

  constructor(private snackBar: MatSnackBar) { }

  showSnakBar(message: string, type:MatSnackBarType) {
    this.snackBarConfig = new MatSnackBarConfig();

    if(type === 'success'){
      this.snackBarConfig.panelClass = 'snackbar-success';
    }else if(type === 'error'){
      this.snackBarConfig.panelClass = 'snackbar-error';
    }else{
      this.snackBarConfig.panelClass = 'snackbar-info'; 
    }
    
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = ['red-snackbar'];
    return this.snackBar.open(message, 'x', this.snackBarConfig);
  } */

}

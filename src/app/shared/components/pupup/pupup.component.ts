import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pupup',
  templateUrl: './pupup.component.html',
  styleUrls: ['./pupup.component.css']
})
export class PupupComponent implements OnInit {

  @Input() required: ResuablePopUpcomponent | undefined;
  @Output() close = new EventEmitter<any>();

  showHeader: boolean = true;
  showFooter: boolean = true;
  headerOne: string = '';
  footerHeading: string = '';
  showAsPopUp: boolean = false;
  size: string = 'medium';
  statusType: string = '';
  confirmation: boolean = false;
  message:string = '';
  color:string = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.required)
    if (this.required?.showHeader || this.required?.showFooter) {
      
      this.headerOne = this.required.headerOne;
      this.required?.showHeader ? this.showHeader = this.required.showHeader : this.showHeader = false;
      this.required?.showFooter ? this.showFooter = this.required.showFooter : this.showFooter = false;
      this.required?.footerHeading ? this.footerHeading = this.required.footerHeading : this.footerHeading = '';
      this.required?.showAsPopUp ? this.showAsPopUp = this.required.showAsPopUp : this.showAsPopUp = false;
      this.required?.size ? this.size = this.required.size : this.size = '';
      this.required?.statusType ? this.statusType = this.required.statusType : this.statusType = '';
      this.required?.message ? this.message = this.required.message : this.message = '';
      this.required?.message ? this.message = this.required.message : this.message = '';
      this.required?.confirmation ? this.confirmation = this.required.confirmation : this.confirmation = false;
      this.required?.color ? this.color = this.required.color : this.color = '';
    }
  }

  onClose(value?: any): void {
    this.close.emit(value);
  }

}
export interface ResuablePopUpcomponent {
  showHeader?: boolean;
  showFooter?: boolean;
  headerOne: string;
  footerHeading?: string;
  showAsPopUp?: boolean;
  size?: ResuablePopUpcomponentSize;
  statusType?: ResuablePopUpcomponentstatusType;
  message?:string;
  color?:string;
  editable?:boolean;
  confirmation?: boolean
}

export enum ResuablePopUpcomponentSize {
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export enum ResuablePopUpcomponentstatusType {
  nostatus = 'nostatus',
  success = 'success',
  error = 'error'
}
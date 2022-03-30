import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ResuablePopUpcomponent, ResuablePopUpcomponentSize, ResuablePopUpcomponentstatusType } from 'src/app/shared/components/pupup/pupup.component';

@Component({
  selector: 'app-reausable-components',
  templateUrl: './reausable-components.component.html',
  styleUrls: ['./reausable-components.component.css']
})
export class ReausableComponentsComponent implements OnInit {
  popUpIncludes: FormGroup;
  popUpdetails: ResuablePopUpcomponent | undefined;
  showPopUp: boolean = false;
  size: ResuablePopUpcomponentSize = ResuablePopUpcomponentSize.medium;
  type: ResuablePopUpcomponentstatusType = ResuablePopUpcomponentstatusType.nostatus;
  constructor(private formBuilder: FormBuilder) {
    this.popUpIncludes = this.formBuilder.group({
      showHeader: [true],
      showFooter: [false],
      footerHeading: [false],
      showAsPopUp: [true],
      comfirmation: [false],
    })
  }

  ngOnInit(): void {
  }

  initiatecomponent() {
    this.showPopUp = false;
    setTimeout(() => {
      this.popUpdetails = {
        headerOne: 'Heading of PopUp ',
        showHeader: this.popUpIncludes.get('showHeader')?.value,
        showFooter: this.popUpIncludes.get('showFooter')?.value,
        footerHeading: this.popUpIncludes.get('footerHeading')?.value ? 'footer heading' : '',
        showAsPopUp: this.popUpIncludes.get('showAsPopUp')?.value,
        confirmation: this.popUpIncludes.get('comfirmation')?.value,
        size: this.size,
        statusType:this.type
      }
      this.showPopUp = true;
      console.log(this.popUpdetails)
    }, 500);
  }
  popUpClosed(event: any) {
    this.showPopUp = false;
    console.log(event)
  }
}
/* showHeader?: boolean;
  showFooter?: boolean;
  headerOne: string;
  footerHeading?: string;
  showAsPopUp?: boolean;
  size?: ResuablePopUpcomponentSize;
  statusType?: ResuablePopUpcomponentstatusType;
  errorMessage?: string;
  confirmation?:boolean */
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
      body:this.formBuilder.group({
        showHeader: [true],
        headerValue:['Heading'],
        footerValue:['footer'],
        showFooter: [false],
        footerHeading: [''],
        showAsPopUp: [true],
        comfirmation: [false],
      }),
      content:this.formBuilder.group({
        contentType:['message'],
        message:['Message to display in content'],
        color:['black'],
        editable:[false]
      })
    })
  }

  ngOnInit(): void {
  }

  initiatecomponent() {
    console.log(this.popUpIncludes)
    this.showPopUp = false;
    setTimeout(() => {
      this.popUpdetails = {
        headerOne: this.popUpIncludes.get('body')?.get('headerValue')?.value,
        showHeader: this.popUpIncludes.get('body')?.get('showHeader')?.value,
        showFooter: this.popUpIncludes.get('body')?.get('showFooter')?.value,
        footerHeading: this.popUpIncludes.get('body')?.get('footerHeading')?.value ? this.popUpIncludes.get('body')?.get('footerValue')?.value : '',
        showAsPopUp: this.popUpIncludes.get('body')?.get('showAsPopUp')?.value,
        confirmation: this.popUpIncludes.get('body')?.get('comfirmation')?.value,
        size: this.size,
        statusType:this.type,
        message:this.popUpIncludes.get('content')?.get('message')?.value,
        color:this.popUpIncludes.get('content')?.get('color')?.value,
        editable:this.popUpIncludes.get('content')?.get('editable')?.value,
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
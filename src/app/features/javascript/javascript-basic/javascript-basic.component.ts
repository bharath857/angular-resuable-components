import { Component, OnInit } from '@angular/core';
import links from '../../../core/constants/links'

@Component({
  selector: 'app-javascript-basic',
  templateUrl: './javascript-basic.component.html',
  styleUrls: ['./javascript-basic.component.css']
})
export class JavascriptBasicComponent implements OnInit {

  listOfConcepts:string[] = ['String','Array','String'];
  concept:string = '';
  
  listOfStringMentods:string[] = ['charAt()','charCodeAt()','concat(string1, string2, ...)','includes()', 
  'endsWith()', 'indexOf()', 'lastIndexOf()','match()','matchAll()', 'repeat()', 'replace()', 'replaceAll()', 
  'search()','spice()','split()','startsWith()', 'substr()', 'substring()', 'toLowerCase()', 'toUpperCase()', 'toString()','trim()', 'valueOf()'];

  selectedString:string = 'charAt()';
  showAllStringMenthods:boolean = false;

  javaScript_basic:string;

  constructor() {
    this.javaScript_basic = links.weblinks.javascript_basic;
   }

  ngOnInit(): void {
    
  }

}

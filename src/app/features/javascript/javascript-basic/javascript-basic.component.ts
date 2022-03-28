import { Component, OnInit } from '@angular/core';
import links from '../../../core/constants/links'

@Component({
  selector: 'app-javascript-basic',
  templateUrl: './javascript-basic.component.html',
  styleUrls: ['./javascript-basic.component.css']
})
export class JavascriptBasicComponent implements OnInit {

  listOfConcepts: string[] = ['String', 'Array', 'Console'];
  concept: string = '';

  //String
  listOfStringMentods: string[] = ['charAt()', 'charCodeAt()', 'concat(string1, string2, ...)', 'includes()',
    'endsWith()', 'indexOf()', 'lastIndexOf()', 'match()', 'matchAll()', 'repeat()', 'replace()', 'replaceAll()',
    'search()', 'spice()', 'split()', 'startsWith()', 'substr()', 'substring()', 'toLowerCase()', 'toUpperCase()', 'toString()', 'trim()', 'valueOf()'];
  selectedString: string = 'charAt()';
  showAllStringMenthods: boolean = false;
  javaScript_basic: string;

  //array
  listOfArrayMentods: string[] = ['concat()','copyWithIn()','entries()','every()','fill()','filter()','find()','findIndex()',
  'forEach()','Array.from()','includes()','indexOf()','isArray()','join()','lastIndexOf()','map()',
  'push()','pop()','shift()','unshift()','reduce()','reverse()','slice()','some()','sort()','splice()','toString()','values()'];
  selectedArray: string = 'charAt()';
  showAllArrayMenthods: boolean = false;

  //Console
  listofConsoleMethods: string[] = ['console.log()', 'console.assert()', 'console.clear()', 'console.count()', 'console.dir()', 'console.error()', 'console.table()', 'console.time()'];
  selectedConsole: string = 'console.log()';
  showAllConsoleMenthods: boolean = false;
  constructor() {
    this.javaScript_basic = links.weblinks.javascript_basic;
  }

  ngOnInit(): void {

  }

}

import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-world',
  templateUrl: './create-world.component.html',
  styleUrls: ['./create-world.component.css']
})
export class CreateWorldComponent implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  'name': String;
  'story' : String;

  constructor() { }

  checkButton() {
    console.log('~Buton WORK~');
  }


  ngOnChanges() { console.log('AppComponent:OnChanges'); }
  ngOnInit() { console.log('AppComponent:OnInit'); }
  ngDoCheck() { console.log('AppComponent:DoCheck'); }
  ngAfterContentInit() { console.log('AppComponent:AfterContentInit'); }
  ngAfterContentChecked() { console.log('AppComponent:AfterContentChecked'); }
  ngAfterViewInit() { console.log('AppComponent:AfterViewInit'); }
  ngAfterViewChecked() { console.log('AppComponent:AfterViewChecked'); }
  ngOnDestroy() { console.log('AppComponent:OnDestroy'); }


}

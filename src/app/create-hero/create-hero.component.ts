import { Component, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  'name': String;
  'story': String;


  constructor() { }

  checkButton() {
    console.log('~Buton WORK~');
  }

  public hasUnsavedData():boolean{
    if(this.name == ''){
      if (this.story == ''){
        return false;
      }
      return false; // не заполнен, нет преграды
    }
    return true;
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

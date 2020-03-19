import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {

  @Input() valorInicial = 10;

  constructor() {
    this.log('contructor');
   }

  ngOnChanges() {
    this.log('ngOnChanges');

  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  log(hook: string) {
    console.log(hook);
  }

}

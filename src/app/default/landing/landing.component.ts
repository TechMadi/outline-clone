import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  isMenuCollapsed = true;
  active = 1;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {}
}

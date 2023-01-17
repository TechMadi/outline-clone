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
  showMenu: boolean = false;
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild('popOverDropdownRef', { static: false })
  popOverDropdownRef!: ElementRef;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popOverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }

  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}

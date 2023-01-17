import { NgbCarouselCtx } from './../../../node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-transition.d';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { LandingComponent } from './landing/landing.component';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    DefaultRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbNavModule,
  ],
})
export class DefaultModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from './accordion';
import { MenuItems } from './menu-items';



@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  providers: [MenuItems]
})
export class SharedModule { }

import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbAccordionModule
import {YourComponent} from './test/test.component'

@NgModule({
  declarations: [YourComponent],
  imports: [
    NgbAccordionModule,
    CommonModule, 
  ],
  exports:[YourComponent],
  bootstrap:[YourComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

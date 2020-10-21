import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRouteModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactRouteModule, SharedModule],
})
export class ContactModule {}

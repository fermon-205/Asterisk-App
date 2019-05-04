import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CallNowComponent } from './call-now/call-now.component';
import { CoreModule } from '../core/core.module';
import { VideoCallComponent } from './video-call/video-call.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ModulesComponent, WelcomeComponent, CallNowComponent, VideoCallComponent, DetailComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    CoreModule
  ]
})
export class ModulesModule { }
  
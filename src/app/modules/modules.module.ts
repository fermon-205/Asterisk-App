import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CallNowComponent } from './call-now/call-now.component';
import { CoreModule } from '../core/core.module';
import { VideoCallComponent } from './video-call/video-call.component';
import { DetailComponent } from './detail/detail.component';
import { NumberDirective } from '../core/directives/numbers-only.directive';

@NgModule({
  declarations: [ModulesComponent, WelcomeComponent, CallNowComponent, VideoCallComponent, DetailComponent,NumberDirective],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class ModulesModule { }
  
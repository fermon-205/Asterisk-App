import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CallNowComponent } from './call-now/call-now.component';
import { ModulesComponent } from './modules.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '', component: ModulesComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'call', component: CallNowComponent },
      { path: 'videocall', component: VideoCallComponent },
      { path: 'detail', component: DetailComponent },
      { path: '', redirectTo: 'welcome' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

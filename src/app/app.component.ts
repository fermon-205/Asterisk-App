import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InviteClientContext, InviteServerContext, Session} from 'sip.js/types/session';
import * as SIP from 'sip.js/dist/sip-0.13.7.min';
import {C, ClientContext, ServerContext, SessionDescriptionHandler} from 'sip.js';
import {UA} from 'sip.js/types/ua';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('f') asteriskData: NgForm;
  @ViewChild ('audioOption') audioRef: ElementRef;
  title = 'Caption';
  session: Session;
  sipSession: any;
  _WebSocketConnection: WebSocket;
  textInput = '';
  sessionDescriptionHandler: SessionDescriptionHandler;
  userAgent: SIP;
  datalooader: String;
  InviteServerContext: InviteServerContext;
  remoteVideo: HTMLMediaElement;
  localVideo: HTMLMediaElement;
  localAudio: HTMLMediaElement;
  remoteAudio: HTMLMediaElement;
  crd: any;
  authorizationUser: number;
  password: number;
  displayName: string;
  uri: string;
  asterikLoginData = {
    authorizationUser: '',
    displayName: '',
    password: '',
    uri: '',
    callto: ''
  };

   options = {
     sessionDescriptionHandlerOptions: {
       constraints: {
         audio: true,
         video: true
       }
     }
   };
   option = {
    audio: true,
    video: true
  };

  onSubmit(form: NgForm) {
      console.log(form);
      this.asteriskData.form.patchValue({
        asteriskinfo: {
        }
      });
     this.asterikLoginData.authorizationUser =  form.form.value.authorizationUser;
       this.asterikLoginData.displayName = form.form.value.displayName;
         this.asterikLoginData.password = form.form.value.passWord;
           this.asterikLoginData.uri = form.form.value.uri;
           this.asterikLoginData.callto = form.form.value.callto;
    }
  creatAsteriskEndpoint() {

    this._WebSocketConnection = new WebSocket('ws://localhost:8080/web_war_exploded/websocket');
    console.log(this.asterikLoginData.password + this.asterikLoginData.uri + this.asterikLoginData.displayName + this.asterikLoginData.authorizationUser + '***************');
    this.userAgent = new SIP.UA({
        uri: this.asterikLoginData.uri,
        authorizationUser: this.asterikLoginData.authorizationUser,
        password: this.asterikLoginData.password,
        displayName: this.asterikLoginData.displayName,
        transportOptions: {
          wsServers: 'ws://10.214.10.47:8088/asterisk/ws',
        },
      hackIpInContact: true,
      }
    );
    this.userAgent.on('invite', (session) => {
      this.sipSession = session;

      this.audioRef.nativeElement.play();
    });
  }


  inputData(event: Event) {
    this.textInput = (<HTMLTextAreaElement>event.target).value;
    this._WebSocketConnection.send(this.textInput);
  }

  contactphoneUser(): void {
     this.session = this.userAgent.invite( this.asterikLoginData.callto + '@10.214.10.47', this.options);
    this.session.on('trackAdded', function () {
      const pc = this.sessionDescriptionHandler.peerConnection;
      this.remoteVideo = <HTMLMediaElement>document.getElementById('remoteVideo');
      this.localVideo = <HTMLMediaElement>document.getElementById('localVideo');

      // Gets remote tracks
      const remoteStream = new MediaStream();
      pc.getReceivers().forEach(function (receiver) {
        remoteStream.addTrack(receiver.track);
        if (remoteStream === null) {
          console.log('fermon this shit is null the whole time');
        }
      });
      this.remoteVideo.srcObject = remoteStream;
      this.remoteVideo.play();


      const localStream = new MediaStream();
      pc.getSenders().forEach(function (sender) {
        localStream.addTrack(sender.track);
      });
      this.localVideo.srcObject = localStream;
      this.localVideo.play();
    });


  }
   pickupPhone(): void {

     this.sipSession.accept();
     this.audioRef.nativeElement.pause();
     const pc = this.sipSession.sessionDescriptionHandler.peerConnection;
     this.remoteAudio = <HTMLMediaElement>document.getElementById('remoteAudio');
     this.localAudio = <HTMLMediaElement>document.getElementById('localAudio');

     // Gets remote tracks
     const remoteStream = new MediaStream();
     pc.getReceivers().forEach(function (receiver) {
       remoteStream.addTrack(receiver.track);
       if (remoteStream === null) {
         console.log('fermon this shit is null the whole time');
       }
     });
     this.remoteAudio.srcObject = remoteStream;
     this.remoteAudio.play();


     const localStream = new MediaStream();
     pc.getSenders().forEach(function (sender) {
       localStream.addTrack(sender.track);
     });
     this.localAudio.srcObject = localStream;
     this.localAudio.play();

    }




}




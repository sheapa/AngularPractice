import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName: any = 'Testserver';
  userName: string = '';
  inputFull: boolean = false;
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver2'];
  displaySecret = false;
  log: any[]= [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

 onInputValue(event: any) {
  this.userName = (<HTMLInputElement>event.target).value;
 }

 onToggleDisplay() {
  this.displaySecret = !this.displaySecret;
  this.log.push(new Date());
 }

}

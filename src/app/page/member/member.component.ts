import { Component } from '@angular/core';
import { CBTransceiver } from '../Usercontext/CBTransceiver';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  constructor(private http: HttpClient){}

  CBTransceiver: CBTransceiver = new CBTransceiver();

  saveMember(){
    console.log(this.CBTransceiver);
    const jsonData = JSON.stringify(this.CBTransceiver);
  }

}

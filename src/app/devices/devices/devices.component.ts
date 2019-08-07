import { Component} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent  {

  subscriptionId = '123123';
  destroy$: ReplaySubject<boolean> = new ReplaySubject();

  constructor(
    ) {}



}

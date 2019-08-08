import { DeviceServise } from './device.service';
import { Component, OnInit, AfterContentInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'test-build-l';
  constructor(private service: DeviceServise) {

  }
  async ngOnInit() {
    await this.renderModule();
  }
   ngAfterContentInit(): void {
    // const t = 'ngInjectorDef';
    // setTimeout(() => console.log([CellModule[t]]), 3000);

  }
  async renderModule() {
    await this.service.getModule();
  }
}

import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  managers: string[] = [];
  maxManagers: number = 2;
  newManagerValue: string = '';
  constructor(private serviceService: ServiceService) { }
  addManager=(newManager: string)=> {
      if (this.managers.length < this.maxManagers) {
          this.managers.push(newManager);
      } else {
          alert('Cannot add more than 2 managers.');
      }
      this.newManagerValue = '';
  }
}

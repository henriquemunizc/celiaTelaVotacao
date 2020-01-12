import { Component } from '@angular/core';
import { DateService } from './utils/services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // dateService fará o parse de datas para yyyy-mm-ddT00:00:00:000
  constructor(dateService: DateService) { }


}

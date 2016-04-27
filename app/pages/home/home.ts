import {NavController, Page} from 'ionic-angular';
import {ScanPage} from '../scan/scan';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  click() {
    this.nav.push(ScanPage);
  }
}

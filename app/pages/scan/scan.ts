import {NavController, Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/scan/scan.html'
})
export class ScanPage {
  constructor(private nav: NavController) {

  }

  back() {
    this.nav.pop();
  }
}

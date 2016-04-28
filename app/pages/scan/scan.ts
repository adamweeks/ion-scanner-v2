import {NavController, NavParams, Page} from 'ionic-angular';
import {BarcodeData} from '../home/home';

@Page({
  templateUrl: 'build/pages/scan/scan.html'
})
export class ScanPage {
    barcodeData: BarcodeData;

    constructor(private nav: NavController, navParams: NavParams) {
        this.barcodeData = navParams.get('details');
    }

    back() {
        this.nav.pop();
    }
}

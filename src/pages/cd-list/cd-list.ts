import { Component } from "@angular/core";
import { NavController, NavParams, MenuController } from "ionic-angular";

@Component({
  selector: "page-cd-list",
  templateUrl: "cd-list.html"
})
export class CdListPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CdListPage");
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}

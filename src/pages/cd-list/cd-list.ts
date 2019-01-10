import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController,
  ModalController
} from "ionic-angular";
import { LendCdPage } from "../lend-cd/lend-cd";
import { Cd } from "../../models/cd.model";
import { ObjectsService } from "../../services/Objects.service";

@Component({
  selector: "page-cd-list",
  templateUrl: "cd-list.html"
})
export class CdListPage {
  CdList: Cd[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private objectsService: ObjectsService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.CdList = this.objectsService.cd;
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onSelectedCd(id: number) {
    const cdModal = this.modalCtrl.create(LendCdPage, { index: id });
    cdModal.present();
  }
}

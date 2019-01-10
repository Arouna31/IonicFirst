import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { Cd } from "../../models/cd.model";
import { ObjectsService } from "../../services/Objects.service";

@Component({
  selector: "page-lend-cd",
  templateUrl: "lend-cd.html"
})
export class LendCdPage {
  lenCdPage: any = LendCdPage;
  cd: Cd;
  index: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private objectsService: ObjectsService,
    private viewCtrl: ViewController
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.index = this.navParams.get("index");
    this.cd = this.objectsService.cd[this.index];
  }

  onDismissModal() {
    this.viewCtrl.dismiss();
  }
}

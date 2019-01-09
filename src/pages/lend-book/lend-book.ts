import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { Book } from "../../models/book.model";
import { ObjectsService } from "../../services/Objects.service";

@Component({
  selector: "page-lend-book",
  templateUrl: "lend-book.html"
})
export class LendBookPage {
  index: number;
  book: Book;

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
    this.book = this.objectsService.books[this.index];
  }

  onDismissModal() {
    this.viewCtrl.dismiss();
  }
}

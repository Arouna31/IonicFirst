import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController,
  ModalController
} from "ionic-angular";

import { Book } from "../../models/book.model";
import { ObjectsService } from "../../services/Objects.service";
import { LendBookPage } from "../lend-book/lend-book";

@Component({
  selector: "page-book-list",
  templateUrl: "book-list.html"
})
export class BookListPage {
  booksList: Book[] = [];
  lendBookPage: any = LendBookPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private objectsService: ObjectsService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.booksList = this.objectsService.books;
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onSelectedBook(id: number) {
    const modal = this.modalCtrl.create(this.lendBookPage, { index: id });
    modal.present();
  }
}

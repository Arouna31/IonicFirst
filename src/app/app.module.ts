import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ObjectsService } from "../services/Objects.service";
import { LendBookPage } from "../pages/lend-book/lend-book";
import { LendCdPage } from "../pages/lend-cd/lend-cd";
import { BookListPage } from "../pages/book-list/book-list";
import { CdListPage } from "../pages/cd-list/cd-list";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LendBookPage,
    LendCdPage,
    BookListPage,
    CdListPage,
    TabsPage,
    SettingsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LendBookPage,
    LendCdPage,
    BookListPage,
    CdListPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ObjectsService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

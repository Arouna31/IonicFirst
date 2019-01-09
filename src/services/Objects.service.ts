import { Book } from "../models/book.model";
import { Cd } from "../models/cd.model";

export class ObjectsService {
  books: Book[] = [
    new Book("Etranger", "Albert Camus"),
    new Book("Les Misérables", "Victor Hugo"),
    new Book("How Javascript Works", "Douglas ClockFord"),
    new Book("Javascript Good Parts", "Douglas ClockFord"),
    new Book("Eloquent Javascript", "Marijn Haverbeke")
  ];
  cd: Cd[] = [
    new Cd("Mini World", "Musique", "Indila"),
    new Cd(`L'amour d'Allah`, "Musique", "Silence Des Mosquees"),
    new Cd(`Moana`, "Film", "	Ron Clements"),
    new Cd(`Harry Potter`, "Film", "J. K. Rowling"),
    new Cd(`Blanche Neige`, "Film", "	David Hand")
  ];
}

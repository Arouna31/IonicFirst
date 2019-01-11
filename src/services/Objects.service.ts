import { Book } from "../models/book.model";
import { Cd } from "../models/cd.model";

export class ObjectsService {
  books: Book[] = [
    new Book("Etranger", "Albert Camus", "../assets/imgs/etranger.jpeg"),
    new Book("Les Misérables", "Victor Hugo", "../assets/imgs/miserables.jpg"),
    new Book(
      "How Javascript Works",
      "Douglas ClockFord",
      "../assets/imgs/hjw.jpg"
    ),
    new Book(
      "Javascript Good Parts",
      "Douglas ClockFord",
      "../assets/imgs/gp.jpeg"
    ),
    new Book(
      "Eloquent Javascript",
      "Marijn Haverbeke",
      "../assets/imgs/eloquent.jpg"
    )
  ];
  cd: Cd[] = [
    new Cd("Mini World", "Musique", "Indila", "../assets/imgs/mini.jpg"),
    new Cd(
      `L'amour d'Allah`,
      "Musique",
      "Silence Des Mosquees",
      "../assets/imgs/silence.jpg"
    ),
    new Cd(`Moana`, "Film", "	Ron Clements", "../assets/imgs/moana.jpeg"),
    new Cd(
      `Harry Potter`,
      "Film",
      "J. K. Rowling",
      "../assets/imgs/harry.jpeg"
    ),
    new Cd(`Blanche Neige`, "Film", "	David Hand", "../assets/imgs/blanche.jpg")
  ];

  changeObjectStatus(object: any) {
    object.isLended = !object.isLended;
  }
}

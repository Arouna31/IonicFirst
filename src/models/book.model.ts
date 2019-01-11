export class Book {
  isLended: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public picture: string
  ) {}
}

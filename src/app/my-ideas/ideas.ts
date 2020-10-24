export class Ideas {

  private id: number;
  private idUserFK: number;
  private name: string;
  private description: string;

  constructor(id: number,
              idUserFK: number,
              name: string,
              description: string) {
    this.id = id;
    this.idUserFK = idUserFK;
    this.name = name;
    this.description = description;
  }


}

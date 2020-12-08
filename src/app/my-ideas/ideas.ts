export class Ideas {

  private _id: number;
  private _idUserFK: number;
  private _name: string;
  private _description: string;

  constructor(id: number,
              idUserFK: number,
              name: string,
              description: string) {
    this._id = id;
    this._idUserFK = idUserFK;
    this._name = name;
    this._description = description;
  }


  get id(): number {
    return this._id;
  }

  get idUserFK(): number {
    return this._idUserFK;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}

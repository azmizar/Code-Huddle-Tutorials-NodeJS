// internal counter
let currentUserID: number = 1;

/**
 * User information
 */
export class UserInformation {
  private _userID: number = currentUserID++;
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get userID(): number {
    return this._userID;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}
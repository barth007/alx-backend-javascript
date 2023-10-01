export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('size must be an integer');
    }
    this._size = value;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('location must be a string');
    }
    this._location = value;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

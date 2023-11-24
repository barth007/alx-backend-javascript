export default class Car{
  constructor(brand, motor, color){
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  get brand(){
    return this._brand;
  }
  get motor(){
    return this._motor;
  }
  get color(){
    return this._color;
  }
  set brand(value){
    if (typeof value !== 'string'){
      throw new Error("Brand must be a string")
    }
    this._brand = value;
  }
  set motor(value){
    if (typeof value !== 'string'){
      throw new Error("Motor must be a string")
    }
    this._motor = value;
  }

  set color(value){
    if (typeof value !== 'string'){
      throw new Error("Color must be a string")
    }
    this._color = value;
  }
  cloneCar(){
    return `${this._brand},${this._motor}, ${this._color}`
  }
}

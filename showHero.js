'use strict';

const usePower = function () {
  return this._power;
};

const Hero = function (name, alias, power) {

  console.log('New Hero: ', this);
  this.name = name;
  console.log('__________________________');

  console.log('New Hero: ', this);
  this.alias = alias;
  console.log('__________________________');

  console.log('New Hero: ', this);
  this._power = power;
  console.log('__________________________');

  console.log('New Hero: ', this);
  this.usePower = usePower;
  console.log('__________________________');

  console.log('New Hero: ', this);
  console.log('__________________________');

};

let myHero = new Hero('John', 'Super John', 'JavaScript');
console.log(myHero);
console.log('__________________________');

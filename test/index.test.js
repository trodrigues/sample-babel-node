var assert = require('assert'),
    AnimalModule = require('../index');

AnimalModule.__Rewire__('animalContent', function animalContent(){
  return 'Hi, I am an animal';
})

var Animal = AnimalModule.Animal,
    a = new Animal();

assert.ok(Animal.getName() === 'Animal');
assert.ok(a.sayHi() == 'Hi, I am an animal');

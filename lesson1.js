var name = "Olya";
console.log(name);

//var CONST =

var t = name;
console.log (t);
name = "";
console.log(name);

//тип данных намбер
var age = 10;
console.log (age);


//тип данных стока
var str = 'jhjkhkj';
console.log(str);

var template = `I am ${age}`;
console.log(template);

//boolean
var g = true;
console.log (g);
g = false;
console.log(g);


//null
var nothing = null;
console.log(nothing);

//undefined
var r;
console.log(r);

var y = undefined;
console.log(y);

var name = 'Sveta';
console.log(name);

var number = 88;
console.log(number);

var boolean = false;
console.log(boolean);

var all = `My name is ${name}, I am ${number}, and my answer is ${boolean}`;
console.log(all);

//тип данных object
var person = {
    name: "Olya",
    age: 88
};
console.log(person);
//добавляем своство обьекту персон
person.city = 'Kiev';
console.log(person);

person ['sex'] = 'female';//то же самое что person.sex=female;
console.log(person);

person.name = name;
console.log(person);

console.log('name' in person);


//удалить свойство из обьекта
console.log(delete person.name);

//array (масив)
var list = [10,20];
console.log(list);
list[0]=5;
console.log(list);
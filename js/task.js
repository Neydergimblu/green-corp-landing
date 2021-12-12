// let name = "Алексей";
// let last_name = "Антонов";
// let age = 32;

// let mad = {
// 	name: "карл",
// 	last_name: "клара",
// 	age: 23,
// };

// mad.name = name;
// mad.last_name = last_name;
// mad.age = age;

// mad.city = "NightCity";

// console.log(mad.city);

// delete mad.city;

// console.log(mad.city);

// let position = 2;
// console.log("Ваша позиция " + { position: 1 }); // Ваша позиция 2


//Практическое задание


//Практическое задание
// let a = -1000002;
// let b = -1000001;
// let c = -1000000;

// if (a > b && a > c) {
// 	console.log(a);
// } else if (b > a && b > c) {
// 	console.log(b);
// } else if (c > a && c > b) {
// 	console.log(c);
// }


//Практическое задание
// word_1 = "дирижабль";
// word_2 = "люберцы";

// console.log((word_1.length > word_2.length) ? word_1 : word_2);

//Практическое задание 4.5
// task = "переименовать"

// switch (task) {
// 	case "удалить":
// 		console.log("delete");
// 		break;
// 	case "переименовать":
// 		console.log("rename");
// 		break;
// 	case "редактировать":
// 		console.log("edit");
// 		break;
// }

//Практическое задание 4.6
// price = 10000;
// range = "day"

// switch (range) {
// 	case "month":
// 		console.log(`${price} Р в месяц`);
// 		break;
// 	case "day":
// 		console.log(`${price} Р в день`);
// 		break;
// 	case "week":
// 		console.log(`${price} Р в неделю`);
// 		break;
// }

//Практическое задание 4.7
// a = 2
// b = 6
// sign = "*"

// switch (sign) {
// 	case "+":
// 		console.log(a + b);
// 		break;
// 	case "-":
// 		console.log(a - b);
// 		break;
// 	case "/":
// 		console.log(a / b);
// 		break;
// 	case "*":
// 		console.log(a * b);
// 		break;
// }

//Практическое задание 4.8
// a = 2;
// b = 0;
// sign = "/";

// switch (sign) {
// 	case "+":
// 		console.log(a + b);
// 		break;
// 	case "-":
// 		console.log(a - b);
// 		break;
// 	case "/":
// 		if (b === 0) {
// 			console.log("Делить на 0 нельзя!");
// 		} else {
// 			console.log(a / b);
// 		}
// 		break;
// 	case "*":
// 		console.log(a * b);
// 		break;
// }


//Практическое задание 4.8
// temp = 25;
// weather = "clear";

// if (temp >= 25 && weather === "clear") {
// 	activity = "golf";
// } else if (temp >= 10 && temp < 24 && weather === "clear") {
// 	activity = "bowling";
// } else {
// 	activity = "hiking";
// }

// console.log(10 / "2");
// console.log(typeof (10 / "2"));

// alert(null+undefined);

// let num = 10;
// if (num % 3 === 0) {
// 	num = 5;
// }

// let message = "Ckbirjv rjhjnrbq gfhjkm"
// console.log(message);

// alert ("12"/0);

// let m;
// switch (m) {
// 	case 0:
// 		console.log(1);
// 		break;
// 	case null:
// 		console.log(2);
// 		break;
// 	case undefined:
// 		console.log(3);
// 		break;
// 	default:
// 		console.log(4);
// 		break;
// }

// console.log(false == '0');

// console.log(typeof typeof 1);

// let gt = 10;
// let answer = 10 != gt ? "Yes" : "No";
// console.log(answer);


// //Практическое задание 5.1
// let start = 0;
// let end = 50;



// for (let i = start, result = 0; i <= end; i++) {
// 	if (i % 5 === 0) {
// 		result += i;
// 		console.log(result);
// 	}
// }

//Практическое задание 5.2
// let word = "мир";
// let wordResult="";

// for (let i = word.length-1; i >= 0; i--) {
// 	wordResult += word[i];
// }

// console.log(wordResult);

//Практическое задание 5.3
// let word = "Велосипед";
// let wordResult="";

// for (let i = word.length-1; i >= 0; i--) {
// 	wordResult += word[i];
// }

// console.log(wordResult);

// console.log(word.toLowerCase());
// console.log(wordResult.toLowerCase());

// if (wordResult.toLowerCase() === word.toLowerCase()) {
// 	console.log("Слово является палиндромом!");
// } else {
// 	console.log("Слово не является палиндромом!");
// }

//Практическое задание 6.3
// let num = 9;
// function square() {
// 	return (num * num);
// }

// square(num);


//Практическое задание 6.4
// let num = 2;
// let result ="";
// function square2() {

// 	for (i = 0; i <= 2; i++) {
// 		num = Math.pow(num,2)
// 		if (result === "") {
// 			result = result + String(num);
// 		} else {
// 			result = result + " " + String(num);
// 		}
// 	}
// 	console.log(result);
// }

// square2(num);

//Практическое задание 6.5
// let data = "привет";

// function getNumber(data) {
// console.log(typeof parseFloat(data));
// console.log(isNaN(parseFloat(data)));
// 	if (isNaN(parseFloat(data))) {
// 		return 0;
// 	} else {
// 		return parseFloat(data);
// 	}
// }

// console.log(getNumber(data));

//Практическое задание 6.6
// let list = [2, 45, 3, 23, 6];

// function average(list) {
// 	let result = 0;

// 	for (let i = 0; i < list.length; i++) {
// 		result += list[i];
// 	}
// 	return Math.round(result / list.length);

// }

// console.log(average(list));

//Практическое задание 6.7
// let list = [2, 45, 3, 23, 6];

// function count(list) {
// 	let result = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		if (list[i] % 2 == 0) {
// 			result += 1;
// 		}
// 	}
// 	return result;
// }

// console.log(count(list));

//Практическое задание 6.8
// let value = 4;
// let total = 80;


// function getPercent(value, total) {
// 	return 100 / (total/value);
// }

// console.log(getPercent(value, total));

//Практическое задание 7.1
// let obj = {
// 	"Яблоко": "фрукт",
// 	"Арбуз": "ягода",
// 	"Помидор": "овощ",
// 	"Огурец": "овощ",
// 	"Вишня": "ягода"
// }

// let result = {}

// for (let key in obj) {
// 	let kort = obj[key];

// 	if (Object.keys(result).length === 0 && result.constructor === Object) {
// 		result[kort] = 0;
// 	}

// 	for (let mun in result) {
// 		if (mun !== obj[key]) {
// 			result[obj[key]] = 0;
// 		}
// 	}
// }

// for (let key in obj) {
// 	for (let mun in result) {
// 		if (mun === obj[key]) {
// 			result[mun]++;
// 		}
// 	}
// }

// console.log(result);

//Практическое задание 7.2
// list = [
// 	{ product: "Apple", price: 60 },
// 	{ product: "Cherry", price: 40 },
// 	{ product: "Strawberry", price: 32 }
// ]

// let max = 0;
// let result;

// for (let i = 0; i < list.length; i++) {
// console.log(typeof list[i].price);
// 	if (max < list[i].price) {
// 		max = list[i].price;
// 		result = list[i].product;
// 		console.log (`max ${max} < price: ${list[i].price} `);
// 		console.log(max);
// 	}
// }
// console.log(result);


//Javascript тест 2----------------------------------------

// let i=0;
// while (i<=26) {
// 	console.log(i+=5)
// }

// const options = {
// 	color:"red"
// }

// console.log(options.style.color);

// function hello() console.log('Привет!');

// do {
// 	console.log('Привет');
// } while (0)

// for (; ;) {
// 	console.log('Привет');
// 	break;
// }

// for (let i = 0; i < 5; ++i) {
// 	console.log(i);
// }

// let obj1 = {};
// let obj2 = {};

// console.log (obj1 == obj2);

// let i;
// for (i=0;i<=10;++i) {

// }
// console.log(i);

// let obj1 = {
// 	name: 'anna'
// };
// let obj2 = obj1;
// obj2.name = 'nastia';

// console.log(obj1.name);

// let count;
// for (let i = 10; i < 20; i++) {
// 	count = i + 1;
// }
// console.log(count);

// let word = 'sparrow';
// for (let i = 0; i < word.length; i++) {
// 	word += i;
// 	if (word[i] == "r") break;
// }

// console.log(word);

// const tum = {
// 	'first-name': 'Иван',
// 	age: 12
// }

// console.log(tum[0])

// for (let i = 5; i < 40; i += 5) {
// 	console.log(i);
// }

// const pum = {};
// console.log(pum);

// let array = [1, 2, 3];

// console.log(array[-1]);

// let array = [1, 2, 3];
// console.log(array[-1]);
// console.log(array[9999]);
// console.log(array['Hello']);

// let object = { 1: '1' };
// console.log(object[-1]);
// console.log(object[9999]);
// console.log(object['Hello']);

// let array1 = [1, 2, 3];
// let array2 = array1;
// array2[0] = 2;

// console.log(array1);

function compactArray(arr) {
	const result = [];

	for (let item of arr) {
		if (Boolean(item)) {
			result.push(item);
		}
	}

	return console.log(result);
}
compactArray(['Вася', 'Петя', undefined, 'Иван'])

//Практическое задание 9.2

// list = ["Яблоко","Груша","Клубника"];

// let result;
// let count = 0;

// for (let item of list) {
// 	console.log(item);

// 	console.log(count);
// 	if (item.length > count) {
// 		count = item.length;
// 		result = item;
// 	}
// }

// console.log(result);

//Практическое задание 9.3
// list_1 = [12, 3];
// list_2 = [2, 1];

// for (let item of list_2) {
// 	list_1.push(item);
// }	

// for (let i=0;i<list_1.length;i++) {
// 	list_1[i] = Math.pow(list_1[i],2);
// }


// console.log(list_1);

//Практическое задание 9.4

// list = [23, 13, 3];
// let result = 0;

// for (let i = 0; i < list.length; i++) {
// 	result = result + list[i];
// }

// console.log(result);

//Практическое задание 9.5
// list = [12, -4, 5, 32, 2]

// let result = 0;

// for (let i = 0; i < list.length; i++) {
// 	if (list[i]>0) {
// 		result = result + list[i];
// 	}
// }

// console.log(result);

//Практическое задание 9.6
// let list = [];
// let result = 0;

// for (let i = 0; i < 100; i++) {
// 	list.push(i);
// }
// console.log(list);

// function getPrimNumber(num) {
// 	if (num < 2) return false;
// 	for (var i = 2; i < num; i++) {
// 		if (num % i == 0)
// 			return false;
// 	}
// 	return true;
// }

// for (let i = 0; i < list.length; i++) {
// 	if (getPrimNumber(i)) {
// 		result = result + list[i];
// 	}
// }
// console.log(result);

//Практическое задание 9.7
// list = [2, 45, 3, 23, 6];

// function getMaxOfArray(numArray) {
// 	return Math.max.apply(null, numArray);
//  }

//  function getMinOfArray(numArray) {
// 	return Math.min.apply(null, numArray);
//  }

//  let maxElement = getMaxOfArray(list);
//  let minElement = getMinOfArray(list);

//  console.log(maxElement);
//  console.log(minElement);

//  console.log(maxElement*minElement);


//Практическое задание 9.8
// list = [2, 45, 3, 23, 6];
// result=[];

// for (let index = list.length - 1; index >= 0; index--) {
// 	result.push(list[index]);
//  }
//  list = result;
//  console.log(list);

//Практическое задание 9.9
// let sentence = "Завтра будет лучше чем вчера";

// let result =[];
// let word = "";

// for (let i = 0; i <= sentence.length; i++) {
// console.log(sentence[i]);

// 	if (sentence[i] !== " " &&  i !== sentence.length) {
// 		word += sentence[i];
// 		console.log(word);
// 	} else {
// 		result.push(word);
// 		word = "";
// 	}
// }

// console.log(result);

//Практическое задание 9.10
// list = [2, 54, 2, 54, false, 2]

// let result = 0

// for (let i = 0; i < list.length; i++) {
// 	if (list[i] === false || list[i] === true) {
// 		break;
// 	} else {
// 		result +=list[i];
// 	}
// }

// console.log(result);

//Практическое задание 9.11
// let result = [];

// for (let i = 10; i <= 20; i++) {
// 	result.push(i);
// }

// console.log(result);

//Практическое задание 9.12
// list = [2, "привет", 23, true, 2, false, 2]

// let number_list = [];

// for (let i = 0; i < list.length; i++) {
// 	console.log(list[i] +": " + typeof list[i]);

// 	if (list[i] === false) {
// 		break;
// 	} else {
// 		if (typeof list[i] === 'number') {
// 			number_list.push(list[i]);
// 		}
// 	}
// }

// console.log(number_list);


//Практическое задание 9.13

// list = ["Лёша", "default", "полке", "клопа", "нашёл"];

// let result = 0;

// for (let i = 0; i < list.length; i++) {
// 	console.log(list[i] + ": " + typeof list[i]);
// 	if (list[i].toLowerCase() !== "default") {
// 		result++
// 	}
// }

// console.log(result);

//Практическое задание 9.14
// list = ["почтовый","желание","абсолютный","закрытый"]

// let result = "";

// for (let i = 0; i < list.length; i++) {
// 	let word = list[i];
// 	result += word[0];
// }


// console.log(result);

// let objectArray = [{ name: 'Иван' }, { name: 'Петя' }, { name: 'Саша' }];
// console.log(objectArray.toString());
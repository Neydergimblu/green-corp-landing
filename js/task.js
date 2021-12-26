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

// function compactArray(arr) {
// 	const result = [];

// 	for (let item of arr) {
// 		if (Boolean(item)) {
// 			result.push(item);
// 		}
// 	}

// 	return console.log(result);
// }
// compactArray(['Вася', 'Петя', undefined, 'Иван'])

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

// for (let i=0;i<=10;) {
// 	i++;
// }
// console.log(i);

// console.log(String([1,true,[],{}]));


//JavaScript II ------------------------------------------------------------

//Практическое задание 1.1.
// let message = "приветствую вас";

// if (message.toLowerCase().startsWith("привет")) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

//Практическое задание 1.2
// let greetings = "Приветствую, username! Сегодня вы получили два сообщения от username.";

// console.log(greetings.length);
// console.log(greetings.toLowerCase().lastIndexOf("username"));

//Практическое задание 1.3
// let firstDiv = "<p>Первый параграф</p> <p>Второй параграф</p>";

// function searchTag(str) {
// 	let first = str.indexOf("<p>");
// 	console.log(first);
// 	let second = str.indexOf("<p>", first+1);
// 	console.log(second);

// 	if (second > 0) {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// }

// searchTag(firstDiv);



//Практическое задание 1.4
// let road = "15.2 km";

// function convertToMile (str) {
// 	let result = str.slice(0, str.length-3);
// 	console.log(result);
// 	result = parseFloat(result)*0.62;
// 	return +result.toFixed(1);
// }

// console.log(convertToMile (road));

//Практическое задание 1.5
// let words = "Солнечная";

// function searchTag(str) {
// 	let first = str.indexOf(" ");
// 	console.log(first);


// 	if (first > 0) {
// 		console.log("В строке больше одного слова");
// 	} else {
// 		console.log("В строке одно слово");
// 	}
// }

// searchTag(words);

//Практическое задание 1.6
// let symbols = "42 Первый номер";

// console.log('0'.codePointAt()); // 1040
// console.log('1'.codePointAt(0)); // 1071
// console.log('2'.codePointAt(0)); // 1072
// console.log('3'.codePointAt(0)); // 1103
// console.log('4'.codePointAt(0)); // 1040
// console.log('5'.codePointAt(0)); // 1071
// console.log('6'.codePointAt(0)); // 1072
// console.log('8'.codePointAt(0)); // 1103
// console.log('9'.codePointAt(0)); // 1103

// let result = symbols.slice(0,1);
// console.log(result);
// console.log(result.codePointAt(0));
// if (result.codePointAt(0)<48 || result.codePointAt(0)>57) {
// 	console.log ("Первый символ не цифра");
// } else {
// 	console.log("Первый символ цифра");
// }

//Практическое задание 1.7
// let symbols = "student";

// if ((symbols.codePointAt(0) + symbols.codePointAt(1)) % 2 === 0) {
// 	console.log(String.fromCodePoint(symbols.codePointAt(0) + symbols.codePointAt(1)));
// } else {
// 	console.log("Символ обнаружить не удалось");
// }

// console.log("100*40=4000".match(/\d*/g));


//Практическое задание 1.8
// let phone = "+712:34567*8,90";

// let result = phone.replace(/[^+0-9]/g,'');

// console.log(result);


//Практическое задание 1.9
// emails = "example@ex.ru primer@primer.com email@com.ru";


// if (emails.length>0) {
// 	let result = emails.match(/[a-z0-9-]*@[a-z0-9]*.[a-z]*/g)
// 	console.log(result);
// } else {
// 	let result =[""];
// 	console.log(result);
// }

//Практическое задание 1.10
// ticket = "BM-122345671235:RU"

// let number = ticket.replace(/[a-zA-Z:-]/g, '')
// if (number.length === 8) {
// 	console.log("Выбран билет на концерт");
// } else if (number.length === 12) {
// 	console.log("Выбран билет в театр");
// } else {
// 	console.log("Билет не определен");
// }

// console.log(number);

// array = [];
// console.log(array.push("maks"));
// console.log(array.pop());
// console.log(array);

//Практическое задание 2.1
// let values = ["Строка",true,"Число","Объект","Не число",false];

// function changeBolean(array) {
// 	let position = 0;
// 	for (let index = 0 ; index < array.length; index++) {
// 		if (typeof array[index] === "boolean") {
// 			array[index] = "булевый тип";
// 			break
// 		}
// 	}
// 	console.log(array);
// }

// changeBolean(values);

// const films = [
// 	{ viewed: false, title: "Назад в будущее", durationInMinutes: 116 },
// 	{ viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96 },
// 	{ viewed: false, title: "Мэри и Макс", durationInMinutes: 92 },
// ];
// const customSelection = films.slice(-2)
// console.log(customSelection);

//Практическое задание 2.2
// const partNumbers = ["EGH63FD54DF","EF5VGE344","FRGH34GR54FF","REGRGBE"];

// for (let index = 0 ; index < partNumbers.length; index++) {
// 	console.log(partNumbers[index]);
// 		}


// const result = partNumbers.filter(function (number) {
// 	return /[0-9]{2}[a-z]{2}$/gi.test(number);
// });

// console.log(result);

// const username = "Montenegro2057";

// console.log(username.replace(/[0-9]{2}[a-z]{2}$/gi,""));

//Практическое задание 2.3
// let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";

// function dunkan(string) {
// 	let result = (string.match(/[0-9]+/g));
// 	if (result === null) {
// 		return result = [];
// 	} else {
// 		result = result.map(function (element) {
// 			if (element % 2 === 0) {
// 				element = Math.pow(element, 2);
// 				return element;
// 			} else {
// 				element = Number(element);
// 				return element;
// 			}
// 		});
// 	}

// 	return result;
// }
// console.log(dunkan(layout));

//Практическое задание 2.4
// let tasks = [];

// function dunkanTwo(array) {
// 	let result = array.map(function(element) {
// 		return element.title
// 	});
// 	return result;
// }

// console.log(dunkanTwo(tasks));

//Практическое задание 2.5
// let values = [true,"Число",false,"Не число",false,"Строка"];

// function dunkanThree(array) {
// 	let findFirstBooleanIndex = array.indexOf(true);
// 	let findLastBooleanIndex = array.lastIndexOf(false);
// 	console.log(findFirstBooleanIndex + ":" + findLastBooleanIndex);
// 	let result = array.slice(findFirstBooleanIndex,findLastBooleanIndex+1)
// 	return result;
// }

// console.log(dunkanThree(values));

//Практическое задание 2.6
// let values = [10, 185, 11200, 980];

// function dunkan26(array){
// 	let result = array.filter(function (element) {
// 		element = String(element);
// console.log(typeof element);
// 		element.match(/^[0-9]{4}$/gi);
// console.log(cheсkElement);
// 	});

// 	if (result.length > 0) {
// 		return console.log(true);
// 	} else {
// 		return console.log(false);
// 	}
// }

// dunkan26(values);

//Практическое задание 2.7
// let values = [10, 185, 11200, 980, 4458];

// function dunkan27(array) {
// 	let result = array.findIndex(function (element) {
// 		element = String(element);
// console.log(typeof element);
// 		return element.match(/^[0-9]{4}$/gi);
// console.log(cheсkElement);
// 	});
// 	if (result > 0) {
// 		return console.log(result);
// 	} else {
// 		return console.log("Искомый элемент не был найден");
// 	}
// }

// dunkan27(values);

//Практическое задание 2.8
// let users = [
// 	{login: "user1", role: "Admin"},
// 	{login: "user2", role: "State user"},
// 	{login: "user3", role: "Moderator"}
// ]

// function dunkan28(array) {
// 	let result = array.findIndex(function (element) {
// 		return element.role.match(/^[a-z]+ [a-z]+$/gi);
// 	});
// 	console.log(result);

// }

// dunkan28(users);

//Практическое задание 2.9
// let randValues = [3,1,-100];

// let checkArray = randValues.some (e=>{
// 	return typeof e === "string";
// })
// console.log(checkArray);

// if (checkArray) {
// 	let sortMassiveString = randValues.sort((a, b) => {
// 		let aTitle = String(a);
// 		let bTitle = String(b);
// 		aTitle = aTitle.toUpperCase();
// 		bTitle = bTitle.toUpperCase();
// 		if (aTitle == bTitle) return 0;
// 		if (aTitle < bTitle) return -1;
// 		if (aTitle > bTitle) return 1;
// 	});
// 	console.log(sortMassiveString);
// } else {
// 	let sortMassiveNumber = randValues.sort((a, b) => a - b);
// 	console.log(sortMassiveNumber);
// }

//Практическое задание 2.10
// let array = [[1, 2, 3], [1, 2], [1, 2, 3, 4]];

// let result = array.sort((a, b) => {
// 	if (a.length == b.length) return 0;
// 	if (a.length < b.length) return -1;
// 	if (a.length > b.length) return 1;
// });
// console.log(result);

//Практическое задание 2.11
// let words = ["Заказ", "Такси", "Доход"];

// let countPol = 0;
// let countNotPol = 0;
// console.log(words);

// let polindrom = words.forEach(e => {
// 	let strReverse = e.toLowerCase().split('').reverse().join('');
// 	console.log(strReverse + "-"+ e);
// 	if (strReverse === e.toLowerCase()) {
// 		countPol++
// 	} else {
// 		countNotPol++
// 	}
// });
// let result = [countPol, countNotPol];
// console.log(result);

//Практическое задание 2.12
// let dates = "23.04.1996 07.10.2002 15.08.1945";
// dates = dates.replace(/\./gs,"/");
// console.log(dates);
// let result = dates.split(" ");
// console.log(result);

//Практическое задание 2.13
// В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

// let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
// let tickets2 = "Train: . Airplane: .";

// function lesson213(string) {
// 	let array = string.split(/\. |\./gs, 2);
// 	let trainArray = array[0].split(/Train: |, /gi).slice(1, 4);
// 	let airplaneArray = array[1].split(/Airplane: |, /gi).slice(1, 4);

// 	let result = {
// 		"train": trainArray,
// 		"airplane": airplaneArray
// 	};
// 	return result;
// }

// console.log(lesson213(tickets));
// lesson213(tickets2);

// const array = [16, 56, 85, 91, 41];

// const sum = array.reduce(function (previousValue, currentItem, currentIndex, array) {
// 	console.log(previousValue + " " + currentItem + " " + currentIndex + " " + array)
// 	return previousValue + currentItem

// }, 0)

// console.log(sum);

//Практическое задание 2.14
// В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
// let numbers = [23,4,2,4,3,11,3,12,3,23];

// let result = numbers.reduce((acc, item) => {

// 	acc.sum += item;
// 	if (acc.sum<=50) {
// 		acc.count++;
// 	}

// 	return acc;

// }, { count: 0, sum: 0 });

// console.log(result.count);

//Практическое задание 2.15
//В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.

// let values = ["100", "30", "Не число", "20", "Тоже не число"];

// let result = values.reduce((acc, item) => {
// if (!Number.isNaN(Number(item))){
// 	acc.sum += Number(item);
// 	acc.count++;
// }
// 	console.log(acc);
// 	return acc;

// }, { count: 0, sum: 0 });

// console.log(result.sum);

//Практическое задание 2.16
//В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

// let array_1 = [2, 4, 7, 8, 1];
// let array_2 = [2, 5, 11, 6, 1];

// function intersection(array_1, array_2) {
// 	const resultArray = [];
// 	let result = array_1.reduce((acc, item1) => {
// 		let arrayThree = array_2.reduce((acc2, item2) => {
// 			if (item1 == item2) {
// 				resultArray.push(item2);
// 			}
// 		}, 0);
// 	},0);
// 	return resultArray

// }
// console.log(intersection(array_1, array_2));

//Практическое задание 3.1
//В программе объявлена переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. Удалите из объекта car свойство engine и результат выведите в консоль.

// let car  = {
// 	model: "Audi", 
// 	color: "white",
// 	weight: 1850,
// 	engine: "170 hp"
// }

// delete car.engine;

// console.log(car);

//Практическое задание 3.2
//В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.

// let goods = {
// 	title: "Самокат", 
// 	price: 6000,
// 	good_id: 1
// }

// let goodsKey = Object.keys(goods);
// console.log(goodsKey);
// let goodsValues = Object.values(goods);
// console.log(goodsValues);

// let result = goodsKey.concat(goodsValues);
// console.log(result);


//Практическое задание 3.3
//В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.

// let article = {
// 	title: "Загадки дачного огурца", 
// 	text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// }

// let author = {
// 	name: "Ричард М.В.",
// 	age: 43
// }

// const result = Object.assign(article, author);
// console.log(result);


//Практическое задание 3.4
//В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

// let array = [true, 4, "word", "10n"];

// function count() {
// 	return console.log("Количество элементов в массиве: " + array.length);
// }

// count(array);

//Практическое задание 3.5
//В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.

// let employee  = [
// 	["firstName", "Ivan"], 
// 	["lastName", "Ivanov"],
// 	["hireDate","21.10.2015"],
// 	["hireDate","21.10.2015"]
// ]

//Решение 1
// let deletePosition = employee.findIndex(el => el[0] == "hireDate");
// console.log(deletePosition);
// if (deletePosition > 0) {
// 	let deleteElement = employee.splice(deletePosition,2)
// }
// let pushElement = employee.push(["jobName", "IT PROG"]);
// console.log(employee);


//Решение 2
// let collection = new Map(employee);
// collection.delete('hireDate');
// collection.set("jobName", "IT PROG");
// console.log(collection); 

// let result = Object.entries(Object.fromEntries(collection));
// console.log(result);

//Практическое задание 3.6
//В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.

// let array = [
// 	[ "boolean", true ], 
// 	[ "number", 4 ],
// 	[ "string", "word" ],
// 	[ "object", {}]
// ]

// function countString(array) {
// 	let count = 0;
// 	for (let key of array) {
// 		if (typeof key[1] === "string") {
// 			count++
// 		}
// 	}
// 	console.log("Количество строковых элементов в именованном массиве: " + count);

// }

// countString(array);
// let arr = ["яблоко"]
// сonsole.log(arr.find("яблоко"));

// function check(arr) {
// 	let flag = true;
// 	arr.forEach(element => flag = flag && element%2 === 0)
// 	return flag;
// }

// console.log(check(arr));

// console.log("Пасмурно" > "Ясно");

// let row = [4,10,1,"text"].sort();
// console.log(row);

// const hero1 = { heroName: 'Герой #1' };
// const hero2 = { heroName: 'Герой #2' };

// function say(message) {
//   console.log(`${this.heroName}: ${message}`);
// }

// const hero1Say = say.bind(hero1);

// hero1Say("Вы любите живопись?"); // Герой #1: Вы любите живопись?
// say.call(hero2, "Да, очень. Люблю Рафаэля."); // Герой #2: Да, очень. Люблю Рафаэля.
// say.apply(hero2, ["А мне больше нравятся другие черепашки-ниндзя."]); // Герой #1: А мне больше нравятся другие черепашки-ниндзя.

//Практическое задание 4.1
//В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

// let pet_1 = {
// 	name: "Шарик",
// 	age: 10
// };

// let pet_2 = {
// 	name: "Жучка",
// 	age: 5
// };

// let sayFunction = function getName() {
// 	return this.name + " " + this.age;
// }

// pet_1.say = sayFunction;
// pet_2.say = sayFunction;

// let result = pet_1.say() +"; "+pet_2.say();
// console.log(result);

//Практическое задание 4.2
//В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().

// let input = {
// 	id: 1,
// 	value: "Добрый вечер",
// 	firstName: "Григорий",
// 	lastName: "Стрельников" 
// }

// function sayHi() {
// 	console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
// }

// const inputSayHi = sayHi.bind(input);

// inputSayHi();

//Практическое задание 4.3
//В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

// let pet = { 
// 	name: "Диксон", 
// 	breed: "Немецкая овчарка" 
// }

// function getDescription() { 
// 	console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
// }



// var getDescription = getDescription.call(pet);

//Практическое задание 4.4
//В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

// let props = {
// 	name: "Анатолий",
// 	age: 29,
// 	sayHi: () => "привет"
// }

// function getValue() {
// 	let result = "";
// 	for (let [key, values] of Object.entries(this)) {
// 		if (key !== "sayHi") {
// 			result += `${key}: ${values}, `;
// 		}
// 	}
// 	console.log("Значения свойств объекта props (" + result.replace(/, $/, '') + ")");
// };

// getValue = function getValue() {
// 	let result = '';
// 	for (let key in this) {
// 		if (typeof this[key] !== 'function') {
// 			result += `${key}: ${this[key]}, `;
// 		}
// 	};
// 	console.log(`Значения свойств объекта props (${result.replace(/, $/, '')})`);
// };

// const getValue = function () {
// 	let a = '';
// 	for (let i in this) {
// 		if (typeof this[i] !== 'function') {
// 			a += i + ': ' + this[i] + ', ';
// 		}
// 	};
// 	console.log(`Значения свойств объекта props (${a.replace(/, $/, '')})`);
// };

// getValue.bind(props)();

// var getValue = getValue.call(props);


//Практическое задание 4.5
//В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.

// let hero = { 
// 	nick: "FirstHero", 
// 	position: "Лагерь",
// 	getPosition: ()=>console.log("Позиция героя: " + hero.position)
// }

// hero.getPosition()

//Практическое задание 5.1
//В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

// let order = {
// 	productName: "Велосипед",
// 	costomerName: "Саша",
// 	salesName: "Петя",
// 	totalPrice: 15000
// }

// let descriptor = Object.getOwnPropertyDescriptor(order,'totalPrice');

// console.log(descriptor);

//Практическое задание 5.2
//В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

// let employees = {
// 	firstName: "Петя",
// 	lastName: "Иванов",
// 	ratePerDay: 2500,
// 	workingDays: 5,
// 	getSalary() { console.log(employees.ratePerDay * employees.workingDays) }
// }

// let result = "";
// for (let key in employees) {
// 	if (typeof employees[key] !== "function") {
// 		result += `${key}, `;
// 	}
// }

// console.log(result.replace(/, $/, ""));

//Практическое задание 5.3
//В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Геттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Сеттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

// let firstName = "Александр";
// let lastName = "Петров";

// const user = {
// 	firstName,
// 	lastName,
// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`
// 	},
// 	set fullName(string) {
// 		let array = string.split(/ /);
// 		return this.firstName = array[0], this.lastName = array[1];
// 	}
// }
// user.fullName = "Антонов Алексей";
// console.log(user.fullName);

//Практическое задание 5.4
//В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.

// let name = "Pizza";
// let phone = "81234567890";

// class Delivery {
// 	constructor(name, phone) {
// 		this.name = name;
// 		this.phone = phone;
// 		this.validPhone = (phone.match(/^\+/)) ? true : false;
// 	}
// }

// const deliveryName = new Delivery(name, phone);

//Практическое задание 5.5
//В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
// class Permissions {
// 	constructor() {
// 		this.create = false;
// 		this.read = true;
// 		this.update = false;
// 		this.bdelete = false;
// 	}
// }

// class User extends Permissions {
// 	constructor(name) {
// 		super();
// 		this.name = name;
// 	}
// }

// result = new User('admin');
// console.log(result);

//Практическое задание 5.6
//В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(...array,num), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

// const array = [-12,-32,-43,-3,-1];
// let num = 3;

// function minNumArray(array, num) {
// 	let minSum = 800;
// 	if (num === 0) {
// 		console.log(0);
// 	} else if (num === 2) {
// 		for (let j = 0; j < array.length; j++) {
// 			let sum = array[j];
// 			for (let i = (j + 1); i < array.length; i++) {
// 				sum = array[j] + array[i];
// 				//console.log(array[j] + " - " + sum);
// 				if (sum < minSum) {
// 					minSum = sum;
// 				}
// 			}
// 		}
// 		console.log(minSum);
// 	} else if (num === 3) {
// 		for (let j = 0; j < array.length; j++) {
// 			let sum = array[j] + array[j+1] + array[j+2];
// 			if (sum < minSum) {
// 				minSum = sum;
// 			}
// 		}
// 		console.log(minSum);
// 	}

// }
// minNumArray(array, num);

// function pow2() {
// 	this.x *=this.x;
// }
// const a={x:10};
// aPow2 = pow2.bind(a);

// const b={x:20};
// bPow2 = aPow2.bind(b);

// aPow2();
// bPow2();

// console.log(a.x, b.x);

//Практическое задание 6.2.
// let canvas = document.getElementById("lesson__canvas");
// let ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(200,100);
// ctx.moveTo(100,150);
// ctx.lineTo(200,150);
// ctx.stroke();
// ctx.closePath();


//Практическое задание 6.3.
//В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas три отрезка разных цветов. Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.

// ctx.beginPath();
// ctx.strokeStyle = "#e74c3c";
// ctx.moveTo(100,100);
// ctx.lineTo(200,100);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "#16a085";
// ctx.moveTo(100,150);
// ctx.lineTo(200,150);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "#2980b9";
// ctx.moveTo(100,200);
// ctx.lineTo(200,200);
// ctx.stroke();
// ctx.closePath();

//Практическое задание 6.4.
//В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.
// ctx.beginPath();
// ctx.fillStyle = "#ff3d00";
// ctx.fillRect(10, 10, 100, 100);
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "#0bdd38";
// ctx.fillRect(120, 10, 100, 100);
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "#2e77da";
// ctx.fillRect(10, 120, 100, 100);
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "#ffd200";
// ctx.fillRect(120, 120, 100, 100);
// ctx.closePath();

//Практическое задание 6.5.
//В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. Для решения данной задачи воспользуйтесь циклом.

// ctx.beginPath();

// for (let i = 1; i < 50; i++) {
// 	ctx.arc(150, 150, (i*2), 0, 2 * Math.PI);
// }

// ctx.fill();
// ctx.closePath();

//Практическое задание 6.6.
//В программе задана переменная ctx, которая содержит контекст canvas элемента. Напишите программу, которая отрисовывает круги при движении мышью по canvas (для получения координат мыши используйте offsetX и offsetY). Для решения задачи воспользуйтесь методом addEventListener у объекта document.

// Для правильной валидации задания выполните проверку в следующем порядке:

// Выполните задание
// Нажмите на кнопку «Проверить»
// Проведите курсором по окну с результатом
// Нажмите на кнопку «Проверить» еще раз
// let x;
// let y;
// function onMousemove(event) {
// 	x = event.offsetX;
// 	y = event.offsetY;
// };
// function animate() {
// 	canvas.addEventListener('mousemove', onMousemove, false);
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	ctx.beginPath();
// 	ctx.arc(x, y, 20, 0, 2 * Math.PI);
// 	ctx.fill();
// 	requestAnimationFrame(animate);
// }
// animate();


// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(30,0);
// ctx.lineTo(30,30);
// ctx.lineTo(0,0);
// ctx.fill();
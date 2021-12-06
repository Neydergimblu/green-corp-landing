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
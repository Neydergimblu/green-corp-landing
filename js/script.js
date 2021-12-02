// let name = "Алексей";
let last_name = "Антонов";
let age = 32;

let mad = {
	name: "карл",
	last_name: "клара",
	age: 23,
};

// mad.name = name;
mad.last_name = last_name;
mad.age = age;

mad.city = "NightCity";

console.log(mad.city);

delete mad.city;

console.log(mad.city);

let position = 2;
console.log("Ваша позиция " + { position: 1 }); // Ваша позиция 2


//Практическое задание
let price = "432"
let priceNumber = parseInt(price);


if (!parseInt(price)) {
	console.log("Не число");
} else if (priceNumber <= 0) {
	console.log("Число не корректное");
} else {
	console.log(priceNumber);
}

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
word_1 = "дирижабль";
word_2 = "люберцы";

console.log((word_1.length > word_2.length) ? word_1 : word_2);

//Практическое задание 4.5
task = "переименовать"

switch (task) {
	case "удалить":
		console.log("delete");
		break;
	case "переименовать":
		console.log("rename");
		break;
	case "редактировать":
		console.log("edit");
		break;
}

//Практическое задание 4.6
price = 10000;
range = "day"

switch (range) {
	case "month":
		console.log(`${price} Р в месяц`);
		break;
	case "day":
		console.log(`${price} Р в день`);
		break;
	case "week":
		console.log(`${price} Р в неделю`);
		break;
}

//Практическое задание 4.7
a = 2
b = 6
sign = "*"

switch (sign) {
	case "+":
		console.log(a + b);
		break;
	case "-":
		console.log(a - b);
		break;
	case "/":
		console.log(a / b);
		break;
	case "*":
		console.log(a * b);
		break;
}

//Практическое задание 4.8
a = 2;
b = 0;
sign = "/";

switch (sign) {
	case "+":
		console.log(a + b);
		break;
	case "-":
		console.log(a - b);
		break;
	case "/":
		if (b === 0) {
			console.log("Делить на 0 нельзя!");
		} else {
			console.log(a / b);
		}
		break;
	case "*":
		console.log(a * b);
		break;
}


//Практическое задание 4.8
temp = 25;
weather = "clear";

if (temp >= 25 && weather === "clear") {
	activity = "golf";
} else if (temp >= 10 && temp < 24 && weather === "clear") {
	activity = "bowling";
} else {
	activity = "hiking";
}

console.log(10 / "2");
console.log(typeof (10 / "2"));

// alert(null+undefined);

let num = 10;
if (num % 3 === 0) {
	num = 5;
}

let message = "Ckbirjv rjhjnrbq gfhjkm"
console.log(message);

// alert ("12"/0);

let m;
switch (m) {
	case 0:
		console.log(1);
		break;
	case null:
		console.log(2);
		break;
	case undefined:
		console.log(3);
		break;
	default:
		console.log(4);
		break;
}

console.log(false == '0');

console.log(typeof typeof 1);

let gt = 10;
let answer = 10 != gt ? "Yes" : "No";
console.log(answer);


//Практическое задание 5.1
let start = 0;
let end = 50;



for (let i = start, result = 0; i <= end; i++) {
	if (i % 5 === 0) {
		result += i;
		console.log(result);
	}
}

//Практическое задание 5.2
// let word = "мир";
// let wordResult="";

// for (let i = word.length-1; i >= 0; i--) {
// 	wordResult += word[i];
// }

// console.log(wordResult);

//Практическое задание 5.3
let word = "Велосипед";
let wordResult="";

for (let i = word.length-1; i >= 0; i--) {
	wordResult += word[i];
}

console.log(wordResult);

console.log(word.toLowerCase());
console.log(wordResult.toLowerCase());

if (wordResult.toLowerCase() === word.toLowerCase()) {
	console.log("Слово является палиндромом!");
} else {
	console.log("Слово не является палиндромом!");
}
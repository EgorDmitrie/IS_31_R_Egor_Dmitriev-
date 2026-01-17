//1
let number = 5;

if (number > 0) {
    console.log("Положительное");
} else {
    console.log("не положительное");
}
//2
function checkAdult(age) {
    if (age >= 18) {
        return "совершенолетний";
    } else {
        return "не совершенолетний";
    }
}

console.log(checkAdult(20));
//3
function checkGrade(grade) {
    if (grade === "A") {
        console.log("отлично");
    } else if (grade === "B") {
        console.log("хорошо");
    } else if (grade === "C") {
        console.log("не плохо");
    } else if (grade === "D" || grade === "F") {
        console.log("плохо");
    } else {
        console.log("не правельная оценка");
    }
}
checkGrade("B");
//4
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "понедельник";
        case 2: return "вторник";
        case 3: return "среда";
        case 4: return "четверг";
        case 5: return "пятница";
        case 6: return "субота";
        case 7: return "воскресение";
        default: return "неправельный день недели";
    }
}

console.log(getDayName(6));
//5
let num = 7;
let result = num % 2 === 0 ? "чётный" : "нечетный";

console.log(result);
//6
let age = 20;
let hasLicense = true;

if (age > 18 && hasLicense) {
    console.log("допушен к вождению");
} else {
    console.log("не допушен к вождению ");
}
//7
function hasAccess(isAdmin, isOwner) {
    if (isAdmin || isOwner) {
        return "доступ разрешен";
    }
    return "доступ запрешен";
}

console.log(hasAccess(false, true));
//8
function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasMinLength && hasUpperCase && hasNumber && hasSpecialChar) {
        return "пароль подходит";
    } else {
        return "пароль не подходит";
    }
}

console.log(isValidPassword("Pass123!"));
//9
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Лето";
        case 9:
        case 10:
        case 11:
            return "Осень";
        default:
            return "ошибочное значение";
    }
}

console.log(getSeason(4));
//10

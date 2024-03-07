//Напишіть функцію, яка приймає рядок та виводить ста-
//тистику: кількість літер, кількість цифр та кількість інших
//знаків.
//--
//function calculStatis(str) 
//{
//    let letterCount = 0;
//    let digitCount = 0;
//    let otherCount = 0;
//    for (let i = 0; i < str.length; i++) 
//    {
//        const char = str[i];
//        if (/[a-zA-Z]/.test(char)) 
//        {
//            letterCount++;
//        } 
//        else if (/[0-9]/.test(char)) 
//        {
//            digitCount++;
//        } 
//        else 
//        {
//            otherCount++;
//        }
//    }
//    console.log("Letter amount:", letterCount);
//    console.log("Digit amount:", digitCount);
//    console.log("Other symbols amount:", otherCount);
//}
//const inputString = "Hello JavaScript! 123";
//calculStatis(inputString);


//Напишіть функцію, яка приймає двозначне число і повер-
//тає його в текстовому вигляді.
//Наприклад: 35 – тридцять п’ять, 89 – вісімдесят дев’ять,
//12 – дванадцять.
//--
/*
function numToWords(number)
{
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10)
    {
        return units[number];
    }
    else if (number < 20)
    {
        return teens[number - 20];
    }
    else
    {
        const unit = number % 10;
        const ten = Math.floor(number / 10);
        return `${teens[ten]} ${units[unit]}`;
    }
}
const number = 35;
console.log(`${number} - ${numToWords(number)}`);
const anotherNum = 89;
console.log(`${anotherNum} - ${numToWords(anotherNum)}`);
const yetAnotherNum = 12;
console.log(`${yetAnotherNum} - ${numToWords(yetAnotherNum)}`);
*/


/*Напишіть функцію, яка замінює в отриманому рядку ве-
ликі літери на маленькі, маленькі – на великі, а цифри – на
знак нижнього підкреслення.
*/
//--
/*function transString(str) 
{
    let transedString = '';
    for (let i = 0; i < str.length; i++) 
    {
        const char = str[i];
        if (/[A-Z]/.test(char)) 
        {
            transedString += char.toLowerCase();
        }
        else if (/[a-z]/.test(char)) 
        {
            transedString += char.toUpperCase();
        } 
        else if (/[0-9]/.test(char))
        {
            transedString += '_';
        } 
        else
        {
            transedString += char;
        }
    }
    return transedString;
}
const inputString = "Hello World! 123";
const transedString = transString(inputString);
console.log(transedString);
*/


//Напишіть функцію, яка перетворює назви CSS-стилів з
//дефісом у назву в Сamelcase-стилі: font-size у fontSize,
//background-color у backgroundColor, text-align у
//textAlign.
//--
/*
function transCssSt(cssSt)
{
    return cssSt.replace(/-([a-z])/g, function(match, letter) 
    {
        return letter.toUpperCase();
    });
}
console.log(transCssSt("font-size"));
console.log(transCssSt("background-color"));
console.log(transCssSt("text-align"));
*/


//Напишіть функцію, яка приймає словосполучення і пере-
//творює його на абревіатуру.
//Наприклад: cascading style sheets у CSS, об’єктно-
//орієнтоване програмування в ООП.
//--
/*
function abbreviat(phrase) 
{
    const words = phrase.split(' ');
    let abbreviat = '';
    for (let i = 0; i < words.length; i++) 
    {
        abbreviat += words[i][0].toUpperCase();
    }
    return abbreviat;
}
console.log(abbreviat("cascading style sheets"));
console.log(abbreviat("object-oriented programming"));
*/


//Напишіть функцію, яка приймає будь-яку кількість рядків,
//об’єднує їх в один довгий рядок і повертає його.
//--
/*
function concatStrings(...strings) 
{
    return strings.join('');
}
const string1 = "This is the first line.\n";
const string2 = "This is the second line.\n";
const string3 = "This is the third line.\n";
const concatendString = concatStrings(string1, string2, string3);
console.log(concatendString);
*/

//Напишіть функцію – калькулятор. Функція приймає рядок
//із прикладом, визначає, яку дію необхідно виконати (+ - */),
//переводить операнди у числа, розв’язує приклад і повертає
//результат.
//--
/*
function calculator(expression) 
{
    const operands = expression.split(/\+|\-|\*|\//);
    const operator = expression.match(/\+|\-|\*|\//)[0];
    if (operands.length !== 2 || !operator) 
    {
        return "Incorrect!";
    }
    const operand1 = parseFloat(operands[0]);
    const operand2 = parseFloat(operands[1]);
    switch (operator) 
    {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) 
            {
                return "Division by zero is not possible!";
            }
            return operand1 / operand2;
        default:
            return "Unsupported operation!";
    }
}
console.log(calculator("2 + 3"));
console.log(calculator("5 * 4"));
console.log(calculator("10 / 2"));
console.log(calculator("8 - 6"));
console.log(calculator("3 + 4 * 2"));
*/


//Напишіть функцію, яка отримує url і виводить докладну
//інформацію про нього.
//Наприклад: url "https://itstep.org/ua/about", інформація
//"протокол: https, домен: itstep.org, шлях: /ua/about”.
//--
/*
function parseUrl(urlString) 
{
    const protocolEnd = urlString.indexOf('://');
    const protocol = protocolEnd !== -1 ? urlString.slice(0, protocolEnd) : 'None protocol';
    let domainStart = protocolEnd !== -1 ? protocolEnd + 3 : 0;
    let domainEnd = urlString.indexOf('/', domainStart);
    const domain = domainEnd !== -1 ? urlString.slice(domainStart, domainEnd) : urlString.slice(domainStart);
    const path = domainEnd !== -1 ? urlString.slice(domainEnd) : '/';
    return `protocol: ${protocol}, domain: ${domain}, path: ${path}`;
}
const urlString = "https://itstep.org/ua/about";
console.log(parseUrl(urlString));
*/


//Напишіть функцію, яка приймає рядок та роздільник, і
//повертає масив підрядків, розбитих за допомогою вказа-
//ного роздільника.
//Наприклад: рядок "10/08/2020", роздільник "/", результат:
//"10", "08", "2020".
//Виконуючи завдання, не використовуйте функцію split().
//--
/*
function notSplit(str, delimiter) 
{
    let substrings = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === delimiter) 
        {
            substrings.push(str.slice(start, end));
            start = i + 1;
            end = i + 1;
        } 
        else
        {
            end++;
        }
    }
    substrings.push(str.slice(start));
    return substrings;
}
const string = "10/08/2020";
const delimiter = "/";
const result = notSplit(string, delimiter);
console.log(result);
*/


//Напишіть функцію виведення тексту за заданим шаблоном.
//Функція приймає першим параметром шаблон, у тексті
//якого може використовуватися %. Після символу % вказу-
//ється індекс вхідного параметра. При виведенні замість
//%індекс необхідно вивести значення відповідного вхідно-
//го параметра.
//Наприклад: print("Today is %1 %2.%3.%4", "Monday", 10,
//8, 2020) має вивести "Today is Monday 10.8.2020".
//--
function print(template, ...values) 
{
    let result = template;
    for (let i = 0; i < values.length; i++) 
    {
        const pattern = new RegExp("%" + (i + 1), "g");
        result = result.replace(pattern, values[i]);
    }
    return result;
}
const output = print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
console.log(output);






// CharacterData() method

// let fname = "Julius Godfrey";
// let LastCharacter = fname[11]; // Y
// let firstCharacter = fname.charAt(0); // U
// console.log(firstCharacter, LastCharacter);
// // converting string to Array
// let fnameAsArray = fname.split('');
// console.log(fnameAsArray);
// concatination

// let first_name = "Julius";
// let last_name = "Godfrey";
// let fullName;
// fullName += first_name;
// fullName += last_name;
// let fullName = first_name + last_name
// full_name = `${first_name} ${last_name}`;

// let firsttext = "the brown fox";
// let secondtext = "was so quick at jumping";
// let fulltext;
// fulltext += firsttext;
// fulltext += secondtext;
// fulltext = firsttext + secondtext.slice(2); // ES5
// conCattext = `${firsttext} ${secondtext}`; //ES6
// console.log(conCattext);

// let num1 = "5";
// let num2 = "15";
// let Add = num1 + num2;
// console.log(parseInt(num1) + parseInt(num2));
// // OR
// let num3 = parseInt('5');
// let num4 = parseInt('15');
// console.log(num3 + num4);

// Math method
// var arrNum = [1,2,10,11.5,-8]
// Math.min(arrNum); 
// console.log(Math.min(...arrNum));
// Math.max(arrNum);
// console.log(Math.max(...arrNum));

// Math method
// Math.random((9)); // 0 to 8
// console.log((Math.random() * 9) + 1); // 1 to 9
// console.log(Math.floor(Math.random() * 9));

// ASSIGNMENT

let Choice = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*";
let Password = "";
let PasswordLimit = "8";
for (J = 0; J < PasswordLimit; J++){
    let randomChar = (Math.floor(Math.random()* Choice.length))
    Password += Choice[randomChar]
};
console.log(Password);





 
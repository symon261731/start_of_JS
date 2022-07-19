/*
function convert(usd) {
    let china = usd * 6.75
    return (` ${china.toFixed(2)} Chinese Yean `);
};

convert(2);
convert(10);



function negative(num) {
    return num * -1;
};

alert(negative(42));
alert(negative(9));
alert(negative(-5));
*/

/*
function greet(name, city, state) {
    if (name.lenght == 3) {
        console.log(`hello ${name[0]} ${name[1]} ${name[2]} welcome to ${city} ${state},`);
    } else if (name.lenght != 3) {
        console.log(`hello ${name[0]} ${name[1]}  welcome to ${city} ${state}`);
    }
}


greet(['simon', 'mishcenko', 'mitr'], 'surgut', 'Russia');

greet(['dmitry', 'vanov'], 'chicago', 'USA');



let friends = ['hello', 'joe', 'jonh'];

for (let friend of friends) {
    console.log(friend.length);
    if (friend.lenght != 4)
}

*/

/*

let matrix = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,],
];

alert(matrix[1][1]);
alert(matrix[2][2]);
alert(matrix[0][0]);
alert(matrix[1][0]);
*/
/*
function friend(friends) {
    let b = [];
    for (let a of friends) {
        if (a.length == 4) {
            b.push(a);
        }
    }
    return b;
}
*/

/*
function divCon(x) {
    let arrNumA = [];
    let arrNumB = [];
    let sumOfNum = 0;
    let sumOfStr = 0;
    for (let num of x) {
        if (num === Number) {
            arrNumA.push(num);
        } else if (num === String) {
            arrNumB.push(num);
        }
    }
    console.log(arrNumA);
    console.log(arrNumB);
    console.log(x);
}НЕ СРАБОТАЛО, num не отделяет цыфры от строк
*/


/*
function sum(numbers) {
    "use strict";
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    console.log(result);
}

sum([1, 5.2, 4, 0, -1]);
РАБОТАЕТ*/



/*
function divCon(x) {
    let sumOfNum = 0;
    let sumOfStr = 0;
    let resultnum = x.filter(function (item) {
        return typeof item === 'number';
    });
    console.log(resultnum);
    let resultstr = x.filter(function (item) {
        return typeof item === 'string';
    })
    console.log(resultstr);
    for (num of resultnum) {
        sumOfNum += num
    }
    console.log(sumOfNum);
    for (strnum of resultstr) {
        sumOfStr += Number(strnum);
    }
    console.log(sumOfStr);
    return sumOfNum - sumOfStr;
}
divCon([1, 5, 12, 123, '51', '312', 61, '1',]);
*/

/*
function getRandomNumber() {
    let number = Math.round(Math.random(10));
    return number;
}

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
*/

/*
function lenght(a1, a2) {
    let a3 = [];
    let a4 = [];
    console.log(a1);
    console.log(a2);
    for (let str of a1) {
        a3.push(str.length);
    }
    console.log(a3);
    a3.sort(function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });
    console.log(a3)
    let x = a3.at(-1);
    console.log(x);
    for (st of a2) {
        a4.push(st.length)
    }
    console.log(a4);
    a4.sort(function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });
    console.log(a4);
    let y = a4.at(-1);
    console.log(y);
    console.log(Math.abs(x - y));
}
*/
/*
function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return console.log(-1);
    } else {
        let a3 = [];
        let a4 = [];
        for (let str of a1) {
            a3.push(str.length);
        }
        for (let st of a2) {
            a4.push(st.length);
        }
        a3.sort(function (a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        });
        a4.sort(function (a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        });
        console.log(a3);
        console.log(a4);
        let x = a3[a3.length - 1];
        let y = a4[a4.length - 1];
        console.log(x);
        console.log(y);
        return console.log(Math.abs(x - y));
    }
}


mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]);
mxdiflg([], [`jfaklsfj`, 'jt13kpthj']);
*/

/*
function arr(array) {
    if (array == null || array.length == 1 || array.length == 0) {
        return 0;
    } else {
        array.sort(function (a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        });
        console.log(array);
        array.shift();
        array.pop();
        console.log(array);
        for (let elem of array) {
            sum += elem;
        }
        return sum;
    }
}
arr([-6, 20, -1, 10, -12]);
*/
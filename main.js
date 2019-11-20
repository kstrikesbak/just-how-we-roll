/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}



/*******************
 * YOUR CODE BELOW *
 *******************/
let newD6 = document.querySelector('#d6-roll');
newD6.src = 'images/start/d6.png';
let newD12 = document.querySelector('#d12-roll');
newD12.src = 'images/start/d12.jpeg';
let newD20 = document.querySelector('#d20-roll');
newD20.src = 'images/start/d20.jpg';
let newD6Double = document.querySelector('#double-d6-roll-1');
newD6Double.src = 'images/start/d6.png';
let newD6Double2 = document.querySelector('#double-d6-roll-2');
newD6Double2.src = 'images/start/d6.png';

function changeD6RollPic (){
    let roll = getRandomNumber(6)
    // const newD6 = document.querySelector('#d6-roll')
    newD6.src = `./images/d6/${roll}.png`
    sixes.push(roll)
    document.querySelector('#d6-rolls-mean').innerText = mean(sixes)
}
changeD6RollPic()

function changeDoubleD6RollPics (){
    let roll = getRandomNumber(6)
    let rollAgain = getRandomNumber(6)
    document.querySelector('#double-d6-roll-1').src=`./images/d6/${roll}.png`
    document.querySelector('#double-d6-roll-2').src=`./images/d6/${rollAgain}.png`
}

function changeD12RollPic (){
    let roll = getRandomNumber(12)
    document.querySelector('#d12-roll').src=`./images/numbers/${roll}.png`
}

function changeD20RollPic () {
    let roll = getRandomNumber(20)
    document.querySelector('#d20-roll').src=`./images/numbers/${roll}.png`
}


/*******************
 * EVENT LISTENERS *
 *******************/

const singleD6 = document.querySelector('#d6-roll')
singleD6.addEventListener('click',changeD6RollPic)
const doubleD6First = document.querySelector('#double-d6-roll-1')
doubleD6First.addEventListener('click',changeDoubleD6RollPics)
const doubleD6Second = document.querySelector('#double-d6-roll-2')
doubleD6Second.addEventListener('click',changeDoubleD6RollPics)
const d12 = document.querySelector('#d12-roll')
d12.addEventListener('click', changeD12RollPic)
const d20 = document.querySelector('#d20-roll')
d20.addEventListener('click', changeD20RollPic)



/****************
 * MATH SECTION *
 ****************/
function mean () {
    let sum = 0 
    for (let i = 0 ; i < sixes.length ; i++) {
        sum += sixes[i]
    }
    return sum / sixes.length
    
}

mean()
/*********
 * RESET *
 *********/

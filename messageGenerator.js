function generateMessage() {
    let message = generatedMessage();
    return message;
}

function randomFunction() {
    let number = 1;
    //console.log(number);
    number = Math.floor(Math.random() * 10);
    //console.log(number);
    return number
}

function generatedMessage() {
    let choice1 = randomFunction();
    //console.log(choice1);
    let choice2 = randomFunction();
    //console.log(choice2);
    let choice3 = randomFunction();
  let messageGeneration = `The stone is ${stoneCondition[choice1]}, the weather today will be ${predictedWeather[choice2]}, and next week it will be ${predictedWeather[choice3]}`;
  return messageGeneration; 

}



let stoneCondition = ['wet', 'dry', 'snowy', 'hot', 'missing', 'cold', 'smooth', 'frosty', 'broken', 'shrunk'];

let predictedWeather = ['dry', 'wet', 'snowy', 'hot', 'cold', 'calm', 'chilly', 'misty', 'rainy', 'foggy'];

console.log(generateMessage());

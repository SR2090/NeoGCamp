const readlineSync = require('readline-sync');
let highScore = 0;
let score = 0;
// favorite food
// favorite movie
// favorite music genre 
// favorite Chocolate
// favorite destination
const ansFood = 'PopCorn';
const ansMovie = 'StartTrek';
const ansGenre = 'Pop';
const ansSweet = 'Cadbury';
const ansDestination = 'Goa';

let Replay = 'y';


function FavValidator(fav, ans, item){
  const saveFav = ans;
  fav = fav.trim().toLowerCase();
  ans = ans.trim().toLowerCase();
  if(fav == ans){
    score++;
    console.log(`YAY!! ${saveFav} is my favorite ${item} !!!`);
    console.log(`current score: ${score}`);
    if(score > highScore){
      highScore = score;
    }
    console.log('---------------');
  }else{
    if(score == 0){
      score = 0;
    }else{
      score--;
    }
    console.log(`${fav} is not my favorite ${item.toLowerCase()} `);
    console.log( `Highscore : ${highScore} \n`
    + ' Thank you for playing');
    process.exit(1);
  }
}

do{
  let userName = readlineSync.question('May I have your name? ');
console.log('Hello there !! ' + userName+ ' .. ');
let favoriteFood = readlineSync.question('What\'s my favorite food ?')
FavValidator(favoriteFood, ansFood, `Food`);

let favoriteMovie = readlineSync.question('What\'s my favorite movie ?');

FavValidator(favoriteMovie, ansMovie, `Movie`);

let favoriteMusicGener = readlineSync.question('Which music Genre do i prefer ?');
FavValidator(favoriteMusicGener, ansGenre, `Music Genre`);

let favoriteChocolate = readlineSync.question('Can you guess my favorite chocolate ?')
FavValidator(favoriteChocolate, ansSweet, `Chocolate`);

let favoriteDestination = readlineSync.question('My dream desitination, name it if you can ?')
FavValidator(favoriteDestination, ansDestination, `Destination`);
let ReplayInput = readlineSync.question('Do you want to replay ? \n y or n' );

}while(Replay === ReplayInput.toLowerCase());


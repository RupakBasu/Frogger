// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed =1;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }

  update(dt){
    this.x += this.speed * dt;
    // updateEntities(dt); this is on the engine.js and it helps to control the enemies movement.

    // To create the loop we need to first establish what the cut off will be considered to leave the canvas.
    // in this case it will be when x is greater than 5
    this.enemyOffCanvas = this.x > 5;
    if (this.enemyOffCanvas) {
      this.x = -1;
      // -1 is where I want the enemy to respawn
    } else {
      this.x += dt;
    }
    // console.log(this.x, this.y); This was to see the coordinates of my enemies
  }

}
const enemy = new Enemy();

// enemy.update = this.x += this.speed * dt;

class EnemyOne extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 3;
    this.speed = .5;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }

}
const enemyOne = new EnemyOne();

class EnemyTwo extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 2;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }
}
const enemyTwo = new EnemyTwo();


class EnemyThree extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 1;
    this.speed = .7;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }
}
const enemyThree = new EnemyThree();

// creating the allEnemies array
const allEnemies = [];
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree);


// Now write your own player class
class Player {
  constructor(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
    this.hit = false;
    this.moving = false;

  }
  // Draw the player on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75); //75
  }
    // Restrict Player from going off the canvas
  update(){
    // NOTES: This set of code is actually defines when the player collides with the enemy.
    // the first part says  if the player and the enemy are on the same row then this code should be looked at.
    // if the first if is true then check to see if the player is within a certain amount of space. This creates an area
    // that designates that if the player is within .4
    //(you can totaly change this number to make how sensitive or how close you want the sprites to be to consider a hit)
    //all the console.logs were being used to for testing purposes. also the alert.
    for(let enemy of allEnemies){
      if (this.y === enemy.y){
        if(this.x >= enemy.x - .4 && this.x <= enemy.x +.4){
          // if the above is true we need to make the player move to the start postion which is  2,5
          this.x = 2;
          this.y= 5;
          this.hit = true;
          // console.log("HIT");
          // console.log(  'enemy' + enemy.x);
          // console.log( 'player'  + this.x);
          // alert("Hit");
        } else {
          // console.log("you good");
          this.hit = false;
        }
      }
    }

   // This is calling the modal from the HTML
   // the hideClass was created so we could remove the hide I have created for the modal
   // so it only appears when we need it after we win

   let modal = document.querySelector('.modal');
   let hideClass = document.getElementById('modal');
   //Close button on the top right of modal
   let xButton = document.querySelector('.modalCloseBtn');
   //cancel Button
   let modalCancelBtn = document.querySelector('.cancel');
   // play again button
   let playAgain = document.querySelector('.playAgain');

   xButton.addEventListener('click',function(closeButton){
     let hideClass = document.getElementById('modal');
     hideClass.classList.add('hide');
   });

   modalCancelBtn.addEventListener('click',function(cancelBtn){
     let hideClass = document.getElementById('modal');
     hideClass.classList.add('hide');
   });
   playAgain.addEventListener('click', function(playAgainReset){
     let hideClass = document.getElementById('modal');
     hideClass.classList.add('hide');
   });


   if(this.y === 0){
     hideClass.classList.remove('hide');
     // alert("You Won !")
     this.moving = false;
     //reset-
     this.x = 2;
     this.y= 5;
   }
  }

  // the handleInput methods for is as follows
  // the first if is to indicate which key is pressed the next if makes sure that the Player
  // doesnt go out of the canvas -- this.x > 0 this makes sure that the player cant go more that 0 left
  // if that is met then the player is able to move one to the left so subtracting one from the current place.
  handleInput(input){
    if(input === 'left') {
      if(this.x > 0){
        this.x = this.x - 1;
      }
    } else if(input === 'right') {
      if(this.x < 4){
        this.x = this.x + 1;
      }
    } else if(input === 'down') {
      if(this.y < 5){
        this.y = this.y + 1;
      }
    } else if(input === 'up'){
      if(this.y > 0){
        this.y = this.y - 1;
      }
    }
    // here I am trying to find out my players coordinates.
    console.log(this.x, this.y);
    this.moving = true;

  }

}

const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// https://codereview.stackexchange.com/questions/18792/keypress-function-conditional

// This class requires an update(), render() and
//update for Player class
// Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// };
// //rendering for the player
// Player.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };
// a handleInput() method.


// Now instantiate your objects. This is where we need to initiate our enemies and player
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

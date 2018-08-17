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
  enemyReset(){
    if (this.x === 4) {
      this.x = -1;
    }
  }

  update(dt){
    this.x += this.speed * dt;
    // updateEntities(dt); this is on the engine.js and it helps to control the enemies movement.
    // enemyReset();
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
  update(dt){
    this.x += this.speed * dt;
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

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// };

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now write your own player class
class Player {
  constructor(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
  }
  // Draw the player on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 80);
  }
  // Restrict Player from going off the canvas
  update(){
    this.x >= 4;
    this.x <= 0;
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
  }
  gameWon(){
    if(this.y === 1){
      alert("You Won !")
    }
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

var PLAY = 1;
var SERVE = 0;
var END = 2;
var gamestate = SERVE;
var pineapple, pg;
var splash;
var blade;
var Image, a, b, c, d, e, f, g, h, j, k, l, m;
var sound, ao1, so2, so3, so4, so5, so6, so7, so8, so9, s010, so11;
var back;
var apple, ag;
var gravity = 10;
var watermelon, wg;
var banana0, bg;
var bomb, og;
var starfruit, sg;
var gameOver;
var life = 3;
var life1, life2, life3;
var fontBold;
var score = 0;
var counter = 0;
var timeleft = 120;
var mins = 3;
var sec = 0;
var pfbanana;
var y1 = 580;
var y2 = 0;
var iw;
var iw2;
var reset,reseti;


// function convertseconds(s) {
//   var min = floor(s/60);
//   var sec = s % 60;
//   return nf(min,2) + ":" + nf(sec,2)
// }

function preload() {
  a = loadImage("21a.png");
  b = loadImage("apple2.png");
  c = loadImage("pineapple0.png");
  d = loadImage("blade0.png");
  e = loadImage("splash0.png");
  f = loadImage("watermelon0.png");
  g = loadImage("banana0.png");
  h = loadImage("bomb20.png");
  j = loadImage("starFruit0.png");
  k = loadImage("gameOver0.png");
  l = loadImage("X0.png");
  m = loadImage("fbanana0.png");
  reseti = loadImage("reset20.png");


  soundFormats("wav");
  so1 = loadSound("Throw-bomb.wav");
  so2 = loadSound("firecracker-blade-burn.wav");
  so3 = loadSound("Game-start.wav");
  so4 = loadSound("Apple.wav");
  so5 = loadSound("Banana.wav");
  so6 = loadSound("Pineapple.wav");
  so7 = loadSound("Watermelon.wav");
  so8 = loadSound("explode.wav");
  so9 = loadSound("Game-over.wav");
  so10 = loadSound("powerup.wav");
  so11 = loadSound("star.wav");
}

function setup() {
  createCanvas(1360, 580);
  gameOver = createSprite(width / 2, height / 2, 10, 10);
  gameOver.addImage(k);
  gameOver.scale = 4;
  gameOver.visible = false;

  iw = createSprite(width / 2, height / 5, 1360, 20);
  iw.visible = false;

  iw2 = createSprite(width / 2, height - 50, 1360, 20);
  iw2.visible = false;
  //   var timer = select("#timer");
  //   timer.html(convertseconds(timeleft - counter));
  //   var interval = setInterval(timeIt, 1000);

  //   function timeIt() {
  //     counter++;
  //     timer.html(convertseconds(timeleft - counter));
  //     if(counter === timeleft){
  //        clearInterval(interval);
  //       // counter = 0;

  //     }
  //   }

  reset = createSprite(width/2,height/1.4,30,30);
  reset.addImage(reseti);
  reset.scale = 1;
  reset.visible = false;

  ag = new Group();
  pg = new Group();
  wg = new Group();
  bg = new Group();
  og = new Group();
  sg = new Group();
  
  // blade.debug = true;
}

function mousePressed() {
  blade.x = mouseX;
  blade.y = mouseY;
}


function draw() {
  background(a);
  splash = createSprite(200, 200, 10, 10);
  splash.addImage(e);
  splash.visible = false;
  splash.lifetime = 10;
  blade = createSprite(width / 2, height / 2, 10, 10);
  blade.lifetime = 0;
  blade.addImage(d);
  blade.scale = 0.8;
  mousePressed();




  if (gamestate === SERVE) {
    fill("lightyellow");
    textSize(75);
    textAlign(CENTER);
    text("Press Space To Play", width / 2, height / 2);
    if(!so3.isPlaying()){
       
    so3.play();
  }
    if (keyDown("Space")) {
      gamestate = PLAY;

    }

  }

  if (life === 3) {

    life1 = createSprite(1250, 140, 100, 100);
    life1.addImage(l);
    life1.scale = 3.5;
    life1.lifetime = 5;
    life2 = createSprite(1150, 140, 100, 100);
    life2.addImage(l);
    life2.scale = 3;
    life2.lifetime = 5;
    life3 = createSprite(1050, 140, 100, 100);
    life3.addImage(l);
    life3.scale = 2.5;
    life3.lifetime = 5;
  }
  if (life === 2) {
    life1 = createSprite(1250, 140, 100, 100);
    life1.addImage(l);
    life1.scale = 3.5;
    life1.lifetime = 5;
    life2 = createSprite(1150, 140, 100, 100);
    life2.addImage(l);
    life2.scale = 3;
    life2.lifetime = 5;
  }
  if (life === 1) {
    life1 = createSprite(1250, 140, 100, 100);
    life1.addImage(l);
    life1.scale = 3.5;
    life1.lifetime = 5;

  }

  if (life === 0) {
    gamestate = END;

  }
  if (gamestate === END) {
    

    gameOver.visible = true;
    if (!so9.isPlaying()) {
        so9.play();
    }
    reset.visible = true;
    if(mousePressedOver(reset)){
       ag.destroyEach();
      ag.destroyEach();
      pg.destroyEach();
      wg.destroyEach();
      bg.destroyEach();
      og.destroyEach();
      sg.destroyEach();
      gamestate = SERVE;
      gameOver.visible = false;
      reset.visible = false;
      life = 3;
      so9.stop();
      score = 0;
    }
    blade.visible = false;
    // if (so9.isPlaying()) {
    //   so9.stop();
    // }
  }
  //   textSize(50);
  //   text(mins + ":" + sec,1100,55);

  if (gamestate === PLAY) {



    if (second() <= 0) {
      sec--;
    }


    var select_Fruit = Math.round(random(1, 7));

    if (World.frameCount % 15 == 0) {
      if (select_Fruit == 1) {
        apples();
      } else if (select_Fruit == 2) {
        pineApples();

      } else if (select_Fruit == 3) {
        watermelons();

      } else if (select_Fruit == 4) {
        bananas();

      } else if (select_Fruit == 6) {
        bombs();

      }


    }
    if (World.frameCount % 100 == 0) {
      if (select_Fruit == 7) {
        starfruits();
      }

    }

    if (blade.isTouching(ag)) {
      splash.visible = true;
      splash.x = blade.x;
      splash.y = blade.y;
      ag.destroyEach();
      so4.play();
      score = score + 100;
    }
    if (blade.isTouching(pg)) {
      splash.visible = true;
      splash.x = blade.x;
      splash.y = blade.y;
      pg.destroyEach();
      so6.play();
      score = score + 200;

    }

    if (blade.isTouching(wg)) {
      splash.visible = true;
      splash.x = blade.x;
      splash.y = blade.y;
      wg.destroyEach();
      so7.play();
      score = score + 300;

    }
    if (blade.isTouching(bg)) {
      splash.visible = true;
      splash.x = blade.x;
      splash.y = blade.y;
      bg.destroyEach();
      so5.play();
      score = score + 400;

    }
    if (blade.isTouching(og)) {
      so8.play();
      so1.stop();
      so2.stop();
      og.destroyEach();
      life = life - 1;


    }


    if (og.y == 580) {
      so2.stop();

    }
    if (blade.isTouching(sg)) {
      sg.destroyEach();
      so11.play();
      score = score + 1000;
    }
  }

  ag.bounceOff(iw);
  bg.bounceOff(iw);
  wg.bounceOff(iw);
  pg.bounceOff(iw);


  og.bounceOff(iw2);
  sg.bounceOff(iw2);

  drawSprites();
  textSize(50);
  fill("yellow");
  text(score, 120, 55);





}

function apples() {
  apple = createSprite(random(5, 1360), 580, 10, 10);
  apple.addImage(b);
  apple.lifetime = 30;
  apple.velocityY = -30;
  apple.velocityY = apple.velocityY + 0.8;
  ag.add(apple);
  apple.scale = 0.2;

  if (apple.x == y1) {
    apple.velocityX = -30;
  }
  if (apple.x == y2) {
    apple.velocityX = 30;
  }

}

function pineApples() {
  pineapple = createSprite(random(5, 1360), 580, 10, 10);
  pineapple.addImage(c);
  pineapple.lifetime = 30;
  pineapple.velocityY = -30;
  pineapple.velocityY = pineapple.velocityY + 0.8;
  pg.add(pineapple);
  pineapple.scale = 0.3;

  if (pineapple.x == y1) {
    pineapple.velocityX = -30;
  }
  if (pineapple.x == y2) {
    pineapple.velocityX = 30;
  }

}

function watermelons() {
  watermelon = createSprite(random(5, 1360), 580, 10, 10);
  watermelon.addImage(f);
  watermelon.lifetime = 30;
  watermelon.velocityY = -30;
  watermelon.velocityY = watermelon.velocityY + 0.8;
  wg.add(watermelon);
  watermelon.scale = 0.4;

  if (watermelon.x == y1) {
    watermelon.velocityX = -30;
  }
  if (watermelon.x == y2) {
    watermelon.velocityX = 30;
  }


}

function bananas() {
  banana = createSprite(random(5, 1360), 580, 10, 10);
  banana.addImage(g);
  banana.lifetime = 30;
  banana.velocityY = -30;
  banana.velocityY = banana.velocityY + 0.8;
  bg.add(banana);
  banana.scale = 0.4;

  if (banana.x == y1) {
    banana.velocityX = -30;
  }
  if (banana.x == y2) {
    banana.velocityX = 30;
  }


}

function bombs() {
  bomb = createSprite(random(5, 1360), 0, 10, 10);
  bomb.addImage(h);
  bomb.lifetime = 30;
  bomb.velocityY = 30;
  bomb.velocityY = bomb.velocityY - 0.8;
  og.add(bomb);
  bomb.scale = 0.5;

  if (bomb.x == y1) {
    bomb.velocityX = -30;
  }
  if (bomb.x == y2) {
    bomb.velocityX = 30;
  }

  if (bomb.position.y == 0 && !so2.isPlaying()) {
    so1.play();
    so2.play();
  }

}

function starfruits() {

  starfruit = createSprite(random(5, 1360), 0, 10, 10);
  starfruit.addImage(j);
  starfruit.lifetime = 30;
  starfruit.velocityY = 30;
  starfruit.velocityY = starfruit.velocityY - 0.8;
  sg.add(starfruit);
  starfruit.scale = 0.7;

  // if(starfruit.x == y1){
  //    starfruit.velocityX = -30;
  // }
  // if(starfruit.x == y2){
  //    starfruit.velocityX = 30;
  // }

  if (starfruit.y === 0) {
    so10.play();
  }
}
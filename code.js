var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0080e6d3-0d28-4b53-9093-5eb32f411a78","d82f4571-43dc-4580-8aa8-2acf0ca61276","023b49f9-860f-402b-8087-7ce0c645ef05","5c7569f6-749f-4a08-8628-0abea401712b","9ebedd08-5fd2-4b51-b041-5888a4ca5804","572a9daf-bc6e-44e3-81cc-3e30f0d40588","f4c18d1f-049e-4f10-824d-c97cb08961d1","07de2962-af67-4f3b-9363-ac6ef18025e9"],"propsByKey":{"0080e6d3-0d28-4b53-9093-5eb32f411a78":{"name":"game1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"nK1STJ_vnw4kvFAbdZWNSXmAg_qTtNAe","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/0080e6d3-0d28-4b53-9093-5eb32f411a78.png"},"d82f4571-43dc-4580-8aa8-2acf0ca61276":{"name":"gole1","sourceUrl":null,"frameSize":{"x":50,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"MvoZGiXPL12f7xdbh7EXRpvf4Xb4Squv","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":250},"rootRelativePath":"assets/d82f4571-43dc-4580-8aa8-2acf0ca61276.png"},"023b49f9-860f-402b-8087-7ce0c645ef05":{"name":"gole2","sourceUrl":null,"frameSize":{"x":50,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"uC.CE_vdYxqexWjMBRnmikdT7EnXln3X","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":250},"rootRelativePath":"assets/023b49f9-860f-402b-8087-7ce0c645ef05.png"},"5c7569f6-749f-4a08-8628-0abea401712b":{"name":"player","sourceUrl":null,"frameSize":{"x":50,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"pYHCWKMWWBW578s13Q7g2iOo0yBxb4.A","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":60},"rootRelativePath":"assets/5c7569f6-749f-4a08-8628-0abea401712b.png"},"9ebedd08-5fd2-4b51-b041-5888a4ca5804":{"name":"robot","sourceUrl":null,"frameSize":{"x":50,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":".VS7jT2fbtggGMVJ9ms8nq4XObnKZL3_","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":60},"rootRelativePath":"assets/9ebedd08-5fd2-4b51-b041-5888a4ca5804.png"},"572a9daf-bc6e-44e3-81cc-3e30f0d40588":{"name":"ball","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"M5Bb0hid9tFpeTPRC6kbI9lz_VHjtjTt","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/572a9daf-bc6e-44e3-81cc-3e30f0d40588.png"},"f4c18d1f-049e-4f10-824d-c97cb08961d1":{"name":"11","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"szxeexvwxoT6CpMXJpgW8cmCwN.cg9_w","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f4c18d1f-049e-4f10-824d-c97cb08961d1.png"},"07de2962-af67-4f3b-9363-ac6ef18025e9":{"name":"22","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tk0EqEadfooV8v8MttJWjhciGZX85HAU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/07de2962-af67-4f3b-9363-ac6ef18025e9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bord22=createSprite(200,200,200,100);
bord22.shapeColor="black";

var back1=createSprite(200,200,400,400);
back1.shapeColor="black";
var gole1=createSprite(3,200,50,250);
gole1.shapeColor="black";
var gole2=createSprite(398,200,50,250);
gole2.shapeColor="black";
var player=createSprite(321,200,50,60);
player.shapeColor="black";
var computer=createSprite(78,200,50,60);
computer.shapeColor="black";
var ball=createSprite(200,200,30,30);
ball.shapeColor="black";
var scorecomputer=0;
var scoreplayer=0;
var gameState ="serve";
var bord=createSprite(800,200,400,400);





function draw() {
  background("white");
  textSize(15);
  stroke("red");
  text("Score computer :"+scorecomputer,140,17);
  textSize(15);
  stroke("red");
  text("score player :"+scoreplayer,140,33);
  
   
 
  if(gameState == "serve"){
 textSize(25);
 text("Welcome! Press Enter to start.",30,200);
  
 if(keyDown("ENTER") || keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState="play";
  }
  }
  
if (keyDown(UP_ARROW)) {
    player.y=player.y-10;
  }
  
if (keyDown(DOWN_ARROW)){
  player.y=player.y+10;
}
  
  if(gameState == "play"){
  
  if (ball.isTouching(gole1)) {
  scoreplayer=scoreplayer+1;
 
   
  }
  if(ball.isTouching(gole2)){
  scorecomputer=scorecomputer+1;
  }
  if (scoreplayer==30) {
  bord.y=bord.y=200;
  bord.x=bord.x=200;
  bord.setAnimation("22");
  
  gameState="end" ; 
  }
  if (scorecomputer==100) {
  bord.y=bord.y=200;
  bord.x=bord.x=200;
  bord.setAnimation("11");
  playSound("assets/category_music/8bit_game_over_2.mp3", false);
  gameState="end" ; 
  }
  
  
  }
  
  if(gameState == "end"){
    ball.velocityY=0;
    ball.velocityX=0;
  }

  
  {
    
  }
  
  back1.setAnimation("game1");
  gole1.setAnimation("gole1");
  gole2.setAnimation("gole2");
  player.setAnimation("player");
  computer.setAnimation("robot");
  ball.setAnimation("ball");
  
  createEdgeSprites();
  ball.bounceOff(edges);
  player.bounce(edges);
  computer.bounce(edges);
  ball.bounceOff(player);
  ball.bounceOff(computer);
  
  computer.y=ball.y;
  
  if (ball.isTouching(gole1) || ball.isTouching(gole2)) {
  playSound("assets/category_achievements/vibrant_game_cute_positive_notification_1.mp3", false);
}                                                                                                                                                                                                
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

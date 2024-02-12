const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height =600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHeight =523;
const stateSelect = document.getElementById('pState');
stateSelect.addEventListener('change',function(e){
    console.log(stateSelect.value);
    playerState=stateSelect.value;
})
playerState = 'idle';
// let frameX =0 ,
// frameY =0,
let gameFrame=0;
const staggerFrames = 5; // speed of animation
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name: 'land',
        frames: 7,
    },
    {
        name: 'run',
        frames : 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames :7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name :'dead',
        frames: 12,
    },
    {
        name: 'hit',
        frames: 4,
    }
];
animationStates.forEach((state, index)=>{
    let frames = {
        loc:[],
    }
    for(let j =0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX , y:positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);
function animate(){
    ctx.clearRect(0 , 0 , CANVAS_WIDTH ,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX =spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth,spriteHeight,0 , 0 , spriteWidth ,spriteHeight);// ctx.drawImage(image , sx ,sy , sw,sh ,dx ,dy ,dw ,dh); ie(src-image,source x pos, source y pos, source width ,source height, destination x pos ,destination y pos, destination width , destination hegiht)
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();

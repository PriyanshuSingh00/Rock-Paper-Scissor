let userScore=0
let compScore=0
let compLife=3
let userLife=3
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const lifeBoard_div=document.querySelector('.lifeboard');
const userLife_div=document.querySelector('.user-life');
const compLife_div=document.querySelector('.robot-life');
const scoreBoard_div=document.getElementById('scoreboard');
const explaination_div=document.getElementById('explaination');
const result_div=document.querySelector('#result');
const rock_div=document.getElementById('Rock');
const paper_div=document.getElementById('Paper');
const scissor_div=document.getElementById('Scissor');
const lizard_div=document.getElementById('Lizard');
const spock_div=document.getElementById('Spock');
const user="user".fontsize(3).sub();
const comp="comp".fontsize(3).sub();

rock_div.addEventListener('click',()=>{
	game(0);
});
paper_div.addEventListener('click',()=>{
	game(1);
});
scissor_div.addEventListener('click',()=>{
	game(2);
});
lizard_div.addEventListener('click',()=>{
	game(3);
})
spock_div.addEventListener('click',()=>{
	game(4);
})

function game(userChoice){
	const a=['Rock','Paper','Scissor','Lizard','Spock'];
	const compChoice=Math.floor(Math.random()*5);
	switch(a[userChoice]+a[compChoice]){
		case"RockScissor":
			win(a[userChoice],a[compChoice],' crushes ');
			break;
		case"RockLizard":
			win(a[userChoice],a[compChoice],' crushes ');
			break;
		case"PaperRock":
			win(a[userChoice],a[compChoice],' covers ');
			break;
		case"PaperSpock":
			win(a[userChoice],a[compChoice],' disproves ');
			break;
		case"ScissorPaper":
			win(a[userChoice],a[compChoice],' cuts ');
			break;
		case"ScissorLizard":
			win(a[userChoice],a[compChoice],' decapitates ');
			break;
		case"SpockScissors":
			win(a[userChoice],a[compChoice],' smashes ');
			break;
		case"SpockRock":
			win(a[userChoice],a[compChoice],' vapourises ');
			break;
		case"LizardPaper":
			win(a[userChoice],a[compChoice],' eats ');
			break;
		case"LizardSpock":
			win(a[userChoice],a[compChoice],' poisons ');
			break;
		case"ScissorRock":
			loose(a[userChoice],a[compChoice],' crushes ');
			break;
		case"LizardRock":
			loose(a[userChoice],a[compChoice],' crushes ');
			break;
		case"RockPaper":
			loose(a[userChoice],a[compChoice],' covers ');
			break;
		case"SpockPaper":
			loose(a[userChoice],a[compChoice],' disproves ');
			break;
		case"PaperScissor":
			loose(a[userChoice],a[compChoice],' cuts ');
			break;
		case"PaperScissor":
			loose(a[userChoice],a[compChoice],' decapitates ');
			break;
		case"ScissorsSpock":
			loose(a[userChoice],a[compChoice],' smashes ');
			break;
		case"RockSpock":
			loose(a[userChoice],a[compChoice],' vapourises ');
			break;
		case"PaperLizard":
			loose(a[userChoice],a[compChoice],' eats ');
			break;
		case"SpockLizard":
			loose(a[userChoice],a[compChoice],' poisons ');
			break;
		default:
			draw();
	}
}
function win(a,c,b){
	userScore++;
	userScore_span.innerHTML=userScore;
	explaination_div.innerHTML=(`${a}${user} ${b} ${c}${comp}`);
	explaination_div.style=('color:green;');
	heart(userScore,1);
	console.log("Win");
}
function loose(c,a,b){
	compScore++;
	compScore_span.innerHTML=compScore;
	explaination_div.innerHTML=(`${a}${comp} ${b} ${c}${user}`);
	explaination_div.style=('color:red;');
	heart(compScore,0);
	console.log("Loose");
}
function draw(){
	explaination_div.innerHTML=(`<h1>DRAW</h1>`);
	explaination_div.style=('color:grey;');
}
function heart(counter,b){
	if(b==1){
		if(counter<3){
			const heart=compLife_div.querySelector(`#h${counter}`);
			heart.style='color:black';
		}
		else{
			userScore=0;compScore=0;
			userScore_span.innerHTML=0;compScore_span.innerHTML=0;
			const heart=lifeBoard_div.querySelectorAll('.heart');
			for(let i=0;i<heart.length;i++){
				heart[i].style='color:red;';
			}
			result_div.innerHTML='You got a pint of luck!';
			result_div.style='color:green; display:block;';
			setTimeout(()=>{
				result_div.style='display:none;';
			},1000)
		}
	}
	else{
		if(counter<3){
			const heart=userLife_div.querySelector(`#h${counter}`);
			heart.style='color:black';
		}
		else{
			userScore=0;compScore=0;
			userScore_span.innerHTML=0;compScore_span.innerHTML=0;
			const heart=lifeBoard_div.querySelectorAll('.heart');
			for(let i=0;i<heart.length;i++){
				heart[i].style='color:red;';
			}
			result_div.innerHTML='Show me What you got Son!';
			result_div.style='color:red; display:block;';
			setTimeout(()=>{
				result_div.style='display:none;';
			},1000)
		}
	}
}
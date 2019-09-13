var AI_f = document.getElementById('AI_face');
var AI_e = document.getElementById('AI_eye');
var Say = document.getElementById('Say');
var SayT = document.getElementById('SayT');
var SAIt = document.getElementById('SAIt');

setTimeout(animIdle,randomInteger(2000, 10000));
AI_f.onclick = blinkClick;

Say.onclick = function() {
	/*if (SayT.value == 'Привет') {
		SAIt.value = 'Приветствую';
	}
	else {
		SAIt.value = '???';
	}*/
}


function blinkRes() {
	active = true;
	AI_f.style.height = '5px';
	AI_f.style.top = '50%';
	AI_e.style.height = '5px';
	setTimeout(resetFace,150);
	setTimeout(resetEye,150);
	//setTimeout(blinkRes,randomInteger(1000, 5000));
	setTimeout(animIdle,randomInteger(3000, 10000));
}

function blinkClick() {
	AI_f.style.height = '5px';
	AI_f.style.top = '50%';
	AI_e.style.height = '5px';
	setTimeout(resetFace,150);
	setTimeout(resetEye,150);
}

function blink() {
	AI_f.style.height = '5px';
	AI_f.style.top = '50%';
	AI_e.style.height = '5px';
	setTimeout(blinkClick,randomInteger(1000, 5000));
	//setTimeout(animIdle,randomInteger(1500, 5000));
}

function animIdle() {
	var i = randomInteger(1,5);
	if (i == 1) {
		blink();
		setTimeout(animIdle1,150);
	}
	else if (i == 2) {
		blink();
		setTimeout(animIdle2,150);
	}
	else if (i == 3) {
		blink();
		setTimeout(animIdle3,150);
	} 
	else if (i == 4) {
		blink();
		setTimeout(animIdle4,150);
	}
	else if (i == 5) setTimeout(animIdle5,150);
}

function animIdle1() {
	AI_f.style.height = '250px';
	AI_f.style.width = '250px';
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	
	AI_f.style.background = 'radial-gradient(at 0% 0%, #55ddff, #383838)';
	
	AI_f.style.top = '0%';
	AI_f.style.marginLeft = '0';
	AI_e.style.top = '10%';
	AI_e.style.marginLeft = '10%';
	setTimeout(blinkRes,600);
}

function animIdle2() {
	AI_f.style.height = '250px';
	AI_f.style.width = '250px';
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	
	AI_f.style.background = 'radial-gradient(at 100% 0%, #55ddff, #383838)';
	
	AI_f.style.top = '0%';
	AI_f.style.marginRight = '0';
	//AI_f.style.marginBottom = '0';
	
	AI_e.style.top = '10%';
	AI_e.style.marginRight = '10%';
	setTimeout(blinkRes,600);
}

function animIdle3() {
	AI_f.style.height = '250px';
	AI_f.style.width = '250px';
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	
	AI_f.style.background = 'radial-gradient(at 70% 50%, #55ddff, #383838)';
	
	AI_f.style.top = '30%';
	AI_f.style.marginRight = '0';
	//AI_f.style.marginBottom = '0';
	
	AI_e.style.bottom = '10%';
	AI_e.style.marginRight = '10%';
	setTimeout(blinkRes,600);
}

function animIdle4() {
	AI_f.style.height = '250px';
	AI_f.style.width = '250px';
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	
	AI_f.style.background = 'radial-gradient(at 30% 50%, #55ddff, #383838)';
	
	AI_f.style.top = '30%';
	AI_f.style.marginLeft = '0';
	//AI_f.style.marginBottom = '0';
	
	AI_e.style.bottom = '10%';
	AI_e.style.marginLeft = '10%';
	setTimeout(blinkRes,600);
}

function animIdle5() {
	AI_f.style.height = '100px';
	AI_f.style.width = '250px';
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	
	AI_f.style.top = '35%';
	AI_e.style.top = '0';
	
	setTimeout(blinkRes,600);
}

function resetFace() {
	AI_f.style.height = '250px';
	AI_f.style.width = '250px';
	AI_f.style.top = '15%';
	AI_f.style.marginLeft = 'auto';
	AI_f.style.marginRight = 'auto';
	AI_f.style.background = 'radial-gradient(#55ddff, #383838)';
	//AI_f.style.backgroundColor = 'darkcyan';
}
function resetEye() {
	AI_e.style.height = '100px';
	AI_e.style.width = '100px';
	AI_e.style.top = '30%';
	AI_e.style.marginLeft = 'auto';
	AI_e.style.marginRight = 'auto';
	//AI_e.style.backgroundColor = '#38FFFB';
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
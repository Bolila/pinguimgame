// André Bolila, 76039, PGIAO

       var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo, casteloUm, casteloDois, casteloTres, casteloQuatro, casteloCinco, casteloSeis, casteloSete, casteloOito;

function init(){
	YPos = -500;
	XPos = -500;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	casteloUm = false;//criei variáveis para cada estabelecimento de modo ao jogador conseguir ganhar apenas 1 ponto por cada estabelecimento
	casteloDois = false;
	casteloTres = false;
	casteloQuatro = false;
	casteloCinco = false;
	casteloSeis = false;
	casteloSete = false;
	casteloOito = false;
}
function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)) {
		toMove.style.background = "url('roma.jpg')"};
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
	
	aumentarPontos();
	gameOver();
}
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

}
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
}
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
}
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
}

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
}
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
}
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
}
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
}
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
}
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
	if (e.keyCode===32) stop();//adicionado a tecla espaço, para para a personagem.
}	
function aumentarPontos(){// Função para aumentar os pontos.
    pontos = parseInt(document.getElementById("score").innerHTML);//Associação de pontos ao id do score, no html.
	
            if((XPos <= -563) && (XPos >= -568) && (YPos <= -556) && (YPos >= -563) && !casteloUm){
                     pontos++;//sempre que esta condição acontece, pontos incrementa por um
					 document.getElementById('castelo').play();//passa um sounsbyte para o utilizador ter confirmação que destruiu o estabelecimento.
					 casteloUm = true;//A variável passa a ser true para a condição não se voltar a repetir.
            }
			if((XPos <= -370) && (XPos >= -382) && (YPos <= -600) && (YPos >= -611) && !casteloDois){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloDois = true;
			}
			if((XPos <= -128) && (XPos >= -140) && (YPos <= -474) && (YPos >= -484) && !casteloTres){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloTres = true;
			}
			if((XPos <= -302) && (XPos >= -312) && (YPos <= -322) && (YPos >= -333) && !casteloQuatro){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloQuatro = true;
			}
			if((XPos <= -216) && (XPos >= -229) && (YPos <= -222) && (YPos >= -231) && !casteloCinco){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloCinco = true;
			}
			if((XPos <= -17) && (XPos >= -27) && (YPos <= -180) && (YPos >= -190) && !casteloSeis){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloSeis = true;
			}
			if((XPos <= -405) && (XPos >= -415) && (YPos <= -19) && (YPos >= -29) && !casteloSete){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloSete = true;
			}
			if((XPos <= -545) && (XPos >= -555) && (YPos <= -205) && (YPos >= -215) && !casteloOito){
                     pontos++;
					 document.getElementById('castelo').play();
					 casteloOito = true;
			}
		  document.getElementById("score").innerHTML=pontos;//guardar a variável pontos.
		  gameWon();
}
function gameOver(){//Função para mostrar ecrã de Game Over.
	if((XPos <= -547) && (XPos >= -622) && (YPos <= -427) && (YPos >= -470)){
		document.getElementById('over').
		play();//Se o jogador for para muito perto do soldado, esta finção inicia o soundbyte de um tiro.
		stop();//para a personagem
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";//coloca um novo fundo por cima do jogo
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';//mostra o texto indicando que perdeu o jogo, texto este que está escondido
	}
	if((XPos <= -179) && (XPos >= -240) && (YPos <= -494) && (YPos >= -547)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= 23) && (XPos >= -41) && (YPos <= -340) && (YPos >= -395)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= -67) && (XPos >= -136) && (YPos <= -155) && (YPos >= -211)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= 51) && (XPos >= -17) && (YPos <= -14) && (YPos >= -67)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= -575) && (XPos >= -646) && (YPos <= 35) && (YPos >= -23)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= -678) && (XPos >= -746) && (YPos <= -144) && (YPos >= -202)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
	if((XPos <= -725) && (XPos >= -802) && (YPos <= -300) && (YPos >= -362)){
		document.getElementById('over').play();
		stop();
		toMove.style.background = "url('lost.jpg')#424242 no-repeat";
		document.getElementsByClassName("txtOver")[0].style.display = 'inline';
	}
}
function gameWon(){//Função para mostrar o ecrã de jogo ganho.
	if(pontos == 8){//quando o utilizador chega a 8 pontos, ganha o jogo
		document.getElementById('vict').play();//soundbyte da musica da vitoria
		stop();//pára a personagem
		toMove.style.background = "url('win.jpg')#424242 no-repeat";//novo fundo de jogo
		document.getElementsByClassName("txtWin")[0].style.display = 'inline';//mostrar texto escondido
	}
}
	
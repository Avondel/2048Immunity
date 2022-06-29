var score;
var playGame=true;
var img_src=[];
var boardFull = 0;
var move = 1;
document.addEventListener("keydown",play2048);

function init(){
	score = 0;
	playGame = true;

	img_src[0] = "img/skin1.png";
	img_src[1] = "img/mucus1.png";
	img_src[2] = "img/mast1.png";
	img_src[3] = "img/neutrophil1.png";
	img_src[4] = "img/macrophage1.png";
	img_src[5] = "img/NaturalKiller1.png";
	img_src[6] = "img/bCell1.png";
	img_src[7] = "img/HelperTCell1.png";
	img_src[8] = "img/KillerTCell1.png";
	img_src[9] = "img/MemoryCell1.png";
	img_src[10] = "img/Immunity1.png";

	createImage();
	createImage();
	
}
function play2048(e){
	var move=1;
	if(playGame){
		if(e.key =="ArrowLeft")
			arrowLeft();
		else if(e.key =="ArrowRight")
			arrowRight();
		else if(e.key == "ArrowUp")
			arrowUp();
		else if(e.key == "ArrowDown")
			arrowDown();
		
		isEndGame(playGame);
		/*createImage();
		boardFull = isBoardFull();
		if(boardFull){
			move = gotMove();
			if(!move){
				playGame = false;
				alert("game over");
			}
		}*/
		
	}	
}

function isEndGame(playGame){
			createImage();
		boardFull = isBoardFull();
		if(boardFull){
			move = gotMove();
			if(!move){
				playGame = false;
				alert("game over");
			}
		}
	
}

function arrowLeft(){
	for(var row=1; row<=4; row++){
		for(var col=1; col<=4; col++){
			if(document.getElementById('c'+col+'r'+row).firstChild){
				currCell = document.getElementById('c'+col+'r'+row);
				currChild = document.getElementById('c'+col+'r'+row).firstChild;
				destCell=0;
				secondCell = 0;
				moveCurr=0;
				combo=0;
				//is it a combo?
				for(var animStart=col+1; animStart<=4; animStart++){
					if(document.getElementById('c'+animStart+'r'+row).firstChild){
						secondCell = document.getElementById('c'+animStart+'r'+row);
						if(secondCell.firstChild.dataset.index == currChild.dataset.index){
							combo=1;
						}
						break;
					}
				}	
				//Move currChild?
				for(var animEnd=1; animEnd<col; animEnd++){
					if(!document.getElementById('c'+animEnd+'r'+row).firstChild){
						destCell=document.getElementById('c'+animEnd+'r'+row);
						moveCurr=1;
						break;
					}
				}
				
			moveImage(combo, moveCurr, currCell, destCell, secondCell);	
		}
		
		}

	}				
}

function arrowRight(){
	for(var row = 4; row>=1; row--){
		for(var col=4; col>=1; col--){
			if(document.getElementById('c'+col+'r'+row).firstChild){
				currCell = document.getElementById('c'+col+'r'+row);
				currChild = document.getElementById('c'+col+'r'+row).firstChild;
				moveCurr=0;
				secondCell=0;
				destCell=0;
				combo=0;
				//is it a combo?
				for(var animStart=col-1; animStart>=1; animStart--){
					if(document.getElementById('c'+animStart+'r'+row).firstChild){
						secondChild=document.getElementById('c'+animStart+'r'+row).firstChild;
						if(secondChild.dataset.index == currChild.dataset.index){
							secondCell = document.getElementById('c'+animStart+'r'+row);
							combo=1;
						}
						break;
					}
				}	
				//Move currChild?
				for(var animEnd=4; animEnd>col; animEnd--){
					if(!document.getElementById('c'+animEnd+'r'+row).firstChild){
						destCell=document.getElementById('c'+animEnd+'r'+row);
						moveCurr=1;
						break;
					}
				}
				moveImage(combo, moveCurr, currCell, destCell, secondCell);	
			}
		}
	}				
}

function arrowUp(){
	for(var col = 1; col<=4; col++){
		for(var row=1; row<=4; row++){
			if(document.getElementById('c'+col+'r'+row).firstChild){
				currCell = document.getElementById('c'+col+'r'+row);
				currChild = document.getElementById('c'+col+'r'+row).firstChild;
				moveCurr=0;
				secondCell=0;
				destCell=0;
				combo=0;

				//is it a combo?
				for(var animStart=row+1; animStart<=4; animStart++){
					if(document.getElementById('c'+col+'r'+animStart).firstChild){
						secondChild=document.getElementById('c'+col+'r'+animStart).firstChild;
						if(secondChild.dataset.index == currChild.dataset.index){
							secondCell = document.getElementById('c'+col+'r'+animStart);
							combo=1;
						}
						break;
					}
				}

				//Move currChild?
				for(var animEnd=1; animEnd<row; animEnd++){
					if(!document.getElementById('c'+col+'r'+animEnd).firstChild){
						destCell=document.getElementById('c'+col+'r'+animEnd);
						moveCurr=1;
						break;
					}
				}
				moveImage(combo, moveCurr, currCell, destCell, secondCell);	
			}
		}
	}				
}

function arrowDown(){
	for(var col = 1; col<=4; col++){
		for(var row=4; row>=1; row--){
			if(document.getElementById('c'+col+'r'+row).firstChild){
				currCell = document.getElementById('c'+col+'r'+row);
				currChild = document.getElementById('c'+col+'r'+row).firstChild;
				moveCurr=0;
				secondCell=0;
				destCell=0;
				combo=0;
				//is it a combo?
				for(var animStart=row-1; animStart>=1; animStart--){
					if(document.getElementById('c'+col+'r'+animStart).firstChild){
						secondChild=document.getElementById('c'+col+'r'+animStart).firstChild;
						if(secondChild.dataset.index == currChild.dataset.index){
							secondCell = document.getElementById('c'+col+'r'+animStart);
							combo=1;
						}
						break;
					}
				}	
				//Move currChild?
				for(var animEnd=4; animEnd>row; animEnd--){
					if(!document.getElementById('c'+col+'r'+animEnd).firstChild){
						destCell=document.getElementById('c'+col+'r'+animEnd);
						moveCurr=1;
						break;
					}
				}
				moveImage(combo, moveCurr, currCell, destCell, secondCell);	
			}
		}
	}				
}

function createImage(){
	var col = Math.floor(Math.random() * 4 + 1);
	var row = Math.floor(Math.random() * 4 + 1);
	el = document.getElementById('c'+col+'r'+row);
	while(el.firstChild != null){
		var col = Math.floor(Math.random() * 4 + 1);
		var row = Math.floor(Math.random() * 4 + 1);
		el = document.getElementById('c'+col+'r'+row);
	}
	var img = document.createElement("img");

	if(Math.random()<.85){
		img.src = img_src[0];
		img.dataset.index = 0;
	}
	else{
		img.src = img_src[1];
		img.dataset.index = 1;
	}
	el.appendChild(img);

}

function moveImage(combo, moveCurr, currCell, destCell, secondCell){
	if(combo==0 && moveCurr==1){
		//to do make animation
		currChild = currCell.firstChild;
		currCell.removeChild(currChild);
		destCell.appendChild(currChild);
	}
	else if(combo){
		//to do animate secondChild
		//alert("In combo");
		currChild = currCell.firstChild;
		secondChild = secondCell.firstChild;
		secondCell.removeChild(secondChild);
		currChild.dataset.index++;
		currChild.src = img_src[currChild.dataset.index];
		if(moveCurr){
			currCell.removeChild(currChild);
			destCell.appendChild(currChild);
		}
		//to do animate appearance
	}
	
}

function isBoardFull(){
	boardFull=1;
	for(row=1; row<=4; row++){
		for(col=1; col<=4; col++){
			if(document.getElementById('c'+col+'r'+row).firstChild==null){
				boardFull = 0;
				break;
			}
		}
	}
	return boardFull;
}

function gotMove(){
	for(var col = 1; col<=4; col++){
		for(var row = 1; row<=3; row++){
			currChild = document.getElementById('c'+col+'r'+row).firstChild;
			row1 = row + 1;
			nextChild = document.getElementById('c'+col+'r'+row1).firstChild;
			if(currChild.dataset.index == nextChild.dataset.index){
				alert("col: Got move");
				return 1;
			}
		}
	}
	
	for(var row = 1; row<=4; row++){
		for(var col = 1; col<=3; col++){
			currChild = document.getElementById('c'+col+'r'+row).firstChild;
			col1 = col + 1;
			nextChild = document.getElementById('c'+col1+'r'+row).firstChild;
			if(currChild.dataset.index == nextChild.dataset.index){
				alert("row: got move");
				return 1;
			}
		}
	}
	return 0;
	
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}


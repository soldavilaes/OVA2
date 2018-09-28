//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
document.addEventListener("touchstart", touchHandler, true);document.addEventListener("touchmove", touchHandler, true);document.addEventListener("touchend", touchHandler, true);document.addEventListener("touchcancel", touchHandler, true);
paintGame();cp=cp_pal;
}
function touchHandler(event) {var touch = event.changedTouches[0];var simulatedEvent = document.createEvent("MouseEvent");simulatedEvent.initMouseEvent({touchstart: "mousedown",touchmove: "mousemove",touchend: "mouseup"}[event.type], true, true, window, 1,
touch.screenX, touch.screenY,touch.clientX, touch.clientY, false,false, false, false, 0, null);touch.target.dispatchEvent(simulatedEvent);event.preventDefault();};
function randomSort(){
var let=[];for (i=0; i<cp_pal.length;i++){for (z=0; z<cp_num[i];z++){let.push(ConstruPalWords(cp_pal[i]).charAt(z));}}let=shuffle(let);letters=let;
for (i=0; i<numle;i++){var newL=Math.floor(Math.random()*fillLetter.length-1);let.push(fillLetter.charAt(newL));};
for (i = 0; i < cp_pal.length; i++) {jobindex[i]=i;} jobindex=shuffle(jobindex);
}
function paintHelp(){if (cp_mp3[jobindex[indexGame-1]].trim()!="" || cp_ogg[jobindex[indexGame-1]].trim()!=""){
$("#help_div").html("<img id='playSound' class='imaLeft' src='palabras_resources/media/' alt='Sound' align='left'>"+ "<p>" +ConstruPalWords(cp_que[jobindex[indexGame-1]])+ "</p>");
$("#playSound").bind("touchstart click",function (e) {au="audio"+String(jobindex[indexGame-1]+1);document.getElementById(au).play();});}
else {
$("#help_div").html("<p>" +ConstruPalWords(cp_que[jobindex[indexGame - 1]])+ "</p>");}
}
function paintGame(){$("#words_div").css("visibility","hidden");lettersId=[];lettersX=[];lettersY=[];lettersAns=[];answers=[];var posY=0;
var posX=0; for (i=0; i<letters.length; i++) {var iDiv=document.createElement("div");iDiv.id="b_"+String(i);iDiv.className="bg";iDiv.append(letters[i]);$("#ardoraAct").append(iDiv);$(iDiv).css("position", "absolute");$(iDiv).css("left",posX);$(iDiv).css("margin-top",posY);lettersId.push(i);lettersX.push(posX);lettersY.push(posY);posX=posX+$(iDiv).outerWidth()+2;
if (posX>550-$(iDiv).outerWidth()-2){posX=0;posY=posY+$(iDiv).outerHeight()+2;}$(iDiv).on("touchstart click", function() {if ($(this).hasClass("bg")) {$(this).addClass("bg_sol");
$(this).animate({marginTop: String(250-$(this).outerHeight()-2)+"px",left: String(posAns)+"px"}, "slow");posAns=posAns+$(this).outerWidth()+2;$(this).removeClass("bg");answers.push(parseInt($(this).attr("id").substring(2,9)));
} else {$(this).addClass("bg");var index=0;for (i=0; i<lettersId.length;i++){if (lettersId[i]==parseInt($(this).attr("id").substring(2,9))){index=i}}$(this).animate({marginTop: String(lettersY[index])+"px",left: String(lettersX[index])+"px"}, "slow");
var idel=0;for (i=0; i<answers.length;i++){if (answers[i]==parseInt($(this).attr("id").substring(2,9))){idel=i}}answers.splice(idel,1);var posA=0;
for (i=0; i<answers.length;i++){$("#b_" + String(answers[i])).css("left",String(posA)+"px");posA=posA+$("#b_"+String(answers[i])).outerWidth()+2;}posAns=posA;$(this).removeClass("bg_sol");}});}
$(".bg").css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorSele+ ")");
$(".bg").hover(function(){$(this).css("background","radial-gradient(ellipse at center, " +colorBack+ ", " +colorButton+")");}, function(){$(this).css("background","radial-gradient(ellipse at center, " +colorBack+ ", " +colorSele+ ")");});
var iDiv = document.createElement("div");iDiv.id="words";iDiv.append("");$("#words_div").append(iDiv);
paintHelp();
}
function isCorrect(){
var ansWord="";for (i=0;i<answers.length;i++){ansWord=ansWord+$("#b_"+String(answers[i])).text();}var correct=false;
if (ConstruPalWords(cp_pal[jobindex[indexGame-1]]).trim().substring(0, cp_num[jobindex[indexGame-1]])==ansWord){
correct=true;
$("#words_div").css("visibility","visible");if ($("#words").text().trim().length>0){$("#words").text(ansWord+" - "+$("#words").text());}else{$("#words").text(ansWord);}
}
if (correct) {score=score+scoreInc;timeAct = timeAct + timeBon;successes++;indexGame++;if (indexGame > cp_pal.length) {showMessage("Ok");} else {for (i=0;i<answers.length;i++){$("#b_" + String(answers[i])).remove();}posAns=0;answers=[];if (au.length>0){document.getElementById(au).pause();}au="";paintHelp();}
} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ConstruPalWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function shuffle(array){var i=array.length,j,temp;if (i==0) return array;while (--i) {j=Math.floor( Math.random()*(i+1));temp=array[i];array[i]=array[j];array[j]=temp;}return array;}

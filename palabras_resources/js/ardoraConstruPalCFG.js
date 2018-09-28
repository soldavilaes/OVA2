//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF00FF"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=2; messageOk="Bien hecho!"; messageTime=""; messageError="Vuelve a intentarlo."; messageErrorG="Vuelve a intentarlo."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["SE9KQQ","UkFJWg","Tk9ETw","QVJCT0wgR0VORVJJQ08","QVJCT0wgQklOQVJJTw","U1VCQVJCT0w"];var cp_ima=["","","","","",""];var cp_mp3=["","","","","",""];var cp_ogg=["","","","","",""];var cp_que=["Tm8gdGllbmUgbm9kb3MgaGlqb3MgKHN1Y2Vzb3JlcykuIA","Tm8gdGllbmUgbm9kb3MgcHJlZGVjZXNvcmVzLg","UHVlZGUgc2VyIHVuYSBob2phIG8gbm9kbyByYe16Lg","UHVlZGVuIHRlbmVyIHVuIG76bWVybyB2YXJpYWJsZSBkZSBoaWpvcy4","RXN0cnVjdHVyYSBxdWUgY29udGllbmUgdW4gZGF0bywgdW4gaGlqbyBpenF1aWVyZG8geSB1biBoaWpvIGRlcmVjaG8u","Q29uanVudG8gZGUgdG9kb3MgbG9zIHByZWRlY2Vzb3JlcyBkZSB1biBub2RvLg"];var cp_num=[4,4,4,14,13,8];
var wordsGame="cGFsYWJyYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];

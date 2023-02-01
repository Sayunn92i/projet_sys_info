import{Board} from './Board.js';

var sceneWidth = 1000;
var sceneHeight = 1000;

var container = document.querySelector("konva-holder");
console.log(document.getElementById('konva-holder').clientHeight);

const stage = new Konva.Stage({

    container: "konva-holder",
    height: 1000,
    width: 1000,
});

export const layer = new Konva.Layer();
stage.add(layer);
stage.hide();
//bouton start
document.getElementById ("start").addEventListener ("click", function () {let board = new Board();stage.show();document.getElementsByClassName("content")[0].style.display="none"; var div =document.getElementById("retour_menu"); div.style.display="flex"; }, false);
//bouton regle
document.getElementById ("regle").addEventListener ("click", function () {document.getElementsByClassName("content")[0].style.display="none";document.getElementsByClassName("affiche_regle")[0].style.display="block"; }, false);
//bouton retour regle
document.getElementById ("retour_regle").addEventListener ("click", function () {document.getElementsByClassName("content")[0].style.display="flex";document.getElementsByClassName("affiche_regle")[0].style.display="none"; }, false);

document.getElementById ("retour_menu").addEventListener ("click", function () {stage.hide();document.getElementsByClassName("content")[0].style.display="flex";var div =document.getElementById("retour_menu"); div.style.display="none"; }, false);

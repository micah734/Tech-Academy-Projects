// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


var imgObj;
var animate;
function init() {
    imgObj = document.getElementById('image');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
    animate = setTimeout(moveRight, 20);
}

function stop() {
    clearTimeout(animate) 
    imgObj.style.left='0px'
}

window.onload = init;
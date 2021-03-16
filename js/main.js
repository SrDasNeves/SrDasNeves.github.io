(function () {

	//variaveis de controle
	var canvas, ctx;

	function main ( ) {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d"); 
	}//main

	//RequestAnimationFrame
	requestAnimFrame = (function () {
		var func = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame 	||
		    window.mozRequestAnimationFrame 	||
		    window.oRequestAnimationFrame 		||
		    window.msRequestAnimationFrame 		||
		    function ( callback, element ) {
		    	window.setTimeout( callback, 1000 / interval ) ;
		    };

		return function (callback, element) {
		    func.apply(window, [callback, element]);
		};

	})();//RequestAnimationFrame
	//incia o main
	main();
})(); 


var square = (function() {
	'use strict';

	var ctx;
	var size;
	var x;
	var y;
	var canvas;
	//Functions Set
	function setCtx ( arg ) {
		ctx =  arg;
	};

	function setSize ( arg ) {
		size = arg;
	};

	function setCanvas ( w, h ) {
		canvas = { W : w, H : h }
	}
	//End Set 

	//Functions Get
	function getX ( ) {
		return x;	
	}

	function getY ( ) {
		return y;	
	}
	//End Get

	function draw ( ) {
		ctx.fillStyle = "#336633";
		ctx.beginPath();
		ctx.fillRect( x * size, y * size, size, size);			
		ctx.closePath();
	};

	return{
		setCtx : setCtx,
		setSize : setSize,
		setCanvas : setCanvas,
		draw : draw,
		getX : getX,
		getY : getY
	};
}()); 
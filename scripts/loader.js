/**
 * @author igonzalez
 */
var jewel = {}
//wait until the doc is loaded
window.addEventListener("load", function(){
	//start dynamic loading
	Modernizr.load([
		{
			//these files are always loaded
			load : [
			"scripts/sizzle.js",
			"scripts/dom.js",
			"scripts/game.js"
			],
			//called when all files finished loading and executing
			complete: function(){
				console.log("All files loaded!");
			}
			}
	]);
}, false);

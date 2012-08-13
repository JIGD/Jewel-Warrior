/**
 * @author igonzalez
 */
var jewel = {
    screens : {}
};
//wait until the doc is loaded
window.addEventListener("load", function(){
	//start dynamic loading
	Modernizr.load([
		{
			//these files are always loaded
			load : [
			"scripts/sizzle.js",
			"scripts/dom.js",
			"scripts/game.js",
            "scripts/screen.main-menu.js",
            "scripts/screen.splash.js"
			],
			//called when all files finished loading and executing
			complete: function(){
				jewel.game.showScreen("splash-screen");
				alert("All files loaded!");
			}
			}
	]);
}, false);

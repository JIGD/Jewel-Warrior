/**
 * @author igonzalez
 */
var jewel = {
    screens : {}
};
//wait until the doc is loaded
window.addEventListener("load", function(){
	//start dynamic loading
    Modernizr.addTest("standalone", function(){
        return (window.navigator.standalone != false);
    });
	Modernizr.load([
		{
			//these files are always loaded
			load : [
			"scripts/sizzle.js",
			"scripts/dom.js",
			"scripts/game.js"
			]
        }, {
            test: Modernizr.standalone,
            yep : "scripts/screen.splash.js",
            nope: "scripts/screen.install.js",
           //called when all files finished loading and executing
			complete: function(){
                jewel.game.setup();
                if(Modernizr.standalone){
				jewel.game.showScreen("splash-screen");
                }
                else{
                jewel.game.showScreen("install-screen");
                }
			}
			}
	]);
    if(Modernizr.standalone){
        Modernizr.load([
            "scripts/screen.main-menu.js"
        ]);
    }
}, false);
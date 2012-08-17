jewel.game = (function(){
	var dom = jewel.dom,
	$ = dom.$;

    function setup(){
        //disable native touchmove to avoid overscroll
        dom.bind(document, "touchmove", function(event){
            event.preventDefault();
        });
        //hide android address bar
        if(/Android/.test(navigator.userAgent)){
            $("html")[0].style.height = "200%";
            setTimeout(function(){
                window.scrollTo(0, 1);
            }, 0);
        }
    }

	//hide active screen (if any) and show the screen with the specified id
	function showScreen(screenId){
		var activeScreen = $("#game .screen.active")[0],
        screen = $("#"+screenId)[0];
		if(activeScreen){
			dom.removeClass(activeScreen, "active");
		}
        //run screen module
        jewel.screens[screenId].run();
        dom.addClass(screen, "active");
	}
	//expose public methods
	return {
		showScreen : showScreen,
        setup: setup
	};
})();

jewel.dom = (function(){
	var $ = Sizzle;
	function hasClass(el, clsName){
		var regex = new RegExp("(ˆ|\\s)"+ clsName + "(\\s|$)");
	return regex.test(el.className);
    }

	function addClass(el, clsName){
		if(!hasClass(el, clsName)){
			el.className +=" "+clsName;
	}
    }

	function removeClass(el, clsName){
		var regex = new RegExp("(ˆ|\\s)"+ clsName + "(\\s|$)");
		el.className = el.className.replace(regex, " ");
	}
	return{
        $ : $,
		hasClass:hasClass,
        addClass:addClass,
		removeClass:removeClass
	};
})();

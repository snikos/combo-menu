"use strict";

function init(){
	let purecube = getPoint('.purecube')[0];
	let boxed = getPoint('.boxed')[0];
	//let w = purecube.offsetWidth/2;
	//let h = purecube.offsetHeight/2;
	//purecube.classList.add('aura');
	purecube.classList['add']('aura');


	/* size links */
	[].forEach.call(document.querySelectorAll('.subcube'), function(el, idx){
		let len = el.children.length;
		if( len===0 ){
			el.classList.add('level0')
		}
		if( len>0 && len<=7 ){
			el.classList.add('level1')
		}
		if( len>7 && len<=14 ){
			el.classList.add('level2')
		}
		if( len>14 && len<=21 ){
			el.classList.add('level3')
		}
	});

  /* razmetka */
	for( let n=2; n>0; n--){
		boxed.innerHTML += '<div class="absolute-center vec'+n+'"></div>';
	}
}

function exoClass(el,mtd,cls){
  //[add|remove|toggle|contains]
  mtd = mtd || 'remove';
  [].forEach.call(getPoint(el), function(elem){
  	elem.classList[mtd](cls);
  });
  return this;
};

function getPoint(str){
	return document.querySelectorAll(str);
}

document.addEventListener('click', function(e){
  let tar = e.target;
  if( tar.parentNode.classList.contains('grand_links') ){
  	let that = tar.parentNode;
  	let dataBox = that.dataset.box;

  	if( that.classList['contains']('active') ){
  		that.classList['remove']('active');
  		exoClass('.cube_go', 'remove', 'open');
  		exoClass('.purecube', 'add', 'aura');
  	} else {
  		that.classList['add']('active');
  		[].forEach.call( getPoint('.cube_go'), function(el, idx){
  			(el.getAttribute('data-box-links') === dataBox) ? 
  			  el.classList['add']('open') : 
  			    el.classList['remove']('open')
  		});
  	}
  	[].forEach.call( getPoint('.grand_links'), function(element, index) {
  		if( element !== that ) element.classList['remove']('active');
  	});

		[].forEach.call( document.querySelectorAll('.cube_go'), function(el, idx){
			if( el.matches('[class$="open"]') ) el.closest('.purecube').classList['remove']('aura');
		});
  }
  e.preventDefault();
}, true);

/* 
This shit with 'document' instead of 'window' 
doesn't want to start (Console hasn't any errors)
*/
window.addEventListener('load', function(){
	init();
});
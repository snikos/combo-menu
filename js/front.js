;(function($){
	var $go = $('#go'), $purecube = $('.purecube'), $grandLinks = $('.grand_links'),
	$cubeGo = $('.cube_go'), $subCube = $('.subcube');
	
	/* size links */
	$subCube.each( function (i,el){
		var len = $(el).children('a').length;
		if( len == 0 ){
			$(el).addClass('level0');
		}
		if( len > 0 && len <= 7 ){
			$(el).addClass('level1');
		}
		if( len > 7 && len <= 14 ){
			$(el).addClass('level2');
		}
		if( len > 14 && len <= 21 ){
			$(el).addClass('level3');
		}
	});
	
	$grandLinks.on('click', function(e){
		var $that =  $(this) || e.target;
		var dataBox = $(this).attr('data-box');
		if( $that.hasClass('active') ){
			//console.log('act');
			$that.removeClass('active');
			$cubeGo.removeClass('open');
			$that.closest( $purecube ).addClass('aura');
		} else {
			//console.log('noact');
			$that.addClass('active');
			$cubeGo.each( function(i,el){
				$(el).filter( function (){
					$(this).attr('data-box-links') === dataBox ? $(this).addClass('open') : $(this).removeClass('open');
				});
			});
		}
		$grandLinks.each( function (i,el){
			$(el).not($that).removeClass('active')
		});

		if( !$cubeGo.hasClass('open') ){
		  $(this).closest( $purecube ).addClass('aura').end();
		} else {
			$(this).closest( $purecube ).removeClass('aura').end();
		}
		e.preventDefault();
		return false;
	});
	
	/* visual test */
    /*$('[href]').on('click', function(e){ 
	    alert('It\'s link: ' + $(this).text() + ', Title: ' + $(this).attr('title'));
		e.stopPropagation();
		e.preventDefault();
	});*/

		$purecube.addClass('aura');
	
	/* Experiment Testing Icon */
	/*var max = 329;
	$('.links').each(function(i,el){
	    var ranIcon = Math.round(Math.random()*max)+1;
	    $(el).prepend('<img class="img" src="image/PNG/48/'+ranIcon+'.png" alt="Icon-'+i+'" />')
	});*/

})(jQuery);
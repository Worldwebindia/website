$(function(){
	
	// Scroll to links
	$('a.anchor').click(function() {
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,0);
		return false;
	});
	
	function scrollToDiv(element){
		var offset = element.offset();
		var offsetTop = offset.top-50;
		var totalScroll = offsetTop;
		$('body,html').animate({
			scrollTop: totalScroll
		}, 500);
	};	
	
	// Search overlay
	var dh = $(document).height();	
	
	var headerhgt = $(".header-wrapper").height();
	var bodyhgt = dh-headerhgt-40;
	/*$('body').css("height",bodyhgt+"px");*/
	
	var dhf = dh-headerhgt;
	$(".OverLay").css("height",dhf+"px");
	$(".header .menu-search a").click(function(){
		$(this).parent().toggleClass("active");
		$(".OverLay,.SearchContentWrapper").fadeToggle();
	});
	
	$(".OverLay").click(function(){
		$(".OverLay,.SearchContentWrapper").fadeOut();
		$(".header .menu-search a").parent("li").removeClass("active");
	});
	
	$(".header-wrapper").click(function(e){
		if( $(e.target).closest(".header .menu-search a").length > 0 ) {
			return false;
		}	
		$(".OverLay,.SearchContentWrapper").fadeOut();
		$(".header .menu-search a").parent("li").removeClass("active");		
	});
	
	
// Mobile menu 
	$(".mob-menu ul").css("height",dh+"px");
	$(".mob-menu-btn").click(function(){
		$(this).toggleClass("selected");
		$(".mob-menu ul").animate({"right":"-20px"}, 300);
		$("ul.portf_cate_links").hide();
		$("#tagsInMBL ul.tags_link").hide();
		$(".mb_tag_links, .mb_cat_links").removeClass("selected");	
	});
	
	$(document).click(function(e){
		if( $(e.target).closest(".mob-menu-btn").length > 0 ) {
			return false;
		}			
		$(".mob-menu ul").animate({"right":"-280px"}, 100);
	});	
	
	$("#tagsInMBL .mb_tag_links").click(function(){
		$(this).toggleClass("selected");
		$(this).siblings("ul.tags_link").slideToggle();
	});
	$(".portflio_categories .mb_cat_links").click(function(){
		$(this).toggleClass("selected");
		$(this).siblings("ul.portf_cate_links").slideToggle();
	});
	if ($(window).width() < 700) {
		
		// Fixed sidebar when reach on top
		var my_div = $(".fixedCatBlock");
		var div_top = my_div.offset().top-90;
		$(document).scroll(function() {
			if (div_top <= $(document).scrollTop()) {
			$(".fixedCatBlock").addClass('fixed');
		}
			else {
			$(".fixedCatBlock").removeClass('fixed');
			}
		});
		
		$(".portflio_categories ul.portf_cate_links a").click(function(){
			$(this).parent('li').parent("ul.portf_cate_links").hide();
		});
		$(".portflio_categories .cat_gen").click(function(){
			$(this).siblings("ul.portf_cate_links").hide();	
		});
		
	}
	

});

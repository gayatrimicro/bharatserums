startList = function() { 
	var xml = 'http://api.facebook.com/restserver.php?method=links.getStats&urls=#&'+Math.random()*1000;
	$.ajax({
		  type: "get",
		  url: xml,
		  dataType: "xml",
		  success: function(xml){
		          $('.fb .like_count').text($(xml).find('like_count').text());
		  },
		  error: function(){}
		});
	
	$('#nav-social .fb').hover(
			function(){
				var _this = $(this);
				var method = 'easeInOutCubic';
				$('.fb .cont_fb').animate({opacity:1});
				$(this).addClass('active');
			},
			function(){
				var _this = $(this); 
				$('.fb .cont_fb').animate({opacity:0});
				$(this).removeClass('active');
			}
	);
	  $('.fb a').live('click', function(e) {
		  e.preventDefault();
		  console.log($("#facebook form button"))
	
		  $("#facebook form button").click();
		  });

	$('#clients_list > li').each(
			function(i,content){
				
				$(content).find('ul li:last').addClass('last');
				
			}
	);
	
	$('.qr-code_a').mouseover(function(){tooltip.show('<img src="img/qr-code_b.png" alt="" />');}).mouseout(function(){tooltip.hide();});
	
	
	if($('#realisation_txt').length>0){
		var el = $('#realisation_txt');
	    var elpos_original = el.offset().top;
	    var height = el.height()+200;
	    $(window).scroll(function(){
	        var elpos = el.offset().top;
	        var windowpos = $(window).scrollTop();
	        var finaldestination = windowpos;
	        var stophere = ( $('#content-news').offset().top )-(height-70);
	      
	        
	        if( windowpos < 350){
	        	el.stop().animate({'top':50},1000);
	        }
	        else if( windowpos < stophere){
	        	el.stop().animate({'top':finaldestination-elpos_original+70},1000);
	        }
	        
	            
	        
	    });
		
	}
	
	
	AnimateColorHover('#footer .mail','#292c7e','#ABABAB');
	AnimateColorHover('#nav-realizations li','#292c7e','#7A7A7A');
	AnimateColorHover('#content-sitemap li li','#292c7e','#ABABAB');
	AnimateColorHover('#content-news h3','#292c7e','#7A7A7A');
	AnimateColorHover('#tools li','#292c7e','#ABABAB');
	AnimateColorHover('#breadcrumbs li','#292c7e','#ABABAB');
	AnimateColorHover('#content-news .tab','#292c7e','#585858');
	AnimateColorHover('#realisation_list .tab','#292c7e','#585858');
	
	 if ($.browser.msie ) {
		    //selektory css3
		    $('html').addClass('ie-crap');
		    $("table").attr('cellspacing', '0').find("tbody tr:nth-child(2n)").addClass("odd");
		    $(".comments_box li:last-child").addClass("last");
		    $(".box_gal_list a:nth-child(2n)").addClass("nth-child");
		    if(!Modernizr.input.placeholder) {
		      $("input[placeholder]").each(function() {
		        var placeholder = $(this).attr("placeholder");
		        $(this).val(placeholder).focus(function() {
		          if($(this).val() == placeholder) {
		            $(this).val("")
		          }
		        }).blur(function() {
		          if($(this).val() == "") {
		            $(this).val(placeholder)
		          }
		        });
		      });
		    }

		  }
	 	
	 
	 $('#clients_list li li').hover(
				function(){
					$(this).find('span').stop().fadeTo(500,1);
					
				},
				function(){
					$(this).find('span').stop().fadeTo(300,0);
				}
		);
	 
	 $('#clients_list li li').hover(
				function(){
					$(this).find('span').stop().fadeTo(500,1);
					
				},
				function(){
					$(this).find('span').stop().fadeTo(300,0);
				}
		);
	 
		$('#content-strategy li .tab').hover(
				function(){
					
					if($(this).parent('li').hasClass('active')){
						$(this).find('span').fadeTo(500,1);
					}
					else {
						$(this).find('span').fadeTo(500,1);
						$('#content-strategy li.active').removeClass('active');
						var index = $(this).parent().index() + 1;
						$('#content-strategy div.active').stop().animate({right:-300,opacity:0},10,method,function(){$(this).css('right',200).removeClass('active')});
						$('#content-strategy div.cs'+index).stop().animate({right:0,opacity:1},{duration:500,easing:method}).addClass('active');
						
						$(this).parent().addClass('active');
						
					}
					
				},
				function(){
					$(this).find('span').fadeTo(300,1,function(){$(this).find('span').attr('style','');});
				}
		);
		
		$('.contact-right li').hover(
				function(){
					
					
					$(this).find('span').fadeTo(500,1);
					
				},
				function(){
					$(this).find('span').fadeTo(300,1);
				}
		);
		
		var method = 'easeInOutCubic';
		var widthSpan = $('#projects #nav-projects > ul > li:first').find('a').width(); 
		$('#projects #nav-projects > ul > li:first').find('span').animate({width:widthSpan},7900,method,function(){$(this).width(0);});
		$('#projects .content_project > div:first').css({'height':'364px','top':'0'});
		
	
	$('.offer #content-tabs a').click(
			function(e){
				e.preventDefault();
				$.scrollTo( $(this).attr('href'), 1200, {easing:'easeInOutCubic'} );
			}
	);
	
	if($('body').hasClass('contact')){
		select();
	}	
	$('.qr-code_a').click(
			function(e){
				e.preventDefault();
				var classCSS = 'qr-code-lght';
				var margin = 90;
				var content = '<img src="'+$(this).attr('href')+'" alt="" />';
				LGHT(margin,content,classCSS);
				$.scrollTo( '#header', 800, {easing:'easeInOutCubic'} );
			}
	);	
	
	$('.google_skip').click(
			function(e){
				e.preventDefault();
				$.scrollTo( '.maps-google', 800, {easing:'easeInOutCubic'} );
			}
	);

	$('#nav-projects li').click(
			function(e){
				e.preventDefault();
				
				if($(this).hasClass('active')){
					
					
				}
				else{
					clearInterval(t);
					$(this).find('span').width(0);
					var inDex = $(this).index();
					headerAnimation(inDex);
				}
				

			}
	);

	if($('body').hasClass('home')){
		sTabsHome();
		t=setInterval("headerAnimation()",8000);
		AnimateColorHover('#nav-realizations li','#de0073','#585858');
	}
	if($('body').hasClass('offer')){
		OffersList();
		s=setInterval("OffersListChangeNext()",14000);
		OffersList1();
		s=setInterval("OffersListChangeNext1()",14000);
		var method = 'easeInOutCubic';
		$('#content-tabs .tab').hover(
				function(){
					$(this).find('.link_m').animate({color:'#DE0073'},500,method);
					$(this).find('h3 a').animate({color:'#DE0073'},500,method);
					$(this).find('h3 a span').animate({color:'#DE0073'},500,method);
				},
				function(){
					$(this).find('.link_m').animate({color:'#7A7A7A'},500,method);
					$(this).find('h3 a').animate({color:'#CACACA'},500,method);
					$(this).find('h3 a span').animate({color:'#7A7A7A'},500,method);
				}
		
		);
		
	}
	
	
	
	$('.tab').each(
			function(i,content){
				$(content).hover(
						function(){
							$(this).find('img').stop().animate({width:298,height:118,left:'-23px',top:'-29,5px'},{duration:200});
							$(this).find('h3 a').animate({color:'#2A2F7C'},500,method);
					$(this).find('h3 a span').animate({color:'#2A2F7C'},500,method);
						
						},
						function(){
							$(this).find('img').delay(300).stop().animate({width:239,height:95,left:0,top:0},{duration:200});
							$(this).find('h3 a').animate({color:'#CACACA'},500,method);
					$(this).find('h3 a span').animate({color:'#7A7A7A'},500,method);	
						}
				);
			}
	);
	
	
}

window.onload = startList;
var t = '';
var s = '';





var headerAnimation = function(active){}



var AnimationDivContent = function(nextDiv,activeDiv){}




function select(){
	var _select = $('.select');
	var _content = "<div class='select-div'><span></span><div class='select-content'><ul></ul></div>";
	
	jQuery.validator.addMethod("placeholder", function(value, element) {
		  return value!=$(element).attr("placeholder");
		}, "Pole jest wymagane");

	
	jQuery.validator.addMethod("phone", function(postalcode, element) {
		return this.optional(element) || postalcode.match(/^((\+?\d{2})?(-|\s)?\d{3}(-|\s)?\d{3}(-|\s)?\d{3})|(\(?\d{2}\)?(-|\s)?\d{3}(-|\s)?\d{2}(-|\s)?\d{2})$/ );
	}, "Wprowadź poprawny numer telefonu");
	
	
	if($('.contact_form_pl').length > 0){
		var v = $('.contact_form_pl').validate({
			onfocusout: false,
			onkeyup: false,
			errorElement: "span",
			rules: {	
			name: {required:true,minlength: 3,placeholder:true},
			phone: {required:true,phone:true,placeholder:true},
			email: {email:true,placeholder:true,required:true},
			text: {required:true}
		},
		messages:{
			
			email:{email:"Wpisz poprawny adres e-mail",placeholder:"Pole jest wymagane",required: "Pole jest wymagane"},
			name:{required: "Pole jest wymagane",placeholder:"Pole jest wymagane"},
			phone:{required: "Pole jest wymagane",placeholder:"Pole jest wymagane",phone:"Podaj poprawny numer telefonu"},
			text:{required: "Pole jest wymagane"}
		}
		
		});
	}else{
		var v = $('.contact_form_en').validate({
			onfocusout: false,
			onkeyup: false,
			errorElement: "span",
			rules: {	
			name: {required:true,minlength: 3,placeholder:true},
			phone: {required:true,phone:true,placeholder:true},
			email: {email:true,placeholder:true,required:true},
			text: {required:true}
		},
		messages:{
			
			email:{email:"Type correct email address",placeholder:"Field required",required: "Field required"},
			name:{required: "Field required",placeholder:"Field required"},
			phone:{required: "Field required",placeholder:"Field required",
				phone:"Type correct phone number"},
				text:{required: "Field required"}
		}
		
		});
	}
	
	$('.btn.pink').click(
			function(e){
				e.preventDefault();
				if(v.form()){
					$('#contact_form').find('input:submit').click();
				}
				
			}
	);
	
	$('.btn.file').click(
			function(e){
				e.preventDefault();
				$('form input:file').click();
			}
	);
	_select.each(
		function(s,d) {
			var _this = $(this);
			_this.append(_content);
			var _first_text = _this.find('select option:first').text();
			_this.find('.select-div span').text(_first_text);
			
			_this.find('option').each(
						function(i,s){
						var text = $(s).text();
						var value = $(s).val();
						var _this = $(this);
						_this.parent().parent().find('.select-content ul').append('<li class="id'+i+'" id="id'+i+'">'+text+'</li>');
						}
				);
		}
	); 
	
	
	$('.select-div span').click(
			function(event){
			event.preventDefault();
			
			var _this = $(this);
			if(_this.parent().hasClass('click')){
				_this.parent().removeClass('click');
				_this.parent().find('.select-content').slideUp();
				
			}
			else{
				_this.parent().addClass('click');
				_this.parent().find('.select-content').slideDown();
			}
			}
	);
	

	$('.select-div li').click(
			function(event){
			event.preventDefault();
			var _this = $(this);
			var _parents = _this.parents('.select-div');
			var _text = _this.text();
			var _index = _this.index();
			var _option = _this.parents('.select').find('option');
			_parents.find('span').text(_text);
			_option.attr('selected',false);
			_option.eq(_index).attr('selected',true)
			_parents.removeClass('click');
			_parents.find('.select-content').slideUp();
			}
	);
	
}

function AnimateColorHover(link,hoverColor,normalColor){
	var link = link;
	var hoverColor = hoverColor;
	var normalColor = normalColor;
			$(link).each(
				function(s,d){
					if($(d).hasClass('active')){
				
				}
					else {
						$(d).attr('style','');
						$(d).hover(
								function(){
									$(this).stop().find('a').attr('style','').animate({color:hoverColor},500);
								},
								function(){
									$(this).stop().find('a').attr('style','').animate({color:normalColor},500);
								}
							);
					}	
				
				}
		);
}

function sTabsHome(){
	
	var method = 'easeInOutExpo';
	$('#content-tabs .tab').each(
			function(s,d){
				$(d).hover(
						function(){
							var _this = $(this);
							
						
							_this.find('h3').stop().animate({opacity:0,top:-87},{duration:500});
						
							_this.find('.link_m').stop().animate({top:-20,opacity:0},{duration:500});
							
							_this.find('div').stop().animate({top:18,opacity:1},{duration:500,easing:method});
						},
						function(){
							var _this = $(this);
							
							
							_this.find('h3').stop().animate({opacity:1,top:18},{duration:500});
							
							_this.find('.link_m').stop().animate({top:85,opacity:1},{duration:500});
							
							_this.find('div').stop().animate({top:140,opacity:0},{duration:200,easing:method});
							
						}
				);
			}
	);
}
var page = 1;
var left = 0;
function OffersList(){
	var method = 'easeInOutExpo';
	var heightActiveDiv = $('#products_list_content .active').outerHeight() + 70;
	$('#products_list_content .active').css({opacity:1});
	var heightLi = $('#products_list ul').outerHeight();
	
	$('#products_list ul').animate({opacity:1});
	
	$('#products_list .next').click(
			function(e){
				e.preventDefault();
				OffersListChangeNext();
			}
	);
	$('#products_list .prev').click(
			function(e){
				e.preventDefault();
				OffersListChangeprev();
			}
	);
	OffersListClickAb();
}
function OffersList1(){
	var method = 'easeInOutExpo';
	var heightActiveDiv = $('#products_list_content1 .active').outerHeight() + 70;
	$('#products_list_content1 .active').css({opacity:1});
	var heightLi = $('#products_list1 ul').outerHeight();
	
	$('#products_list1 ul').animate({opacity:1});
	
	$('#products_list1 .next').click(
			function(e){
				e.preventDefault();
				OffersListChangeNext1();
			}
	);
	$('#products_list1 .prev').click(
			function(e){
				e.preventDefault();
				OffersListChangeprev1();
			}
	);
	OffersListClickAb1();
}

function OffersListChangeNext(){
	
	clearInterval(s);
	s=setInterval("OffersListChangeNext()",14000);
	var countLi =  $('#products_list ul li').length;
	var pageCount = parseInt(countLi/7);
	
	var method = 'easeInOutExpo';
	var activeLi = $('#products_list ul li.active');
	if(activeLi.next().length){
		var nextLi = activeLi.next();
		var index = nextLi.index();
		if((index)/7==page){
			page +=1;
			left +=945
			$('#products_list ul').animate({left:'-'+left},{duration:200,easing:method});
		}
	}
	else {
		
		var nextLi = $('#products_list ul li').first(); 
		var index = nextLi.index();
		$('#products_list ul').animate({left:0},{duration:200,easing:method});
		left=0;
		page=1;
	}
	
	var leftCo = 945;
	

	$('#products_list_content .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
	$('#products_list_content div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');
	activeLi.removeClass('active');
	nextLi.addClass('active');
}


function OffersListChangeNext1(){
	
	clearInterval(s);
	s=setInterval("OffersListChangeNext1()",14000);
	var countLi =  $('#products_list1 ul li').length;
	var pageCount = parseInt(countLi/7);
	
	var method = 'easeInOutExpo';
	var activeLi = $('#products_list1 ul li.active');
	if(activeLi.next().length){
		var nextLi = activeLi.next();
		var index = nextLi.index();
		if((index)/7==page){
			page +=1;
			left +=945
			$('#products_list1 ul').animate({left:'-'+left},{duration:200,easing:method});
		}
	}
	else {
		
		var nextLi = $('#products_list1 ul li').first(); 
		var index = nextLi.index();
		$('#products_list1 ul').animate({left:0},{duration:200,easing:method});
		left=0;
		page=1;
	}
	
	var leftCo = 945;
	

	$('#products_list_content1 .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
	$('#products_list_content1 div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');
	activeLi.removeClass('active');
	nextLi.addClass('active');
}


function OffersListClickAb(){
	
	var method = 'easeInOutExpo';
	$('#products_list ul li').click(
			function(e){
				e.preventDefault();
				clearInterval(s);
				s=setInterval("OffersListChangeNext()",14000);
				var index = $(this).index();
				$('#products_list ul li.active').removeClass('active');

				if(index/6==page-1){

					$('#products_list ul').animate({left:'-'+(page-1)*945},{duration:200,easing:method});
				}
				
				$(this).addClass('active');
				$('#products_list_content .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
				$('#products_list_content div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');

			}
	);
	
	$('#products_list ul li').hover(
			function(){
				clearInterval(s);
				s=setInterval("OffersListChangeNext()",14000);
				var index = $(this).index();
				$('#products_list ul li.active').removeClass('active');

				if(index/6==page-1){

					$('#products_list ul').animate({left:'-'+(page-1)*945},{duration:200,easing:method});
				}
				
				$(this).addClass('active');
				$('#products_list_content .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
				$('#products_list_content div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');

			}
	);

}

function OffersListClickAb1(){
	
	var method = 'easeInOutExpo';
	$('#products_list1 ul li').click(
			function(e){
				e.preventDefault();
				clearInterval(s);
				s=setInterval("OffersListChangeNext1()",14000);
				var index = $(this).index();
				$('#products_list1 ul li.active').removeClass('active');

				if(index/6==page-1){

					$('#products_list1 ul').animate({left:'-'+(page-1)*945},{duration:200,easing:method});
				}
				
				$(this).addClass('active');
				$('#products_list_content1 .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
				$('#products_list_content1 div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');

			}
	);
	
	$('#products_list1 ul li').hover(
			function(){
				clearInterval(s);
				s=setInterval("OffersListChangeNext1()",14000);
				var index = $(this).index();
				$('#products_list1 ul li.active').removeClass('active');

				if(index/6==page-1){

					$('#products_list1 ul').animate({left:'-'+(page-1)*945},{duration:200,easing:method});
				}
				
				$(this).addClass('active');
				$('#products_list_content1 .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
				$('#products_list_content1 div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');

			}
	);

}


function  OffersListChangeprev(){
	var leftCo = 945;
	clearInterval(s);
	var countLi =  $('#products_list ul li').length;
	s=setInterval("OffersListChangeNext()",14000);
	var method = 'easeInOutExpo';
	var activeLi = $('#products_list ul li.active');
	var pageCount = parseInt(countLi/7);
	if(activeLi.prev().length){
		var prevLi =  activeLi.prev();
		var index = prevLi.index();

		if((index)/6==(page-1)){
			page -=1;
			left -= 945;
			$('#products_list ul').animate({left:'-'+left},{duration:200,easing:method});
		
		}
	}
	else {
		var prevLi = $('#products_list ul li').last();	
		$('#products_list ul').animate({left:'-'+pageCount*leftCo},{duration:200,easing:method});
		left=pageCount*leftCo;
		page=parseInt(countLi/7)+1;
		
		
	}
	var index = prevLi.index();
	$('#products_list_content .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
	$('#products_list_content div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');
	activeLi.removeClass('active');
	prevLi.addClass('active');
}


function  OffersListChangeprev1(){
	var leftCo = 945;
	clearInterval(s);
	var countLi =  $('#products_list1 ul li').length;
	s=setInterval("OffersListChangeNext1()",14000);
	var method = 'easeInOutExpo';
	var activeLi = $('#products_list1 ul li.active');
	var pageCount = parseInt(countLi/7);
	if(activeLi.prev().length){
		var prevLi =  activeLi.prev();
		var index = prevLi.index();

		if((index)/6==(page-1)){
			page -=1;
			left -= 945;
			$('#products_list1 ul').animate({left:'-'+left},{duration:200,easing:method});
		
		}
	}
	else {
		var prevLi = $('#products_list1 ul li').last();	
		$('#products_list1 ul').animate({left:'-'+pageCount*leftCo},{duration:200,easing:method});
		left=pageCount*leftCo;
		page=parseInt(countLi/7)+1;
		
		
	}
	var index = prevLi.index();
	$('#products_list_content1 .active').stop().animate({opacity:0},{duration:200,easing:method}).removeClass('active');
	$('#products_list_content1 div').eq(index).stop().animate({opacity:1},{duration:700,easing:method}).addClass('active');
	activeLi.removeClass('active');
	prevLi.addClass('active');
}


var tooltip=function(){
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxw = 300;
	var speed = 10;
	var timer = 20;
	var endalpha = 95;
	var alpha = 0;
	var tt,t,c,b,h;
	var ie = document.all ? true : false;
	return{
		show:function(v,w){
			if(tt == null){
				tt = document.createElement('div');
				tt.setAttribute('id',id);
				t = document.createElement('div');
				t.setAttribute('id',id + 'top');
				c = document.createElement('div');
				c.setAttribute('id',id + 'cont');
				b = document.createElement('div');
				b.setAttribute('id',id + 'bot');
				tt.appendChild(t);
				tt.appendChild(c);
				tt.appendChild(b);
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				document.onmousemove = this.pos;
			}
			tt.style.display = 'block';
			c.innerHTML = v;
			tt.style.width = w ? w + 'px' : 'auto';
			if(!w && ie){
				t.style.display = 'none';
				b.style.display = 'none';
				tt.style.width = tt.offsetWidth;
				t.style.display = 'block';
				b.style.display = 'block';
			}
			if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);
		},
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			tt.style.top = (u - h) + 'px';
			tt.style.left = (l + left) + 'px';
		},
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(){
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
		}
	};
}();

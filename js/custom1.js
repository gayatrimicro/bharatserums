$().ready(
		function() {
			$('.print').click(function(e) {
				print();
				return false;
			});
			
			// hover na logo w stopce
			$('#footer .info a').hover(
					function(){
						$(this).find('span').fadeTo(500,1);
						
					},
					function(){
						$(this).find('span').fadeTo(300,0);
					}
			);

			$(document).ready(function() {
				
				$('a[rel*=external]').click(function() { 
		            window.open(this.href); 
		            return false; 
		        });
					
				$("a.flashLink").fancybox( {
					'speedIn' : 600,
					'speedOut' : 200,
					'scrolling' : 'no',
					'centerOnScroll' : 'true'
				});
				
				// animacja hovera paginacji
				AnimateColorHover('ul.pager li','#de0073','#585858');
			});
			$('#nav-realizations ul li a').live('click', function() {
				if (!($('#realisation_txt').length > 0)) {
					$('#nav-realizations ul li').removeClass('active');
					$(this).parent().addClass('active');
					$('#realisation_list').html('');
					var tabRel = $(this).attr("href");
					window.history.pushState(
							{ page: tabRel },
							tabRel,
							tabRel
					);
					realizationTabSwitch($(this));

					return false;
				}
			});

			$("#form-realisation").submit(function(e) {
				if (!($('#realisation_txt').length > 0)) {
					$('#nav-realizations ul li').removeClass('active');
					$('#nav-realizations ul li').first().addClass('active');
					$('#realisation_list').html('');
					$.ajax( {
						url : 'ajax.php?module=impl',
						async : false,
						type : 'POST',
						data : {
							searchPhrase : $('#searchPhrase').val(),
							page : '1'
						},
						success : function(data) {
							$('#realisation_list').html(data);
						}
					});

					return false;
				}
			});

			$('.pager li a').live(
					'click',
					function() {
						if (!($('#realisation_txt').length > 0)) {
							$('#realisation_list').html('');
							var tabRel = $(this).attr("href");
							window.history.pushState(
						        { page: tabRel },
						        tabRel,
						        tabRel
						    );
							realizationPagingSwitch($(this));

							return false;
						}
					});
			window.onpopstate = function(event) {
				var obj = jQuery.parseJSON(JSON.stringify(event.state));
				if(obj != null){
					if($('#nav-realizations ul li a[href*=' + obj.page + ']').length > 0){
						$('#nav-realizations ul li').removeClass('active');
						$('#nav-realizations ul li a[href*=' + obj.page + ']').parent().addClass('active');
						realizationTabSwitch($('#nav-realizations ul li.active a'));
					}else if($('.pager li a[href*=' + obj.page + ']').length > 0){
						$('.pager li').removeClass('active');
						$('.pager li a[href*=' + obj.page + ']').parent().addClass('active');
						realizationPagingSwitch($('.pager li.active a'));
					}
				}else if($('#nav-realizations ul li').length > 0){
					var locationSubstr = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
					if(locationSubstr.lastIndexOf("-") == -1){
						$('#nav-realizations ul li').removeClass('active');
						$('#nav-realizations ul li').first().addClass('active');
						$('.pager li').removeClass('active');
						$('.pager li').first().addClass('active');
						realizationTabSwitch($('#nav-realizations ul li.active a'));
					}else{
						if($('#nav-realizations ul li a[href*=' + locationSubstr + ']').length > 0){
							$('#nav-realizations ul li').removeClass('active');
							$('#nav-realizations ul li a[href*=' + locationSubstr + ']').parent().addClass('active');
							realizationTabSwitch($('#nav-realizations ul li.active a'));
						}else if($('.pager li a[href*=' + locationSubstr + ']').length > 0){
							$('.pager li').removeClass('active');
							$('.pager li a[href*=' + locationSubstr + ']').parent().addClass('active');
							realizationPagingSwitch($('.pager li.active a'));
						}
					}
				}
			};

		});

function realizationPagingSwitch(pThis){
	$.ajax( {
		url : 'ajax.php?module=impl',
		async : false,
		type : 'POST',
		data : {
			searchPhrase : $('#searchPhrase').val(),
			categoryId : $(
					'#nav-realizations ul li.active a')
					.attr('rel'),
			page : pThis.attr('rel')
		},
		success : function(data) {
			$('#realisation_list').html(data);
			$('.tab').each(
					function(i,content){
						$(content).hover(
								function(){$(this).find('img').stop().animate({width:298,height:118,left:'-23px',top:'-29,5px'},{duration:200});
								},
								function(){
									$(this).find('img').delay(300).stop().animate({width:239,height:95,left:0,top:0},{duration:200});	
								}
						);
					}
			);
			
			// animacja hovera paginacji
			AnimateColorHover('ul.pager li','#de0073','#585858');
			AnimateColorHover('#content-news .tab','#de0073','#585858');
			AnimateColorHover('#realisation_list .tab','#de0073','#585858');
			AnimateColorHover('#nav-realizations li','#de0073','#585858');
		}
	});
}

function realizationTabSwitch(pThis){
	$.ajax( {
		url : 'ajax.php?module=impl',
		async : false,
		type : 'POST',
		data : {
			searchPhrase : $('#searchPhrase').val(),
			categoryId : pThis.attr('rel'),
			page : '1'
		},
		success : function(data) {
			$('#realisation_list').html(data);
			$('.tab').each(
					function(i,content){
						$(content).hover(
								function(){$(this).find('img').stop().animate({width:298,height:118,left:'-23px',top:'-29,5px'},{duration:200});
								},
								function(){
									$(this).find('img').delay(300).stop().animate({width:239,height:95,left:0,top:0},{duration:200});	
								}
						);
					}
			);
			AnimateColorHover('#realisation_list .pager a','#de0073','#585858');
			AnimateColorHover('#content-news .tab','#de0073','#585858');
			AnimateColorHover('#realisation_list .tab','#de0073','#585858');
			AnimateColorHover('#nav-realizations li','#de0073','#585858');
		}
	});
}

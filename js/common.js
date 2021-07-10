/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
  $(".slider.single-item").css("display","block");
})

$(document).ready(function(){
	var width = $(window).width();
	if (width < 1024) {
		$("div, span, p, a, li, h1, h2, h3").removeClass("wow").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInRight").removeClass("fadeInDown").removeAttr("data-wow-delay").removeAttr("data-wow-offset")
		.removeAttr("visibility");
	}
	
	if (sessionStorage.getItem('leadpage') != null) { var pagenamee = sessionStorage.getItem('leadpage'); $('#leadpage').val(pagenamee); } 
	else { var pagenamee = "Contact Page"; $('#leadpage').val(pagenamee); }
});


/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
	
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });

  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion start*/
		
	/*Animate label form*/
		$('.animate-label .input-group').click(function(){
		 if ($(this).find('select').size() > 0) {
        // $(this).find('label').addClass('active');
         
        // var id = $(this).find('select').attr('id');
        // console.log(id);
          
         
        }  else {
                $(this).find('input').focus();
                $(this).find('label').addClass('active');
          
        }     
        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
				$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
       
	});
	$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
		});
  
    $('.input-group').on('focus', 'input, select, textarea', function () {
        $(this).prev('label').addClass('active');
    });
	
  $('.input-group textarea, .input-group input,.input-group select').each(function () {
        if (this.value.length > 0) {
            var div = $(this).prev('label').addClass('active');
        }
    });
		$('.input-group').click(function(){
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
    });
	/*Animate label form*/

});

$(document).on('click',".apply_now", function(){
	var job_desc = $.trim($(this).parent().parent().find('.grid-3').clone().children().remove().end().text());
	$("select[name='interested_in']").val(job_desc);
});

$(window).ready(function(){
	var piece= window.location.href.split('#');
var last_piece = decodeURIComponent(piece[piece.length-1]).replaceAll(' ','-').toLowerCase();
console.log(last_piece);
$('div[data-id="'+last_piece+'"]').find('.ViewDetails').click();
});

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if(this.responseText==0){
    	$('a[href="careers.html"]').parent().remove();
    }
  }
};
xmlhttp.open("POST", 'get-careers', true);
xmlhttp.send();


function onlyNos(e, t) {
	try {
		if (window.event) {
			var charCode = window.event.keyCode;
		}
		else if (e) {
			var charCode = e.which;
		}
		else { return true; }
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				if (charCode == 45 || charCode == 32) {
					return true;
				}
				return false;
			}
			return true;
   }
   catch (err) {
		alert(err.Description);
   }
}

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea, file").each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}
			break;
			case "password":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');					
					$(this).attr("placeholder", ""+title+" should be min 6 char!")
					$(this).prev().addClass('active');
					return_state = false;		
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}
			break;
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "Enter Valid Mobile Number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}				
			break;
			case "mobile":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" cannot be blank !")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" must be 10 digits !")							
					return_state = false;
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}				
			break;
			case "file":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					return_state = false;													
				}
				else
				{
					var extension = $(this).val().split('.').pop().toLowerCase();
					if($.inArray(extension, ['pdf','doc','docx','xls','xlsx','ppt','pptx','jpg','jpeg']) == -1) {
						$(this).prev().css("border-bottom","1px solid red");
						$(this).val('');
						$(this).prev().addClass('active');
						$(this).parents('.file-upload').find('span').html('Please upload valid file format');
						return_state = false;	
					}
					else {
						$(this).prev().css("border-bottom","1px solid green");
					}
				}
			break;
		}
	});
	return return_state;
}

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
		
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
		$(this).remove();
  });
  
   // $(document).on('click', '.overlay-box', function () {return false;});
  /*$(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });*/
}
/*Overlay function end*/

$(function(){
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})

/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('rel')
  var tabNavigation = $(this).parents('.tabNav')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  
  tabNavigation.children().find('a').removeClass('active')
  $(this).addClass('active')
  
  if(resultCnt.children('div#'+relation).css('display') == 'none')
  {
    resultCnt.children('div').slideUp();
    resultCnt.children('div#'+relation).slideDown();
  }
  else
  {
  	resultCnt.children('div#'+relation).slideUp();
  }
})
/*jQuery tabs end */
})

function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}


(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			
    });
  }
	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.menubar').addClass('open-navigation');
			$(".menubar ul li.hasDropDown.active .submenu").css("display", "block");
		}
		else
		{
			$('.menubar').removeClass('open-navigation');
		}
	});
		$(document).on('click','.hasDropDown',function(){
			$('.hasDropDown').removeClass('openHas');
			var _child=$(this).find('.submenu').css('display');
			if(_child=='none')
				{
					$('.submenu').slideUp();
					$(this).find('.submenu').slideDown();
					$(this).addClass('openHas');
				}
				else
				{
					$(this).find('.submenu').slideUp();
					$(this).removeClass('openHas');
				}
		});
		
})();

$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){ alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly."); } 
	else if(param[0]=="career"){ alert("Your application has been Submitted Successfully."); } 
	else if(param[0]=="error"){ alert("The code is invalid."); }
});

$(document).ready(function(){
  $(".menubar ul li").mouseover(function(){
    $(".menubar ul li.active").addClass('deactive');
    $(".menubar ul li.deactive").removeClass('active');
  });
  $(".menubar ul li").mouseout(function(){
    $(".menubar ul li.deactive").addClass('active');
    $(".menubar ul li.active").removeClass('deactive');
  });
});
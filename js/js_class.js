// JavaScript Document

//**********************Confirm Delete function*************************************************

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
					if (charCode == 45 ) {
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
//*********************Mouse over image changer********************************************
function change_image(cont_id,imgsrc)
{
	document.getElementById(cont_id).src = imgsrc;		
}

//********************************This is the ajax helper class***********************************
function jquery_ajax(func,url,params,element,loader)
{
	if(typeof($(loader)) != "undefined")
	{
		$(loader).css({"top":(window.innerHeight - $(loader).outerHeight())/2,"left":((window.innerWidth - $(loader).outerWidth())/2)})
		$(".loader").fadeIn();
	}
	
	$.post(url,
	{			  
	  "function": func,
	  "params": params 
	},
	function(data,status){
		$(element).html(data);
		if(typeof($(loader)) != "undefined")
		{			
			$(loader).fadeOut();
		}
	});		
}

/* To check Password Strength */
function passwordStrength(password)
{
	var desc = new Array();
	desc[0] = "Very Weak";
	desc[1] = "Weak";
	desc[2] = "Better";
	desc[3] = "Medium";
	desc[4] = "Strong";
	desc[5] = "Strongest";

	var score   = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 6) score++;
	//if password has both lower and uppercase characters give 1 point	
	if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;
	//if password has at least one number give 1 point
	if (password.match(/\d+/)) score++;
	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;
	//if password bigger than 12 give another 1 point
	if (password.length > 12) score++;	
	params[0] = desc[score];
	params[1] = score;
	
	return params
}

/* RESTRICT special Chars  */

function RestrictChar(id,evt) 
{
	var theEvent = evt || window.event;
    var key      = theEvent.keyCode || theEvent.which;
	//alert(key);
	if(key!=16 && key!=17 && key!=8 && key!=37 && key!=39 && key!=32 && key!=27)
	{
	//@#!^&*- 
		var re5digit=/[@#!^&*-]/;	
		if (document.getElementById(id).value.search(re5digit) != -1) 
		{		
			document.getElementById(id).value = document.getElementById(id).value.substring(0,document.getElementById(id).value.length-1);		
		}
	}

}

function charconstraint(id,maxchars,minchars) 
{
	var maxchars = typeof(maxchars) != 'undefined' ? maxchars : 300;
	var minchars = typeof(minchars) != 'undefined' ? minchars : 5;
	var x = document.getElementById(id);
	if(x.value.length > maxchars) 
	{
		$("#"+id).val("");
		$("#"+id).css("border-color","red");
		alert('Maximum characters allowed is '+maxchars);
		x.focus();		
		return false; 
	}
	else if(x.value.length < minchars)
	{
		$("#"+id).val("");
		$("#"+id).css("border-color","red");
		alert('Minimum characters allowed is '+minchars);
		x.focus();
		return false; 
	}
	else
	{
		return true; 
	}
}
 

var  myborder;
function isAlphabet(id)
{
	var alphaExp = /^[a-zA-Z ]+$/;	
	var x = document.getElementById(id);	
	if(!x.value.match(alphaExp))
	{
		myborder = x.style.border;	
		alert("No Numeric and Special Characters allowed in " + x.title);		
		x.style.border = "#F00 solid 1px";
		x.focus();	
		return false;
	}
	else
	{
		x.style.border = myborder;	
		return true;
	}	
}

$("input[type='text']").keypress(function() {
	$(this).css("border-bottom","");
});

function validate_form(form_name)
    {
		var return_state = true;
		$('#'+form_name).find("input, select, textarea, checkbox" ).each(function(){
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
					var passwd = $('#password').val();
					var confirm_passwd = $('#confpass').val();
					if(passwd != confirm_passwd)
					{
						alert('Password Mismatch');
						$('#password').focus();
						return_state = false;
						return false;
					}
					else
					{
						$(this).css("border-bottom","1px solid green");
					}
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
					$(this).attr("placeholder", "Enter 10 Digit Mobile Number!")							
					return_state = false;
				}
				else if(isNaN($(this).val()))
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border-bottom","1px solid green");
				}				
			break;
		}
		});
		var captcha = $("input[name='captcha_code']").val();
		if(captcha != "")
		{
			var func  = "verify_captcha";
			$.post("user_ajax_functions.php",
			{
			  captcha: captcha,
			  "async": false,
			  "function": func
			},
			function(data,status){
				if(data == 0)
				{
					$('#'+form_name).submit();
					return_state = true;
				}
				else
				{
					$(".captcha_image").empty();
					$(".captcha_image").append(data);
					$("input[name='captcha_code']").val('');
					$("input[name='captcha_code']").prev().addClass('active');
					$("input[name='captcha_code']").attr("placeholder", "The code is invalid.")
					$("input[name='captcha_code']").css("border-bottom","1px solid red");
					return false;
				}
			});
		}
	return false;
}

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea, checkbox" ).each(function(){
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
				else if(isNaN($(this).val()))
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" is not valid number!")							
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
				else if(isNaN($(this).val()))
				{
					$(this).css("border-bottom","1px solid red");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).attr("placeholder", ""+title+" should be numeric !")							
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
		}
	});
	return return_state;
}

$("#careers-form").click(function(){
	var container = '#enquiry_form';
	if(form_validate_jquery(container)){

		    var formData = new FormData($('form')[0]);
		    formData.append('job_code',$("#jobapplynow option:selected").data('code'));
		    formData.append('action','Submit');
            // var formData = $('form').serialize()+ "&files=" + document.getElementById("chooseFile").files[0];
            $.ajax({
                url: 'inc/contact.php',
                type : 'POST',
                async : true,
                data : formData,
                cache: false,
                contentType: false,
                processData: false,
            success: function(data) {
                    // $("#loader").hide(); 
                     grecaptcha.reset();
                     $(container).find('.g-recaptcha').next('span').remove();    
                     console.log(formData);
                     $(container).find("input[validation], textarea").val('');
                     $(container).find("input[validation], textarea[validation]").removeAttr('style');
                     $(container).find('.file-select').next().next().text('Please upload only.pdf, .docx file format.');
                     $("#jobapplynow").val('');
                     $("#noFile").text('No file chosen...');
           
                     window.location.href = "thankyou.html";
                  
                     // overlayBox('thankyoumsg');
                }
            });
	}

	return false;
});

function check_terms(object) 
{	
	if(!$(object).prop("checked"))	
	{
		alert('Kindly confirm to the terms and conditions of this page!')	
		return false;
	}		
}

//*******Match Password*********
function match_password(pass1, pass2)
{
	if($(pass1).val() != $(pass2).val())
	{
		$(pass1).val("");
		$(pass2).val("")
		
		$(pass1).css("border-bottom","1px solid red");
		$(pass2).css("border-bottom","1px solid red");
		
		alert("Kindly reconfirm your password!");
		
		$(pass1).focus(); 		
	}
	else{
		$(pass1).css("border-bottom","1px solid green");
		$(pass2).css("border-bottom","1px solid green");
	}
	
}

//*******Image Resize*********
function resizeImage_jquery(imgcontainer,reqwidth,reqheight)
{
	var tempimg2 = new Image();
	var newwidth,newheight;
	
	tempimg2.src =$(imgcontainer).attr("src");
	var imgname = $(imgcontainer);
	
	tempimg2.onload = function()
	{
		if(tempimg2.height > tempimg2.width)
		{
			newwidth = reqwidth;
			newheight = tempimg2.height * (newwidth / tempimg2.width)  
		}
		else
		{
			newheight = reqheight;
			newwidth = tempimg2.width * (newheight / tempimg2.height)
		}					
		$(imgname).css({"height":newheight,"width":newwidth})		
	}	
}

//*******LazyLoader*********
function lazyloader(defaultimg)
{	
	$(document).find("img.lazyload").each(function()
	{			
		if(($(this).offset().top - 100) < $(window).height()+$(document).scrollTop()&& ($(this).offset().left) < $(window).width()+$(document).scrollLeft()) 
		{
			if($(this).attr("lazysrc") != "")
			{
				$(this).attr("src",$(this).attr("lazysrc"));
				$(this).attr("lazysrc","")
				$(this).css({opacity:0})
				$(this).load(function(){
					var img = $(this)
					setTimeout(function(){
					resizeImage_jquery($(img),$(img).outerWidth(),$(img).outerHeight())
					$(img).animate({opacity:1}, 500);
					},500)
				})					
			}
		}
		else
		{
			if(typeof(defaultimg) != 'undefined')
			{
				$(this).attr("src",defaultimg)
			}	
		}
		
		$(this).load(function(){
			resizeImage_jquery($(this),$(this).outerWidth(),$(this).outerHeight())	
		})				
	})
	
	$(window).scroll(function(){
		$(document).find("img.lazyload").each(function(){
			if(($(this).offset().top - 100) < $(window).height()+$(document).scrollTop()&& ($(this).offset().left) < $(window).width()+$(document).scrollLeft()) 
			{
				if($(this).attr("lazysrc") != "")
				{
					$(this).attr("src",$(this).attr("lazysrc"));
					$(this).attr("lazysrc","")
					$(this).css({opacity:0})
					$(this).load(function(){
						var img = $(this)
						setTimeout(function(){
						resizeImage_jquery($(img),$(img).outerWidth(),$(img).outerHeight())
						$(img).animate({opacity:1}, 500);
						},500)
					})					
				}
			}
		});
	})	
}

//*******LightBox*********
function initialize_lightbox(container,float)
{
	//float = fixed / absolute
	var bg_element = $("<div class=\"overlay-background\"></div>")
	$(bg_element).css({
		"position": "fixed",
		top:0,
		left:0,
		"background-color": "#000",
		"opacity":0.4,
		"z-index":499,
		"display":"none",		
		height:$(window).innerHeight(),
		width:$(window).innerWidth(),	
	})
	
	$(container).data("position",$(container).css("position"))
	$(container).hide();
		
	var closebtn = $("<img style=\"position:absolute;top:0;right:0;width:50px;height:50px;cursor:pointer;\" src=\"./images/close-icon.png\" />");
	$(closebtn).click(function(){		
		$(this).parent().fadeOut("slow",function(){
			$(this).parent().css("position",$(this).parent().data("position"))
		});
		
		$(bg_element).fadeOut("slow",function(){
			$(this).remove();	
		})			
	})
	
	$(container).append(closebtn)
	
	if(float=="fixed")
	{
		$(container).css("position",float);	
		$(container).css({"top":50,"left":((window.innerWidth - $(container).outerWidth())/2)})
	}
	else
	{
		$(container).css("position",float);	
		$(container).css({"top":(window.innerHeight - $(container).outerHeight())/2,"left":((window.innerWidth - $(container).outerWidth())/2)})
	}		
		
	
	$("html,body").prepend(bg_element)	
	
	$(container).css("z-index",500);
	$(container).fadeIn("slow");
	$(bg_element).fadeIn("slow");		
	
	$('html,body').animate({
          scrollTop: $(container).offset().top
    }, 500);		
}

//*******Pagination*********
//e.g. apply_pagination("#mypagination","li",5)
/*This is the CSS for the bullet icons for pagination*/
/*.bulletcontainer{
	width:100%;
	height:25px;
	text-align:center;	
}

.bulleticon{
	color:#FFF;
	background-color:#F00;
	padding:0px 5px 0px 5px;
	margin:0 5px 0 5px;
	border:#FFF solid 1px;
	border:#333 solid 1px;	
	border-radius:5px;
}

.bulletinactive{
	color:#333 !important;
	background-color:#CCC !important;
}

.bulletinactive:hover{
	color:#FFF !important;
	background-color:#F00 !important;
}*/
 
function apply_pagination(container,itemelement,itemsperpage)
{
	var pageitems = $(container).children(itemelement).length
	var totalpages = Math.ceil(pageitems/itemsperpage);
	var isClicked = false;
	
	if(pageitems <= itemsperpage)
	{
		return;	
	}
	var bulletcontainer = $("<div class=\"bulletcontainer\"></div>") 
	for(var i = 0; i < totalpages; i++)
	{
		if(i == 0)
		{
			var bulleticons = $("<a href=\"javascript:void(0)\" class=\"bulleticon\" position=\""+(i)+"\" itemsperpage=\""+itemsperpage+"\">&nbsp;</a>")
		}
		else
		{
			var bulleticons = $("<a href=\"javascript:void(0)\" class=\"bulleticon bulletinactive\" position=\""+(i)+"\" itemsperpage=\""+itemsperpage+"\">&nbsp;</a>")
		}
		$(bulleticons).click(function(){
			if(isClicked)
			{
				return;	
			}
			isClicked = true;
			$(this).parent().find(".bulleticon").addClass("bulletinactive");
			var position = $(this).attr("position");
			var itemsperpage = $(this).attr("itemsperpage");
			var currposition = (position * itemsperpage);
			$(this).closest(container).children(itemelement).hide();
			for(var i = 0; i < itemsperpage; i++)
			{
				$(this).closest(container).children(itemelement+":nth-child("+(parseInt(currposition)+parseInt(i)+1)+")").fadeIn("slow",function(){
					isClicked = false;	
				})
			}
			$(this).removeClass("bulletinactive");
			$(bulletcontainer).show();	
		}) 
		$(bulletcontainer).append(bulleticons);
	}	
	$(container).append(bulletcontainer)
	
	$(container).children(itemelement).hide();
	for(var i = 0; i < itemsperpage; i++)
	{
		$(container).children(itemelement+":nth-child("+(parseInt(0)+parseInt(i)+1)+")").fadeIn("slow")
	}
	$(bulletcontainer).show();			
}


//*******Accordian*********
//elementattributes class="myaccordian" targetaccordian=".book-txt" initialdirection="up/down"
//.myaccordian is the class on which the target will clide up or down
//targetaccordian is the element that needs to slide up /down
//initialdirection controls the initial behaviour of the targetaccordian
//e.g. <h3 class="myaccordian" targetaccordian="#mypagination" initialdirection="up">My Review</h3>
//*******This is the CSS for up and down arrows of the accordian
/*
.myaccordian{
	position:relative;
	cursor:pointer;	
}
.accordian-arrow-down{
	background-color:blue !important;
	width:10px;
	height:10px;
	border-radius:20px;
	position:absolute;
	right:0;
	top:0;
}
.accordian-arrow-up{
	background-color:red !important;
	width:10px;
	height:10px;
	border-radius:20px;
	position:absolute;
	right:0;
	top:0;
}
*/
function apply_accordian()
{
	$(document).find(".myaccordian").each(function(){				
		var initialdirection = $(this).attr("initialdirection");
		if(initialdirection == "up")
		{
			var arrow = $("<div class=\"myaccordianarr accordian-arrow-down\" direction=\"down\">&nbsp;</div>")
		}
		else
		{
			var arrow = $("<div class=\"myaccordianarr accordian-arrow-down\" direction=\"up\">&nbsp;</div>")
		}		
		$(this).append(arrow);		
		$(this).click(function(){			
			var target = $(this).attr("targetaccordian");
			if($(this).find(".myaccordianarr").attr("direction") == "down")
			{
				$(target).slideUp();
				$(this).find(".myaccordianarr").removeClass("accordian-arrow-down");
				$(this).find(".myaccordianarr").addClass("accordian-arrow-up");
				$(this).find(".myaccordianarr").attr("direction","up")
			}
			else
			{
				$(target).slideDown();
				$(this).find(".myaccordianarr").addClass("accordian-arrow-down");
				$(this).find(".myaccordianarr").removeClass("accordian-arrow-up");				
				$(this).find(".myaccordianarr").attr("direction","down")				
			}			
		})	
		$(this).trigger("click");		
	})
}

//*******Tabination*********
//*******This is the CSS for tabination
/*.tabcontainer{
	border-bottom:#999 solid 1px;
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px !important;	
	font-weight:bold;
}

.tabcontainer ul{
	overflow:auto;
	margin:0;
	padding:0;
	list-style:none;	
}

.tabcontainer ul li{
	float:left;	
	border:#999 solid 1px;
	border-bottom:none;
	min-width:100px;
	text-align:center;
	border-radius:5px 5px 0 0;
	margin:5px 5px 0 5px;
	cursor:pointer;
	background-color:#EBEBEB;
	padding:5px 0 5px 0;
	color:#333;
	transition: background-color 0.5s;
}

.tabcontainer ul .active, .tabcontainer ul li:hover{
	background-color:#CCC;
}*/
//e.g. apply_tabination(".tabination","div")
//.tabination = the container containing the elements to tab
//div(element) = the element that needs to be tabbed

function apply_tabination(container,element)
{
	var totalitems = $(container).children(element).length
	var tabcontainer = $("<div class=\"tabcontainer\"></div>")
	var isClicked = false;
	var tabinationtabs = "<ul>"	
	var count = 0;
	$(container).children(element).each(function(){			
			var tabtitle = $(this).attr("tabtitle")
			if(count == 0)
			{		
				tabinationtabs += "<li class=\"tabinationtabs active\" show=\""+count+"\" >"+tabtitle+"</li>"			
			}else{
				tabinationtabs += "<li class=\"tabinationtabs\" show=\""+count+"\">"+tabtitle+"</li>"	
			}
			count++;		
		})		
	tabinationtabs += "</ul> <div class='clear'></div>"
	$(tabcontainer).html(tabinationtabs);
	$('.custom-pager .container').append(tabcontainer);
	
	$(tabcontainer).find("li").click(function(){
		
		isClicked = true;
		$('.tabination').find(element).hide();
		$(this).parents('ul').find("li").removeClass("active");
		$(this).addClass("active");
//		$(this).parents('.tabcontainer').show();
		
		$('.tabination').find(element+":eq("+$(this).attr("show")+")").fadeIn("slow",function(){
			isClicked = false;	
		});		
	})
	
	$(container).children(element).hide();
	$(container).children(element+":lt(1)").show();	
}

//*******Carousel*********
/*
.caritem{
	position:absolute;	
}

.carousel-leftbtn{
	position:absolute;
	height:50px;
	width:50px;
	background-color:#00F;
	border-radius:100px;
	cursor:pointer;
}

.carousel-rightbtn{
	position:absolute;
	height:50px;
	width:50px;
	background-color:#00F;
	border-radius:100px;
	cursor:pointer;
}

*/
function apply_carousel(container,timing)
{
	var count = 0;
	var currentitem = 0;
	var t;
	var clickenable = true;	
	
	var leftbtn = $("<div class=\"carousel-leftbtn\"></div>")	
	var rightbtn = $("<div class=\"carousel-rightbtn\"></div>")		
		
	
	$(container).find(".caritem").each(function(){
		var img = $(this).find("img");
		//resizeImage_jquery(img,$(container).outerHeight()/2,$(container).outerWidth()/2)		
	})
					
	$(container).find(".caritem").hide();
		
	var moveforeward = function(){
			clickenable = false;
			$(container).children(".caritem:eq("+currentitem+")").css("left",0)
			$(container).children(".caritem:eq("+currentitem+")").css("z-index",90);
			$(container).children(".caritem:eq("+currentitem+")")
			$(container).children(".caritem:eq("+currentitem+")").animate({
				left:-$(container).outerWidth()
			},timing/4,function(){
				$(this).hide();
				clickenable = true;	
				if(typeof($(this).attr("postslide")) != "undefined")
				{
					$(this).removeClass($(this).attr("postslide"))	
				}	
			})
					
			if(currentitem >= ($(container).find(".caritem").length - 1))
			{
				currentitem = 0;	
			}
			else
			{
				currentitem++;
			}
			
			$(container).children(".caritem:eq("+(currentitem)+")").css("left",$(container).outerWidth())
			$(container).children(".caritem:eq("+(currentitem)+")").show()
			$(container).children(".caritem:eq("+currentitem+")").css("z-index",100);
			$(container).children(".caritem:eq("+(currentitem)+")").animate({
				left:0
			},timing/4,function(){
				if(typeof($(this).attr("postslide")) != "undefined")
				{
					$(this).addClass($(this).attr("postslide"))	
				}	
			})
					
		}
	
	var movebackward = function(){
			clickenable = false;
			$(container).children(".caritem:eq("+currentitem+")").css("left",0)
			$(container).children(".caritem:eq("+currentitem+")").css("z-index",100);
			$(container).children(".caritem:eq("+currentitem+")").animate({
				left:$(container).outerWidth()
			},timing/4,function(){
				$(this).hide();	
				clickenable = true;	
				if(typeof($(this).attr("postslide")) != "undefined")
				{
					$(this).removeClass($(this).attr("postslide"))	
				}		
			})
					
			if(currentitem < 1)
			{
				currentitem = ($(container).find(".caritem").length - 1);	
			}
			else
			{
				currentitem--;
			}
			
			$(container).children(".caritem:eq("+(currentitem)+")").css("left",-$(container).outerWidth())
			$(container).children(".caritem:eq("+(currentitem)+")").show()
			$(container).children(".caritem:eq("+currentitem+")").css("z-index",90);
			$(container).children(".caritem:eq("+(currentitem)+")").animate({
				left:0
			},timing/4,function(){
				if(typeof($(this).attr("postslide")) != "undefined")
				{
					$(this).addClass($(this).attr("postslide"))	
				}	
			})
					
		}
	
	$(container).mouseenter(function(){
		clearInterval(t)
		$(rightbtn).addClass("showbtn");
		$(leftbtn).addClass("showbtn");
	})
		
	$(container).mouseout(function(){
		clearInterval(t)
		t = setInterval(moveforeward,timing);
		$(rightbtn).removeClass("showbtn");
		$(leftbtn).removeClass("showbtn");	
	})
	
	$(leftbtn).mouseenter(function(){
		clearInterval(t)		
	})
	
	$(rightbtn).mouseenter(function(){
		clearInterval(t)
	})
	
	$(container).mouseover(function(){
		$(rightbtn).addClass("showbtn");
		$(leftbtn).addClass("showbtn");
	})
	
	
	$(leftbtn).click(function(){
		if(clickenable)
		{
			movebackward()
		}
	})
	
	$(rightbtn).click(function(){
		if(clickenable)
		{
			moveforeward()
		}
	})
	
	$(leftbtn).css("z-index",110);
	$(rightbtn).css("z-index",110);
	
	$(container).append(leftbtn)
	$(container).append(rightbtn)
	
	var leftmargin = ($(leftbtn).outerWidth()/2)+"px"
	$(leftbtn).css({
		top:(($(container).outerHeight() - $(leftbtn).outerHeight())/2)+"px",
		left:leftmargin
	})
	
	var rightmargin = (($(container).outerWidth() - $(rightbtn).outerWidth())-($(rightbtn).outerWidth()/2))+"px"
	$(rightbtn).css({
		top:(($(container).outerHeight() - $(rightbtn).outerHeight())/2)+"px",
		left: rightmargin
	})
	
	$(container).children(".caritem:eq("+currentitem+")").show()
	t = setInterval(moveforeward,timing);	
}
//*******Carousel*********

//*******Apply Hide Show*********
function apply_hideshow(element)
{
	var show = $(element).attr("show");
	var hide = $(element).attr("hide")
	
	var show = show.split("|");
	var hide = hide.split("|")
	
	for(var i = 0; i < show.length; i++)
	{
		$(show[i]).fadeIn("slow",function(){
			if(typeof($(this).attr("postshow")) != "undefined")
			{
				$(this).addClass($(this).attr("postshow"))	
			}
		});	
	}
	
	for(var i = 0; i < hide.length; i++)
	{
		$(hide[i]).fadeOut("slow",function(){
			if(typeof($(this).attr("postshow")) != "undefined")
			{
				$(this).removeClass($(this).attr("postshow"))	
			}	
		});	
	}
}
//*******Apply Hide Show*********

//*******Apply Lazy Appear*********
function apply_lazyappear()
{	
	$(document).find(".lazyappear").each(function(){
		var appear = $(this).attr("appear");
		$(this).data("appear","no")		
				
		$(this).addClass($(this).attr("preappear"))											
	})
	
	$(window).scroll(function(){
		$(document).find(".lazyappear").each(function(){
			if(($(this).offset().top - 50) < $(window).height()+$(document).scrollTop()&& ($(this).offset().left) < $(window).width()+$(document).scrollLeft()) 
			{
				if($(this).data("appear") == "no")
				{
					$(this).data("appear","yes")								
					$(this).addClass($(this).attr("postappear"))																			
				}
			}			
		})
	})
}
//*******Apply Lazy Appear*********

function alertval(title, desc){
	$("body").append("<div id='dialoconfirm' title='"+title+"' style='display:none;'><p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>"+desc+"</p></div>").css("overflow","hidden");
	$( "#dialoconfirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "OK": function() {
	 	 $("body").css("overflow","auto");
          $( this ).dialog( "close" );
        }
      }
    });	
}
/******** Display Alert Message on Mail Sent *****************/
$(window).load(function(){
var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var decodedparameter = decodeURIComponent(parameter)
var param = decodedparameter.split('=');
if(param[0] == "enquiry")
{
	alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
}
})
/******** Display Alert Message on Mail Sent *****************/
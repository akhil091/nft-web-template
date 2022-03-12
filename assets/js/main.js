
// 	console.log("vcdf");
// window.addEventListener("scroll", (event) => {
// 	var doc = document.documentElement;
// var w = window;

// var prevScroll = w.scrollY || doc.scrollTop;
// var curScroll;
// var direction = 0;
// var prevDirection = 0;

// var header = document.getElementById('site-header');



//   curScroll = w.scrollY || doc.scrollTop;
//   if (curScroll > prevScroll) {
// 	//scrolled up
// 	direction = 2;
// 	console.log("up");
//   }
//   else if (curScroll < prevScroll) {
// 	//scrolled down
// 	direction = 1;
// 	console.log("down");

//   }

//   if (direction !== prevDirection) {
// 	toggleHeader(direction, curScroll);
//   }

//   prevScroll = curScroll;


// var toggleHeader = function(direction, curScroll) {
//   if (direction === 2 && curScroll > 52) {

// 	//replace 52 with the height of your header in px

// 	header.classList.add('hide');
// 	prevDirection = direction;
//   }
//   else if (direction === 1) {
// 	header.classList.remove('hide');
// 	prevDirection = direction;
//   }
// };


// var doc = document.documentElement;
// var w = window;

// var prevScroll = w.scrollY || doc.scrollTop;
// var curScroll;
// var direction = 0;
// var prevDirection = 0;

// var header = document.getElementById('site-header');

// var checkScroll = function() {

//   /*
//   ** Find the direction of scroll
//   ** 0 - initial, 1 - up, 2 - down
//   */

//   curScroll = w.scrollY || doc.scrollTop;
//   if (curScroll > prevScroll) {
// 	//scrolled up
// 	direction = 2;
// 	console.log("up");
//   }
//   else if (curScroll < prevScroll) {
// 	//scrolled down
// 	direction = 1;
// 	console.log("down");

//   }

//   if (direction !== prevDirection) {
// 	toggleHeader(direction, curScroll);
//   }

//   prevScroll = curScroll;
// };

// var toggleHeader = function(direction, curScroll) {
//   if (direction === 2 && curScroll > 52) {

// 	//replace 52 with the height of your header in px

// 	header.classList.add('hide');
// 	prevDirection = direction;
//   }
//   else if (direction === 1) {
// 	header.classList.remove('hide');
// 	prevDirection = direction;
//   }
// };
// });

// List of sentences
var _CONTENT = [
	"Level 5 autonomy",
	"Affordable shared mobility",
	"Safer than a human driver",
	"Fully Driverless Cars"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


//navbar animation

// // const body = document.body;
// const triggerMenu = document.querySelector(".trigger-menuuu");
// //const nav = document.querySelector(".page-header nav");
// const menu = document.querySelector(".page-headerrr .menu");
// const lottieWrapper = document.querySelector(".lottie-wrapper");
// const lottiePlayer = document.querySelector("lottie-player");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

// lottieWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   triggerMenu.click();
//   body.classList.toggle("menu-open-with-lottie");
// });

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     triggerMenu.classList.remove(scrollUp);
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//     // down
//     triggerMenu.classList.remove(scrollUp);
//     triggerMenu.classList.add(scrollDown);
//     // lottiePlayer.play();
//   } else if (
//     currentScroll < lastScroll &&
//     triggerMenu.classList.contains(scrollDown)
//   ) {
//     // up
//     triggerMenu.classList.remove(scrollDown);
//     triggerMenu.classList.add(scrollUp);
//     // lottiePlayer.stop();
//   }
//   lastScroll = currentScroll;
// });




// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
	var video = document.getElementById(video_id).src;
	document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
	document.getElementById(div).style.display = 'block';
  }

  // Hiding the lightbox and removing YouTube autoplay
  function hideVideo(div,video_id) {
	var video = document.getElementById(video_id).src;
	var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
	document.getElementById(video_id).src = cleaned;
	document.getElementById(div).style.display = 'none';
  }

  $(function() {
    $("#accordion").accordion({
      animate: 400,
      active: 0,
      collapsible: true
    });
});


$(function() {
	$('#id1').click(function(e){
	    $("#bg").attr('src',"https://images.unsplash.com/photo-1507890558501-9fd4b3495ae1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=052c2d0ca789cea722191c5423649cdd&auto=format&fit=crop&w=500&q=60");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id1').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
	});
	$('#id2').click(function(e){
	    $("#bg").attr('src',"https://ununsplash.imgix.net/photo-1418225043143-90858d2301b4?fit=crop&fm=jpg&q=75&w=1000");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id2').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
	});
	$('#id3').click(function(e){
		e.preventDefault();
	    $("#bg").attr('src',"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id3').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
		;
	});
	$('#id4').click(function(e){
		e.preventDefault();
		$("#bg").toggleClass("image_anim");
	    $("#bg").attr('src',"https://images.unsplash.com/photo-1627659032600-f12943af28f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id4').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
	});
	$('#id5').click(function(e){
		e.preventDefault();
		$("#bg").toggleClass("image_anim");
	    $("#bg").attr('src',"https://images.unsplash.com/photo-1627534640676-fbcac1e4bac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id5').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
	});
	$('#id6').click(function(e){
		e.preventDefault();
		$("#bg").toggleClass("image_anim");
	    $("#bg").attr('src',"https://images.unsplash.com/photo-1627656755357-b4650cc527c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80");
		$("#bg").removeClass("image_anim");
		setTimeout(function(){
			if ( $('#id6').hasClass('ui-accordion-header-active') ) {
			$("#bg").addClass("image_anim");
		  }},100);
	});
   });

//    const scrollContainer = document.querySelector(".slide-container");
//    const y = document.getElementById(".lastdiv");

//    scrollContainer.addEventListener("wheel", (evt) => {
// 		evt.preventDefault();
// 	   scrollContainer.scrollLeft += evt.deltaY;
//    });

var windowWidth = window.innerWidth;
var horLength = document.querySelector(".element-wrapper").scrollWidth;
var distFromTop = document.querySelector(".horizontal-section").offsetTop;
var scrollDistance = distFromTop + horLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horLength + "px";

window.onscroll = function(){
  var scrollTop = window.pageYOffset;

  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  }
}
$( document ).ready(function() {
    console.log( "ready!" );

if (window.matchMedia('(max-width: 768px)').matches)
{
    $('.horizontal-section').removeClass();
	$('.element-wrapper').removeClass();
	$('.viewport').addClass();
}
});



"use strict";

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false; // TOGGLE MENU ACTIVE STATE

menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen; // toggle a11y attributes and active class

  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
}); // TRAP TAB INSIDE NAV WHEN OPEN

nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  } // listen for tab press and move focus
  // if we're on either end of the navigation


  const menuLinks = menu.querySelectorAll('.nav__link');

  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});








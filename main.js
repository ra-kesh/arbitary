$(document).ready(function(){

	$(document).on("scroll", onScroll);

	// to be looked upon later ..still not cleared 100% how it is working//

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		
		$('aside li a').each(function () {
			var currLink = $(this);
			// console.log(currLink)
			var refElement = $(currLink.attr("href"));
			// console.log(refElement)
			// console.log(scrollPos,"scrollpos")
			// console.log(refElement.position().top,"ref top")
			// console.log(refElement.height(),"ref height")
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				currLink.addClass("li-active");
			} else {
				currLink.removeClass("li-active");
			}
		});
	}

	$(document).scroll(function () {
		var navbar = $('aside');
		var content = $('.content');
		var scroll = $(document).scrollTop();

		if (scroll >= 650) {
			navbar.addClass('fixed');
			content.addClass('margin');
		} else {
			navbar.removeClass('fixed');
			content.removeClass('margin');
		}

	});
})


	// to be looked upon later ..why not working//


// let AllNavLinks = document.querySelectorAll(".aside li a");
// let AllSections = document.querySelectorAll("main section")

// window.addEventListener('scroll',event=>{

	// var fromTop = window.scrollY;

	// AllNavLinks.forEach(link => {
	// 	let section = document.querySelector(link.hash);

	// 	if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
	// 		link.classList.add("li-active");
	// 	} else {
	// 		link.classList.remove("li-active");
	// 	}
	// })

	// var nav = document.querySelector('.aside')
	// var content = document.querySelector('.content')
	// var scrollTp = document.scrollTop();

	// if (scrollTp >= 551) {
	// 	nav.addClass('fixed');
	// 	content.addClass('margin');
	// } else {
	// 	nav.removeClass('fixed');
	// 	content.removeClass('margin');
	// }

// })


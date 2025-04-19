$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})
	// navbar js end ---


	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

})


// home-banner slider js start----
var swiper = new Swiper(".product-single-img-slider-thumb", {
	freeMode: true,
	loop: true,
	spaceBetween:18.5,
	slidesPerView: 5,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-single-img-slider", {
	autoHeight: true,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	thumbs: {
		swiper: swiper,
	},
});
// home-banner slider js start----

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// modal js start---
var body = document.querySelector("body");
var modal = document.querySelector(".masurement-modal");
var measurement_guide_modal_btn = document.querySelector(".size-guide-open-btn");
var closeButton = document.querySelector(".modal-close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
	body.classList.toggle("active");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

measurement_guide_modal_btn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// modal js end---
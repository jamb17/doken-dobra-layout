// header mobile menu
$('.open-mob-menu').click(function() {
    $(this).toggleClass('active');
    $('.navigation').toggleClass('active');
});

$('a, .btn-white').click(function() {
    $('.open-mob-menu').removeClass('active');
    $('.navigation').removeClass('active');
});

$(window).on("scroll", function () {
    $("header").toggleClass("fixed", $(this).scrollTop() > 1);
});

// tooltips
$(document).ready(function () {
    let count = Number($('.item-nft:nth-child(2) .info .stats span').text());
    let width = count * 0.1;
    document.querySelector('.status').style.width = width + '%';
    console.log(width);
});

// open pop up
$('header .btn-white').click(function() {
    $('.pop-up').addClass('open');
    setTimeout(function() {
        $('.content').addClass('open');
    }, 100);
});

// close pop up
$('.close-popup').click(function() {
    $('.content').removeClass('open');
    setTimeout(function() {
        $('.pop-up').removeClass('open');
    }, 100);
});

// copy link from pop up
$('.copy').click(function() {
    var form_text = $('.form_text');
    this.style.border = "2px solid #C5EC00";
    navigator.clipboard.writeText(form_text.text());
})

// slider cards hover effect
$('.swiper-slide .item-nft').hover(function() {
    var $this = $(this);
    var tips = $this.children('.tips');
    $this.toggleClass('hover');
    // tips.children('.tip').toggleClass('hover');
});

$('.funds.pc .item-nft').hover(function() {
    var $this = $(this);
    var tips = $this.children('.tips');
    var name = $this.children('.bottom');
    $this.toggleClass('hover');
    tips.children('.tip').toggleClass('hover');
    name.children('.name').toggleClass('hover');
});

$('.icon').click(function() {
    var pre_nft = $('.client-pre-nft');
    navigator.clipboard.writeText(pre_nft.text());
});

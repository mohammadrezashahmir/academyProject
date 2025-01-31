$(document).ready(function () {

    $(".related-blog").slick({
        dots: true,
        rtl: true,
        arrows: false,
    })
    $('.slider-for').slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        arrows: false,
    });
    $('.slider-nav').slick({
        rtl: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        centerMode: true,
        prevArrow: '<i class="fa-light fa-circle-chevron-right arrow-right"></i>',
        nextArrow: '<i class="fa-light fa-circle-chevron-left arrow-left"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
})
$('body').addClass('persian');
$('html').persianNum();

$("#best-blogs-content").owlCarousel({
    rtl: true,
    autoWidth: true,
    margin: 20,
    nav: true,
    navContainer: '.owl-nav',
    navText: [
        ` <i class="fa-light fa-arrow-right"></i>`,
        `<i class="fa-light fa-arrow-left"></i>`,
    ],
})
$("#subject-tab").owlCarousel(
    {
        rtl: true,
        autoWidth: true,
        margin: 10,
        nav: false,
    }
)
// sticky-nav:
window.addEventListener('scroll', (event) => {
    var navbar = $(".navbar-overlay");
    navbar.toggleClass('sticky', window.scrollY > 0)
})
// dropdown:
$('.dropdown-toggle').dropdown();
$(".show-sub-catergory-dropdown").each((index, element) => {
    $(element).on('click', (e) => {
        var btn = $(e.currentTarget)
        const sub_content = btn.next()
        const parent = btn.parent()
        if (sub_content.css('display') === 'none') {
            sub_content.show();
            parent.css('background-color', "#FDFAF3");
            btn.css('color', '#FF2D30');
            btn.addClass('angle-up');

        } else if (sub_content.css('display') === 'block') {
            sub_content.hide();
            parent.css('background-color', "#ffffff");
            btn.css('color', '#101336');
            btn.removeClass('angle-up')
        }
        e.stopPropagation();
        e.preventDefault();
    })
})
// timeline:
$('#field-history-timeline').horizontalTimeline({
    iconClass: {
        "base": "fal mx-2 fa-2x",
        "prev": "fa-chevron-circle-left",
        "next": "fa-chevron-circle-right",
    },
    useScrollBtns: false,
    useScrollWheel: true,
    useKeyboardKeys: true
});
// var active_collapse_btn = $('.active-on-open')
// active_collapse_btn.on('click', (event) => {
//     active_collapse_btn.each((index, element) => {
//         $(element).removeClass('actived-color')
//     })
//     if (event.currentTarget.getAttribute('aria-expanded') == 'true') {
//         event.currentTarget.classList.add('actived-color')
//     }
// })

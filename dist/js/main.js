/* ISOTOPE AND MASONRY */
function useIsotope(event) {

    // init Isotope
    let isotopeGrid = new Isotope( '#portfolio-imgs-inner', {
        itemSelector: '.item',
        masonry: {
            // use element for option
            columnWidth: '.item', 
            itemSelector: '.item',
            transitionDuration: '0.5s',
            gutter: 8,
            horizontalOrder: true,
        }
    });

    let applyFilterFromLink = (linkObject) => {
        let filterValue = linkObject.dataset.filter;
        isotopeGrid.arrange({ filter: filterValue });
    };

    let filterGrid = function( event ) {
        event.preventDefault();
        applyFilterFromLink(this);
        let activeBtn = document.querySelector('.filter-btn--active');
        if (activeBtn) {
            activeBtn.classList.remove('filter-btn--active');
        }
        this.classList.add('filter-btn--active');
    };

    document.querySelectorAll('.filter-btn').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });

    let activeBtn = document.querySelector('.filter-btn--active');
    applyFilterFromLink(activeBtn);
}
document.addEventListener('DOMContentLoaded', useIsotope);

/* END ISOTOPE */

/* SLICK SLIDER */
$(document).ready(function(){
    $('.team__carousel').slick({
        arrows: false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.comments').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});
/* END SLICK SLIDER */

/* GOOGLE MAP */
var map;
function initMap() {
    map = new google.maps.Map(document.querySelector('.contact-us__map'), {
        center: {lat: 49.5685276, lng: 34.5854317},
        zoom: 17,
        scrollwheel: false
    });

    var image = 'beetroot-marker.png';
    var marker = new google.maps.Marker({
        position: {lat: 49.5685276, lng: 34.5854317},
        map: map,
        icon: image
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'We Are Here!'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
document.addEventListener('DOMContentLoaded', initMap);
/* GOOGLE MAP END*/

/* SMOOTH SCROLL */
$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
    });
    return false;
});
/* SMOOTH SCROLL END*/
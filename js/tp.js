$(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(500, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#' + panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });

    $(function() {
        $.getJSON('reviews.json', function(data) {
            console.log('success');
            $.each(data.reviews, function(i, rev) {
                $('#panel' + i).append('<div id="userBlock">' + '<img class="userAvatar" src=" ' + rev.img + ' "/>' + '<span class="user">' + rev.fullName + ',' + rev.location + '</span>' + '<img class="userRating" src=" ' + rev.starRating + ' "/>' + '</div>' + '<div class="reviewHeader">' + rev.reviewTitle + '</div>' + '<div class="reviewBody">' + rev.reviewBody + ' ');
            });
        }).error(function() {
            console.log('error');
        });
    });


});

!(function ($) {
    "use strict";

    $(document).ready(function () {
        //<--------sub menu
        $('.href-long-term-plan').click(function () {
            var target = $('#long-term-plan');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 130
                }, 300);
            }
        });

        $('.href-life-planning').click(function () {
            var target = $('#life-planning');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 130
                }, 300);
            }
        });
    });
})(jQuery);
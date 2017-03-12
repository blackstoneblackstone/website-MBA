/**
 * Created by lihb on 5/17/16.
 */

var $window = $(window);
$(function () {
    $window.on('scroll', revealOnScroll);
    $(".yy-click").click(function () {
        doyoo.util.openChat();
        doyoo.util.accept();
        return false;
    });
    $("td").click(function () {
        doyoo.util.openChat();
        doyoo.util.accept();
        return false;
    });
    $(".c6-img").hover(function () {
        var thisD = $(this);
        thisD.addClass("animated pulse");
        setTimeout(function () {
            thisD.removeClass("animated pulse");
        }, 700);
    });
    setInterval(function () {
        $(".c1-img1").removeClass("bounceInDown fadeIn");
        setTimeout(function () {
            $(".c1-img1").addClass("fadeIn");
        }, 200);
    }, 3000);
    var i = 0;
    setInterval(function () {
        $(".c6-img").each(function () {
            i++;
            $(this).attr("src", "img/pic/" + i + ".jpg");
            $(this).hide();
            $(this).fadeIn();
            if (i == 16) {
                i = 0;
            }
        });
    }, 3000);

    startmarquee(40, 10, 1000);
});


function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
                window.setTimeout(function () {
                    $this.show();
                    $this.addClass('animated ' + $this.data('animation'));

                }, parseInt($this.data('timeout'), 10));
            } else {
                $this.addClass('animated ' + $this.data('animation'));
            }
        }
    });

    // Hidden...
    $(".revealOnScroll.animated").each(function (index) {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated fadeInUp bounceInLeft bounceInDown rotateIn bounceInUp flipInX lightSpeedIn');
            $this.hide();
        }
    });
}

function startmarquee(lh, speed, delay) {
    var t;
    var oHeight = 300;
    /** div的高度 **/
    var p = false;
    var o = document.getElementById("imgs");
    var preTop = 0;
    o.scrollTop = 0;
    function start() {
        t = setInterval(scrolling, speed);
        o.scrollTop += 1;
    }

    function scrolling() {
        if (o.scrollTop % lh != 0
            && o.scrollTop % (o.scrollHeight - oHeight - 1) != 0) {
            preTop = o.scrollTop;
            o.scrollTop += 1;
            if (preTop >= o.scrollHeight || preTop == o.scrollTop) {
                o.scrollTop = 0;
            }
        } else {
            clearInterval(t);
            setTimeout(start, delay);
        }
    }

    setTimeout(start, delay);
}

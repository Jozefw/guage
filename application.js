$(document).ready(function() {

    setInterval(function() {
        $("#needle").each(function() {
            var a = Math.floor(Math.random() * 270 + 1);
            if (a <= 60) {
                $("#bkg").css('background-color', 'green');
            }
            else if(a >= 61 && a <= 120){
            	$('#bkg').css('background-color','orange');

            } else {$('#bkg').css('background-color','red')}


            $(this).css(
                'transform', 'rotate(' + a + 'deg)');
        });




    }, 950);
});
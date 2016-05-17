$(document).ready(function() {

    setInterval(function() {
        $("#needle").each(function() {
            var a = Math.floor(Math.random() * 225 + 1);

            if (a <= 80) {
                $("#bkg").css('background-color', 'green');
            }
            else if(a >= 81 && a <= 160){
            	$('#bkg').css('background-color','orange');

            } else {$('#bkg').css('background-color','red')}


            // $(this).css(
            //     'transform', 'rotate(' + a + 'deg)');
        	$(this).animate({borderSpacing: 90},{
        		step: function(now,fx){
        			$(this).css('transform','rotate('+now+'deg)');
        		},
        		duration:'slow'
        	},'linear');
        });




    }, 1000);
});
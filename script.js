$(document).ready(function() {
    
    $.getJSON('https://api.myjson.com/bins/1eyqeh', function(data) {
    console.log(data);
    var output = '<table class="container"><thead><th>id</th><th>name</th><th>age</th><th>gender</th><th>company</th><th>e-mail</th><th>phone</th><th>address</th><th>balance</th><th class="isActive">isActive</th><th>discount</th></thead><tbody>';
    $.each(data, function(key, val) {
        if (val.isActive == true) {
            var active = "active";
            var discount = "NO";
        } else {
            var active = "N/a";
            var discount = (val.balance.replace(',', '') * 0.1).toFixed(2);
        }
        output += '<tr><th scope="row"><div>' + val.index + '</div></th><td><div>' + val.name + '</div></td><td><div>' + val.age + '</div></td><td><div>' + val.gender + '</div></td><td><div>' + val.company + '</div></td><td><div>' + val.email + '</div></td><td><div>' + val.phone + '</div></td><td><div>' + val.address + '</div></td><td class="balance"><div>' + val.balance + '</div></td><td class="isActive"><div>' + active + '</div></td><td class=""><div>' + discount + '</div></td></tr>';
    });
    output += '</tbody></table>';
    $('#data-wrap').html(output);


        $(".count-active span").text($("td.isActive:contains('active')").length);
        $(".count-inactive span").text($("td.isActive:contains('N/a')").length);
        $(".count-negative span").text($("td.balance:contains('-')").length);

        $("td.balance:contains('-')").parents('tr').css('background-color', 'rgba(255, 0, 0, 0.14)');
        $("td:contains('NO')").css('color', 'red').css('font-weight', 'bold');
        $("td:last-child:not(:contains('NO'))").css('color', '#0DFF92').css('font-weight', 'bold');

        $('.all').change(function() {
            $(".inactive").removeClass("inactive");
        });	

        $('.negative').change(function() {
            $(".inactive").removeClass("inactive");
            $("td.balance:not(:contains('-'))").parents('tr').toggleClass('inactive');
        });	

        $('.inactive').change(function() {
            $(".inactive").removeClass("inactive");
        $("td.isActive:not(:contains('N/a'))").parents('tr').toggleClass('inactive');
        });

       


    calc_total();

    function calc_total() {
        var sum = 0;
        $(".balance").each(function() {
            sum += parseFloat($(this).text().replace(',', ''));
        });
        $('.count-balance span').text(sum);
    }

});


});
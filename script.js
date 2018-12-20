$(document).ready(function() {
    // fetch data
    $.getJSON('https://api.myjson.com/bins/1eyqeh', function(data) {
        // 1. begin with table 
        // 2. drop table into output
        var output = '<table class="container"><thead><th>id</th><th>name</th><th>age</th><th>gender</th><th>company</th><th>e-mail</th><th>phone</th><th>address</th><th>balance</th><th class="isActive">isActive</th><th>discount</th></thead><tbody>';
        // 3. loop fetched data for every customer
        $.each(data, function(key, val) {
            // 4. sort customers as active/inactive  
            if (val.isActive == true) {
                // 5. bind specific values to fields 
                // 6. get active customers
                var active = "active";
                var discount = "NO";
            } else {
                // 7. bind specific values to custom fields 
                // 8. get inactive customers 
                // 9. calculate discount
                var active = "N/a";
                var discount = (val.balance.replace(',', '') * 0.1).toFixed(2);
            }
            // 10. process fetched data and put into table body 
            // 11. drop data loop into output
            output += '<tr><th scope="row"><div>' + val.index + '</div></th><td><div>' + val.name + '</div></td><td><div>' + val.age + '</div></td><td><div>' + val.gender + '</div></td><td><div>' + val.company + '</div></td><td><div>' + val.email + '</div></td><td><div>' + val.phone + '</div></td><td><div>' + val.address + '</div></td><td class="balance"><div>' + val.balance + '</div></td><td class="isActive"><div>' + active + '</div></td><td class=""><div>' + discount + '</div></td></tr>';
        });
        // 12. end table and finish whole output
        output += '</tbody></table>';
        // 13. define position to deploy output
        $('#data-wrap').html(output);
        // 14. define positions for customer statistics 
        // 15. count customer statistics
        $(".count-active span").text($("td.isActive:contains('active')").length);
        $(".count-inactive span").text($("td.isActive:contains('N/a')").length);
        $(".count-negative span").text($("td.balance:contains('-')").length);
        // 16. find customers with negative balance
        // 17. highlight all records with negative balance 
        $("td.balance:contains('-')").parents('tr').css('background-color', 'rgba(255, 0, 0, 0.14)');
        $("td:contains('NO')").css('color', 'red').css('font-weight', 'bold');
        // 18. highlight discount field
        $("td:last-child:not(:contains('NO'))").css('color', '#0DFF92').css('font-weight', 'bold');
        // 19. activate data filter on radio buttons
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
        // 20. calculate total-balance 
        function calc_total() {
            var sum = 0;
            $(".balance").each(function() {
                sum += parseFloat($(this).text().replace(',', ''));
            });
            $('.count-balance span').text(sum);
        }
        calc_total();
    });
});
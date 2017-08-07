$(document).ready(function() {
    console.log('jquery sourced');
    $('#clearButton').on('click', function() {
        $('#firstInput').val('');
        $('#secondInput').val('');
    });

    //when a calculation is clicked
    $('.calcButton').on('click', function() {
        //opp is the key that we attached with data-opp
        //$(this) represents the button clicked on
        console.log('button clicked', $(this).data('opp'));
        console.log($('#firstInput').val());
        console.log($('#secondInput').val());
        var firstNumber = $('#firstInput').val();
        var secondNumber = $('#secondInput').val();
        var opp = $(this).data('opp');
        doCalculation(firstNumber, secondNumber, opp);
    });
});
// opp is the operator
function doCalculation(x, y, opp) {
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: { x: x, y: y, opp: opp },
        success: function(response) {
            console.log(response);
            getResults();
        }
    });
}

function getResults() {
    $.ajax({
        method: 'GET',
        url: '/calculator',
        success: function(response) {
            console.log(response);
            $('#mathResult').text(response.result);
        }
    })
}
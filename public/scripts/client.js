$(document).ready(function() {
    console.log('jquery sourced');

    $('#addButton').on('click', function() {
        console.log('Add button click');
        console.log($('#firstInput').val());
        console.log($('#secondInput').val());
        var firstNumber = $('#firstInput').val();
        var secondNumber = $('#secondInput').val();
        doCalculation(firstNumber, secondNumber, 'add');
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

        }
    });
}
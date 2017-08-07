$(document).ready(function() {
    console.log('jquery sourced');

    $('#addButton').on('click', function() {
        console.log('Add button click');
        console.log($('#firstInput').val());
        console.log($('#secondInput').val());

    })
})
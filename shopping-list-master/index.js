function newSubmit() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        const newItemName = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
    });
}

function addButton() {
    function getVal() {
        let val = $("input").val();
        console.log(val)
        $("form").append(val)
    }

    $("button").click(getVal);

    $("input").keydown(getVal);
}

function deleteButton() {
    $('.shopping-item-delete').on('click', function(event) {
        $(this).closest('li').remove();
    });
}
//$('.shopping-list')on.('click', `.shopping-item-toggle`,)
function strikeCheck() {
    $(".shopping-item-toggle").click(function(event) {
        $(this).closest('li').toggleClass("shopping-item__checked")
    })
}

window.onload = function() {
    console.log('hey')
};
$(function() {
        console.log('hey')
    })
    // 
$(newSubmit);
$(addButton);
$(deleteButton);
$(strikeCheck);
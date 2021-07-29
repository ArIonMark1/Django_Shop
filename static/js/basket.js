window.onload = function() {
    $('.basket_list').on('click', 'input[type="text"]', function() {
        let t_href = event.target;

        $.ajax({
            url: '/baskets/edit/' + t_href.name + '/' +t_href.value + '/',
            success: function (data) {
                $('.basket_list').html(data.result);
            }

        });
        event.preventDefault();
    })
}
window.onload = function () {
    $(document).ready(function () {
        $('.basket_list').on('click', 'button[class="plus"]', function () {
            let targ = event.target;


            $.ajax({
                url: '/baskets/edit/' + targ.name + '/' + (++targ.value) + '/',
                success: function (data) {
                $('.basket_list').html(data.result);
            }
            })
            event.preventDefault();
            // let itemNum = $(this).attr('id');
            // console.log(itemNum)
            //
            // let act = $(itemNum).val('quantity')

            // .ajax({
            //         url: `/baskets/edit/${item}/${++value}/ `,
            //
            //     })
            //
            // $("#myinput" + itemNum).trigger('submit');

        });    // захват по класу  кнопки "plus" и логика по клику


        $('.minus').on('click', removeFromBasket);  // так же с кнопкой минус


        // function addToBasket() {
        //     let item = $(this).attr('data-id')
        //     let value = $(this).attr('value')
        //     // console.log(+item)
        //     $.ajax({
        //         url: `/baskets/edit/${item}/${++value}/ `,
        //
        //     })
        // }

    })

    // // после загрузки всех данных сайта
    // $('.plus').on('click', addToBasket); // захват по класу  кнопки "plus" и логика по клику
    // $('.minus').on('click', removeFromBasket);  // так же с кнопкой минус
    //
    //
    // function addToBasket() {
    //     let id = $(this).attr('data-id')
    //     let val = $(this).attr('value')
    //
    //     $.ajax({
    //         url: '/baskets/edit/' + id + '/' + (parseInt(val) + 1) + '/', // передаю ссылку на товар по айди с измененным значением количества
    //
    //         success: function (data) {  // при успешной отправке идёт отрисовка... проблема или нет..???
    //             $('.basket_list').html(data.result)}
    //     }); event.preventDefault();
    // }
    //
    // function removeFromBasket() {
    //     $.ajax({
    //     url: '/baskets/edit/' + $(this).attr('data-id') + '/' + (parseInt($(this).attr('value')) - 1) + '/',
    //     success: function (data) {
    //             $('.basket_list').html(data.result)}
    //     });  event.preventDefault();
    // }

}




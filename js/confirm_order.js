$(function () {
   var submitOrder = $('#submitOrder');
   var payment = $('#payment');
   var closeBtn = $('#closeBtn');
    submitOrder.click(function () {
        payment.css('display','block')
    });
    closeBtn.click(function () {
        payment.css('display','none')
    })
});
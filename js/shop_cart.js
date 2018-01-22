$(function () {
    var product = $('#product');
    var unitPrice = $('#unitPrice').text();
    var total = $('#total').text();
    product
        .delegate('button.reduce', 'click', function () {
            var _vm = $(this);
            var number = _vm.next('.number');
            var num = number.val();
            if (num > 1) {
                num--;
            } else {
                return false;
            }
            number.val(num);
            Allprice(total);
            function Alltotal() {
                total = unitPrice * num;
            }
        })
        .delegate('button.plus', 'click', function () {
            var _vm = $(this);
            var number = _vm.prev('.number');
            var num = number.val();
            num++;
            number.val(num);
            Allprice(total);
            function Allprice() {
                total = unitPrice * num;
            }
            console.log(Allprice(total));
        });

});

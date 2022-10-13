$(function() {
    $("#close_banner").click(function() {
    $("#banner").addClass(d-none);       
    })

    $("#cart").click(function() {
        var order = {
            buyItem : "라움 2인 그릇 6P",
            buyCount: 1,
            buyPrice: 39500
        }
        var userChoice = confirm("장바구니에 담았습니다, 결제창으로 이동");
        userChoice ? location.href("/payment") : null;

    })
})
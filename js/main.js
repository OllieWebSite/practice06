// 當畫面元素載入完成後，執行以下...

//通常不會這樣寫
//$(document).ready(function(){
  //.....  
//})

//上面那段也這樣寫,比較簡潔
//$(function())
//{
//}

$(function () {
    // 當.ingredients裡面的li，被點擊時，執行以下...
    $('.ingredients>li').click(function () {
        // 這個東西(被點擊的.ingredient>li)本身.
        // 切換class "done".
        $(this).toggleClass('done');
        // toggle意味原本沒有class done的加入class done; 原本有class done的去除class done.
    });
});

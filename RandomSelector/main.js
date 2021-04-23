$(function () {
    $("input").on("click",function(){
        //alert("HI");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("li").eq(randomChildNumber).text());
        if (randomChildNumber==0) {
            $('#theDiv').attr('<img id="theImg" src="https://tw.savorjapan.com/gg/content_image/t0039_002_20180115022046.jpg" />');
        }
        if (randomChildNumber==1) {
            $('#theDiv').attr('<img id="theImg" src="https://images.chinatimes.com/newsphoto/2020-09-08/656/20200908005563.jpg" />');
        }
        if (randomChildNumber==2) {
            $('#theDiv').attr('<img id="theImg" src="https://angelala.tw/wp-content/uploads/img/20190813081255_46.jpg" />');
        }
    });
});
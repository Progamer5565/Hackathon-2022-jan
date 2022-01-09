var easy_words=["My","name","is","Daksh","Jain","and","I","made","this","website","using","HTML","CSS", ".", "Please","like","and","follow","on","instagram","id","=","@","note","taking","_","daksh",".","I","made","this","website","with","the","help","of","my","friend","Chinmay","Nagar",",", "please","like","him","too",".","We","made","this","website","for","a","hackathon"];

var count=0;
var correct=0;
var incorrect=0;

$(window).keypress(function(e){
    if (e.which == 32){
        var word=document.getElementById("container1").value;
        if(easy_words[count].trim()==word.trim()){
        $("#"+count).toggleClass("right");
        correct++;
        }
        else{
            $("#"+count).toggleClass("wrong");
            incorrect++;
        }
        count++;
        document.getElementById("container1").value="";
    }
});
document.getElementById("container1").onclick=function(){
    var timeleft=90;
    var wpm;
    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft;
        timeleft-=1;
        if(timeleft<=0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML="Time-up"
            if(timeleft==0){
                wpm=correct/0.5;
                document.getElementById("result").innerHTML+="\nCorrectWords:  "+correct;
                document.getElementById("result").innerHTML+="\n\nIncorrectWords:  "+incorrect;
                document.getElementById("result").innerHTML+="\n\nWordsPerMinute:  "+wpm;
             }
        }
    },1000);
}
$(".restart").click(function(){
    location.reload();
})
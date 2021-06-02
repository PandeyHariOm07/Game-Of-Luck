var a,b,c,i;
for(i=0;i<=1;i++){
    if(i==0){
        a=Math.floor(Math.random()*6)+1;
        c="image/dice"+a+".png";
    }
    else{
        b=Math.floor(Math.random()*6)+1;
        c="image/dice"+b+".png";
    }
        document.querySelectorAll("img")[i].setAttribute("src",c);
}
    if(a<b){
        document.querySelector("h1").innerHTML="Player  2  Wins 🏁";
    }
    else if(a>b){
        document.querySelector("h1").innerHTML="🏁 Player  1  Wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
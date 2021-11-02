var wk=0;
var lc=0;
var np=0;

var i=0;
var j=0;
var k=0;
var b=0;


function Make(){
    if((b==1) && (i!=0 || j!=0 || k!=0) )
    if(i!=0){
        var q=document.getElementById("wakeuptimeselector");
        var r=q.options[q.selectedIndex].text;
        console.log(r);
        document.getElementById("div1").innerHTML='Wake Up Time : ${r} ' ;
    }
    if(i==0){
        document.getElementById("div1").innerHTML="";
    }
    if(j!=0){
        var s=document.getElementById("lunchtimeselector");
        var t=s.options[s.selectedIndex].text;

        document.getElementById("div2").innerHTML='Lunch Time : ${t}';
        console.log("po");
    }

    if(j==0){
        document.getElementById("div3").innerHTML="";
    }
    if(k!=0){
        var u=document.getElementById("naptimeselector");
        var 
    }

}

//After ifi===hour

else{
    document.getElementById("lunchbottom").style.backgroundImage="url(./assests/wake_up@2x.png)";
    document.getElementById('lunch').innerHTML="" ;
    wk=0;

}
if(j==hourr){
    document.getElementById("lunchbottom").stylebackgroundImage="url(./assests/lunch_image@2x.png)";
    document.getElementById('lunch').innerHTML="Lets Have Lunch" ;
    lc=1;
}

elseif(wk==0){
    document.getElementById("lunchbottom").stylebackgroundImage="url(./assests/lunch_image@2x.png)";
    document.getElementById("lunch").innerHTML="";
    lc=0;
}

if(k==hourr){
    document.getElementById("lunchbottom").stylebackgroundImage="url(./assests/nap_time@2x.png";
    document.getElementById("lunch").innerHTML="Lets Have Dinner";
}
elseif(wk==0 && lc==0){
    document.getElementById("lunchbottom").stylebackgroundImage="url(./assests/lunch_image@2x.png)";
    document.getElementById("lunch").innerHTML=""; 
}
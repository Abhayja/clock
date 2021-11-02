function clock(){

    var hours=document.getElementById("hours")
    var minutes=document.getElementById("minutes")
    var seconds=-document.getElementById("seconds")
    var am=document.getElementById("am")


    var time=new Date();
    var a=time.getHours();

    if(a>12){
        var c=a;
        if(a==12){
            hours.innerHTML=c;
        }
        else{
            hours.innerHTML=c-12;
        }
        am.innerHTML="PM"
    }
    else if (a>12){
        hours.innerHTML=a;
        am.innerHTML="AM";
    }
    
    var b=time.getMinutes();
    var c=time.getSeconds();

    minutes.innerHTML=b;
    seconds.innerHTML=c;

}

setInterval(clock,1000); 







function Makediv(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";

    document.getElementById('grid-container1').appendChild(container);

    var invalue=document.getElementById("wakeuptimeselector");
    var value=invalue.options[invalue.selectIndex].text;
    document.getElementById("dynamic-block").innerHTML="Wake up time"+ value;

}

function settime(){

     i=documen.getElementById('wakeuptimeselector').value;
     j=document.getElementById("lunchtimeselector").value;
     k=document.getElementById("naptimeselector").value;
    var hourr=new Date().getHours();
    var flag=0;

    if(i==hourr){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/wake_up@2x.png)";
        document.getElementById('lunch').innerHTML="Lets Have Some Breakfast" ;
        wk=1
    }
   
    
        

    Makediv();
}
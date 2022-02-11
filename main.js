'use strict';

{
    console.log('Hello');
    document.getElementById("whatisdawn").style.visibility ="hidden";

    function clickBtn2(){
        const whatisdawn = document.getElementById("wahtisdawn");

        if(whatisdawn.style.visibility=="visible"){
            // hiddenで非表示
            whatisdawn.style.visibility ="hidden";
        }else{
            // visibleで表示
            whatisdawn.style.visibility ="visible";
        }
    }

    //初期表示は非表示
    document.getElementById("p2").style.visibility ="hidden";

    function clickBtn2(){
        const p2 = document.getElementById("p2");

        if(p2.style.visibility=="visible"){
            // hiddenで非表示
            p2.style.visibility ="hidden";
        }else{
            // visibleで表示
            p2.style.visibility ="visible";
        }
    }
}
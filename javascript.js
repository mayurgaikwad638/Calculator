let inputtxt = document.getElementById("input-field") ;
        let buttons = document.querySelectorAll(".btn") ;

        Array.from(buttons).forEach((button)=>{
            button.addEventListener("click", (e)=>{
                if(e.target.innerHTML=='='){
                    let txt = inputtxt.value ;
                    try {txt = eval(txt) ;}
                    catch(err){ alert(err) ;} 
                    inputtxt.value = txt ;
                }
                else if(e.target.innerHTML=='C'){
                    inputtxt.value = "" ;
                }
                else if(e.target.innerHTML=='del'){
                    let txt = inputtxt.value ;
                    txt = txt.substring(0,txt.length-1) ;
                    inputtxt.value = txt ;
                }
                else{
                    let txt = inputtxt.value ;
                    txt += e.target.innerHTML ;
                    inputtxt.value = txt ;
                }
            })
        })







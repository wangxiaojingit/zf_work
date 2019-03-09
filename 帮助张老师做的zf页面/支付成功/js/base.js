
    function refreshRem() {
        var desW = 640,
            winW = document.documentElement.clientWidth||document.body.clientWidth;
            var omain=document.getElementById("main");
            if(winW>=desW){

            //    document.body.style.width="640px";
            //    document.body.style.margin="0 auto";   
               omain.style.margin="0 auto";
               omain.style.width="720px";

          
               return;
            }
        ratio = winW / desW;
        document.documentElement.style.fontSize = ratio * 100 + 'px';
    }
    refreshRem();
    window.addEventListener('resize', refreshRem);


function play(){
      
    divi = document.getElementById("game");
    divi.onclick = null;
    divi.removeChild(divi.children[1]);
    console.log("connected 200");
    can = document.getElementById("snakegame");
    c2 = document.getElementById("score");
    c2.style.width = "400px";
    c2.style.height = "50px";
    c2.style.marginBottom = "5px";
    can.width = 400;
    can.height = 400;
    c2.height = 50;
    c2.width = 400;
    can.style.marginBottom = "50px";

    ctx = can.getContext("2d");
    ct2 = c2.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/9);
  }

    xv = 1;
    yv = 0;
    px=py=20;
    ax=ay=15;
    gs=tc=20;
    trail = [];
    tail = 5;
    score = 0;

    function game(){
        px += xv;
        py += yv;

        if(px < 0){
            px = tc-1;
        }
        if(px>tc-1){
            px = 0;
        }
        if(py < 0){
            py = tc-1;
        }
        if(py > tc-1){
            py = 0;
        }

        ctx.fillStyle = 'rgb(219, 204, 204)';
        ctx.fillRect(0,0,can.width,can.height);

        ct2.fillStyle = 'rgb(219, 204, 204)';
        ct2.fillRect(0,0,c2.width,c2.height);

        ct2.font = "30px Arial";
        ct2.fillStyle = 'rgb(218, 42, 42)';
        ct2.fillText("SCORE :", 95, 40);
        ct2.fillText(score.toString(), 250, 38);

        ctx.fillStyle = "rgb(185, 127, 127)";
        for(var i = 0 ; i < trail.length; i++){
            ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
            
            if(trail[i].x == px && trail[i].y == py){
                tail = 5;
                score = 0;
            }

        }
        trail.push(
            {
                x:px,
                y: py
            }
        );

        while(trail.length > tail){
            trail.shift();
        }

        if(ax == px && ay == py){
            tail++;
            score++;
            ax = Math.floor(Math.random() * tc);
            ay = Math.floor(Math.random() * tc);
            // ct2.clearRect(250,0,400,50);
            ct2.fillText(score.toString(), 250, 38);

        }

        ctx.fillStyle = "rgb(218, 42, 42)";
        ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

    }

    function keyPush(evt){
      evt.preventDefault();

        switch(evt.keyCode){
            case 37:
                xv=-1;
                yv=0;
                break;

            case 38:
                xv=0;
                yv=-1;
                break;

            case 39:
                xv=1;
                yv=0;
                break;

            case 40:
                xv=0;
                yv=1;
                break;

            

        }

    }
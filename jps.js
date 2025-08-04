let b=document.querySelectorAll(".box");
let p=document.querySelector("#whowinner");
let r=document.querySelector("#resetb");
let t=true;
b.forEach((i)=>
{
    i.addEventListener("click",()=>
    {
        // console.dir("heyyyyy");
        if(t)
        {
            i.innerText="X";
            t=false;
        }
        else
        {
            i.innerText="O";
            t=true;
        }
        i.disabled=true;
        win();
        draw();
    });
});
let wincond=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const win=()=>
{
    for(let i of wincond)
    {
        if(b[i[0]].innerText!=="" && b[i[0]].innerText===b[i[1]].innerText && b[i[1]].innerText===b[i[2]].innerText)
        {
            p.innerText=`winner is ${b[i[0]].innerText}`;
            r.innerText="New Game";
            return true;
        }
    }
    return false;
}

const draw=()=>
    {
        let c=0;
        b.forEach((i)=>
        {
            if(i.innerText!="")
            {
                 c++;
            }
        });
        if(c==9 && !win())
        {
            p.innerText="Game Tie";
            r.innerText="New Game";
        }
    }


let t1="New Game";
r.addEventListener("click",()=>
{
    if(t1==="New Game")
    {
        r.innerText="Reset";
        b.forEach((i)=>
        {
            i.disabled=false;
            p.innerText="";
            i.innerText="";
        });
    }
    else
    {
         r.innerText="New Game"
    }
});

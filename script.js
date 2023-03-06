let array=[[0,0,0],[0,0,0],[0,0,0]];
let check="player";
let filled =0;
var b =0;
let a="";
let result = "";
let pcount =0;
let ocount = 0;
function assign(id)
{   
    
    a=id;
    b = id;
    console.log(b);
    console.log(check+" "+a);
    let i=0;
    let j=0;
    i = a.charAt(0);
    j =a.charAt(1);
    if(check === "player")
    {
        
        
        if(array[i][j] == 1 || array[i][j] == 2)
        {
            disp();
        }
        else
        {
            check = "opponent";
            array[i][j] = 1;
            document.getElementById(b).style.backgroundImage = "url('https://w7.pngwing.com/pngs/255/685/png-transparent-tic-tac-toe-computer-icons-others-miscellaneous-angle-monochrome-thumbnail.png')";
            document.getElementById(b).style.backgroundSize = "100% 100%";
            filled += 1;
            let move = document.querySelector('.line2');
            move.style.visibility = "visible";
            let mov = document.querySelector('.line1');
        mov.style.visibility = "hidden";
        }
        search1();
    }
    else{
        
        if(array[i][j] == 2 || array[i][j] == 1)
        {
            disp();
        }
        else
        {
            check = "player";
            array[i][j] = 2;
            document.getElementById(b).style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgvCCg4TLvZeW2z5ScJQR8Qv6nraIgiU-c9fqfeHGPDG-GkzrdOzyiawlk39MxPqKdgs&usqp=CAU)";
            document.getElementById(b).style.backgroundSize = "100% 100%";
            filled += 1;
            let move = document.querySelector('.line1');
            move.style.visibility = "visible";
            let mov = document.querySelector('.line2');
            mov.style.visibility = "hidden";
        }
        search2();
    }

}

function disp()
{
    console.log(b);
    setTimeout(() => {
        const border = document.getElementById(a);
        border.style.borderStyle = "groove";
        border.style.borderColor = "blue";
        
    }, 0.2);

    setTimeout(() => {
        const border = document.getElementById(a);
        border.style.borderStyle = "none";
        border.style.borderColor = "none";
    }, 1000);
    b =0;
}

function rearray()
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array[i].length;j++)
        {
            if(array[i][j] == 1)
            {
                array[i][j] = 0;
            }
            else if(array[i][j] == 2)
            {
                array[i][j] = 0;
            }
        }
    }
}
function search1()
{
    if(array[0][0] == 1 && array[0][1] == 1 && array[0][2] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[1][0] == 1 && array[1][1] == 1 && array[1][2] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[2][0] == 1 && array[2][1] == 1 && array[2][2] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[0][0] == 1 && array[1][0] == 1 && array[2][0] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[0][1] == 1 && array[1][1] == 1 && array[2][1] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[0][2] == 1 && array[1][2] == 1 && array[2][2] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[0][0] == 1 && array[1][1] == 1 && array[2][2] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else if(array[0][2] == 1 && array[1][1] == 1 && array[2][0] == 1)
    {
        console.log("Player win");
        result = "Player win";
        rearray();
        filled = 0;
        check = "player";
        show();
        pcount +=1;
        document.querySelector('.p-txt').innerHTML = pcount;
    }
    else{
        if(filled == 9)
        {
            console.log("Tie game");
            result = "Tie game";
            rearray();
            filled = 0;
            check = "player";
            show();
        }
    }
}


function search2()
{
    if(array[0][0] == 2 && array[0][1] == 2 && array[0][2] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[1][0] == 2 && array[1][1] == 2 && array[1][2] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[2][0] == 2 && array[2][1] == 2 && array[2][2] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[0][0] == 2 && array[1][0] == 2 && array[2][0] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[0][1] == 2 && array[1][1] == 2 && array[2][1] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[0][2] == 2 && array[1][2] == 2 && array[2][2] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[0][0] == 2 && array[1][1] == 2 && array[2][2] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else if(array[0][2] == 2 && array[1][1] == 2 && array[2][0] == 2)
    {
        console.log("opponent win");
        result = "Opponent win";
        rearray();
        filled = 0;
        check = "opponent";
        show();
        ocount +=1;
        document.querySelector('.o-txt').innerHTML = ocount;
    }
    else{
        if(filled == 9)
        {
            console.log("Tie game");
            result = "Tie game";
            rearray();
            filled = 0;
            check = "player";
            show();
        }
    }
}
function show()
{
    setTimeout(() => {
        const box = document.querySelector('.show-cont');
        box.style.display = 'flex';
      },500); // 👈️ time in milliseconds
    document.querySelector('#winner').innerHTML = result;
}
function next()
{
    setTimeout(() => {
        const box = document.querySelector('.show-cont');
        box.style.display = 'none';
    }, 0.5);
    const divs = document.querySelectorAll('.btn');
    divs.forEach(button => {
        button.style.backgroundImage = 'none';
    });
    if(result === "Opponent win")
    {
        let move = document.querySelector('.line2');
        move.style.visibility = "visible";
        let mov = document.querySelector('.line1');
        mov.style.visibility = "hidden";
    }
    else
    {
        let move = document.querySelector('.line1');
        move.style.visibility = "visible";
        let mov = document.querySelector('.line2');
        mov.style.visibility = "hidden";
    }
}
function restart()
{
    setTimeout(() => {
        const box = document.querySelector('.show-cont');
        box.style.display = 'none';
    }, 0.5);
    const divs = document.querySelectorAll('.btn');
    divs.forEach(button => {
        button.style.backgroundImage = 'none';
    });
    let move = document.querySelector('.line1');
    move.style.visibility = "visible";
    let mov = document.querySelector('.line2');
    mov.style.visibility = "hidden";
    pcount = 0;
    ocount = 0;
    document.querySelector('.p-txt').innerHTML = pcount;
    document.querySelector('.o-txt').innerHTML = ocount;


}

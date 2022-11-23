var id;
var op;


function hideAll()
{
    $(".j1").each(function()
    {
        $(this).hide();
    });

    $(".j2").each(function()
    {
        $(this).hide();
    });   
}

function checkWinner(numJ1, numJ2)
{
    if(numJ1 == 1) //j1 saca piedra
    {
        if(numJ2 == 2) //j2 papel -> prierde j1
        {
            console.log("Jugador 1 pierde\nJugador 2 gana!");
        }
        else if(numJ2 == 3)   //j2 tijera -> gana j1
        {
            console.log("Jugador 1 gana!\nJugador 2 pierde");
        }
        else
        {
            console.log("Empate");
        }
    }
}

function displayHandA(num)
{
    id = 0;

    $(".j1").each(function()
    {
        $(this).hide();
    });

    $(".j1").each(function()
    {
        id = $(this).attr('id');

        if(id == num)
        {
            $(this).show();
        }
    });
}

function displayHandB(num)
{
    id = 0;

    $(".j2").each(function()
    {
        $(this).hide();
    });
    
    $(".j2").each(function()
    {
        id = $(this).attr('id');

        if(id == (num+3))
        {
            $(this).show();
        }
    });
}
    

$(document).ready(function()
{
    hideAll();

    $(".btn").click(function()
    {
        hideAll();

        if($("#jugadores").val() == 0)
        {
            op = 0;
        }
        else if($("#jugadores").val() == 1)
        {
            op = 1;
        }
        else if($("#jugadores").val() == 2)
        {
            op = 2;
        }
    });

    $(".btn2").click(function()
    {

        if(op == 0)
        {
            let randJ1 = Math.floor((Math.random() * 3) + 1);
            let randJ2 = Math.floor((Math.random() * 3) + 1);
            displayHandA(randJ1);
            displayHandB(randJ2);
        }
        else if(op == 1)
        {
            alert();
        }
        else if(op == 2)
        {
            alert();
        }
        
    });
})
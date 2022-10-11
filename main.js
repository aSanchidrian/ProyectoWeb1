
var part = [];

function showPart (data)
{
    let aux = [];

    data.forEach(element => 
    {
        aux.push(element.name);
    });

    //$("#users").text("Participants: " + aux);
    $("#users").html("<strong>Participants: </strong>" + aux);
}

function getWinner(data)
{
    const rand = Math.floor(Math.random() * data.length);

    $("#selected").html("<strong>Random: </strong>" + data[rand].name);
}

$(document).ready(function()
    {
        // jsonplaceholder.typicode.com/users

        $.ajax(
            {
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
                contentType: "aplication/json",
                success: function(response)
                {
                    part = response;

                    showPart(part);
                },
                error: function(error)
                {
                    console.log(error);
                    alert(error);
                }
            }
        );

        $(".btn").click(function()
        {
            getWinner(part);
        })
    }
);
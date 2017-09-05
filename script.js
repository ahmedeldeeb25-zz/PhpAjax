
$(document).ready(function(){
    $('#myForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:this.method,
            url:this.action,
            data:$('#myForm').serialize(),
            success:function(data){
                console.log(data);
            }
        });
        console.log(this);
        
    });

    function jdata(){
        $('#output').empty();
         $.ajax({
            type:'GET',
            url:'json.php',
            
            success:function(data){
                $.each(data,function(index){
                    console.log(data[index].firstName);
                    $('#output').append(data[index].firstname+'<br>');

                });
                console.log(data);
            }
        });

    }

    jdata();
});
//Js ajax code
/*
var output = document.getElementById("output");
output.innerHTML = 'Loading....';



function Jdata() {
    var ajaxHttp = new XMLHttpRequest();
    var url = "json.php";

    ajaxHttp.open("GET", url, true);
    ajaxHttp.setRequestHeader("content-type", "application/json");

    ajaxHttp.onreadystatechange = function () {
        output.innerHTML = '';
        if (ajaxHttp.readyState == 4 && ajaxHttp.status == 200) {
            //output.innerHTML=ajaxHttp.responseText;
            var content = JSON.parse(ajaxHttp.responseText);
            for (var myobject in content)
                output.innerHTML += '<br>' + content[myobject].firstname;

        }
    }
    ajaxHttp.send();
}

//////////////////////////////////////////////////////
function submitData(fdata) {
    var mydata = new FormData(fdata);

    var xhtpp = new XMLHttpRequest();
    xhtpp.onload = function () {
        console.log(xhtpp.responseText);
        Jdata();
    };
    xhtpp.open(fdata.method, fdata.action, true);
    xhtpp.send(new FormData(fdata));

    console.log(fdata.method);
    return false;
}

window.onload = Jdata();
*/

function traerInformacion(){
    $.ajax({
        url:"https://g80d2f9d33d5d2b-ejemploproy1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costumes/costume",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //Acá se puede validar la respuesta.
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
            //for(i=0;i<respuesta.items.length;i++);
               // $("#resultado").append(respuesta.items[i].name+"<br>");
        }
    });
}

function pintarRespuesta(items){
    //declarar variables js
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idCostume+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td>"+items[i].idCategory+"</td>";
        myTable+="<td><button onclick="BorrarElemento("+items[i].idCostume+")">Borrar</button>;
        myTable+="</tr>";
    }
    myTable +="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData{
        id:$("#id").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/odrs/admin/costume/costume",
        type:"POST",
        data:myData,
        dataType:"JSON",
        sucess:function(respuesta){
            alert("Se ha guardado.")
        }

    });
}
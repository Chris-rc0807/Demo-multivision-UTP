function calcularPromedio(){
    // Declarar las variables de entrada
    let n1,n2,n3;

    // Declarar las variables de proceso y salida
    let prom, estado, categoria, salidaHTML;

    // Fase 1: Entrada (Input)
    n1=parseFloat(document.getElementById("nota1").value); // Leer la nota 1
    n2=parseFloat(document.getElementById("nota2").value); // Leer la nota 2
    n3=parseFloat(document.getElementById("nota3").value); // Leer la nota 3

    if(n1<0 || n1>20){
        alert("Error en el ingreso de la nota 1!");
        return;
    }

    if(n2<0 || n2>20){
        alert("Error en el ingreso de la nota 2!");
        return;
    }

    if(n3<0 || n3>20){
        alert("Error en el ingreso de la nota 3!");
        return;
    }

    // Rastreo de variables
    // console.log("n1: "+n1);
    // console.log("n2: "+n2);
    // console.log("n3: "+n3);

    // Fase 2: Proceso (Process)
    prom=(n1+n2+n3)/3; // Promedio aritmético
    // console.log("prom: "+prom);

    // Hallar el "estado"
    if(prom>=12){
        estado="Aprobado";
    }else{
        estado="Desaprobado";
    }
    // console.log("estado: "+estado);

    // Hallar la "categoria"
    if(prom<13){
        categoria="Debe mejorar";
    }else if(prom>=13 && prom<16){
        categoria="Regular";
    }else if(prom>=16 && prom<18){
        categoria="Destacado";
    }else{
        categoria="Escelente";
    }
    // console.log("categoria: "+categoria);

    // Fase 3: Salida (Output)

    // Generar la salida en formato HTML
    salidaHTML="<h2>Resultados finales</h2>"+
                    "El promedio final fue: "+prom+"<br>"+
                    "El estado final es: "+estado+"<br>"+
                    "La categoría final es: "+categoria+"</br>";
    // console.log("salidaHTML: "+salidaHTML);

    // Enviar la salida generada al div "resultado"
    document.getElementById("resultado").innerHTML=salidaHTML;

    return; // Finaliza el retorno
}

var citas=[];
// Función principal para registrar la cita
function registrarCita(){
    // Obtener los dstos de la cita desde el formulario
    let nombre=document.getElementById("nombre").value;
    let edad=document.getElementById("edad").value;
    let fecha=document.getElementById("fecha").value;
    let medico=document.getElementById("medico").value;
    let servicio=document.getElementById("servicio").value;
    let costo=document.getElementById("costo").value;

    /* Crear el objeto regCita con sus campos y
    le pasamos los valores de las variables */
    let regCita={
        c_nombre:nombre,
        c_edad:edad,
        c_fecha:fecha,
        c_medico:medico,
        c_servicio:servicio,
        c_costo:costo
    };

    // Confirmar si el usuario desea registrar la cita
    let mensaje="¿Confirma su cita con el Dr./Dra. "+medico+
                " para el servicio "+servicio+" el día "+fecha+"?";
    
    // Pide la confirmación
    let confirmar=confirm(mensaje);
    if(confirmar==false){
        // Cancelar la cita
        alert("Cita cancelada.");
        return; // Finaliza el proceso
    }

    // Registrar la cita
    citas.push(regCita);
    alert("Estimado/a "+nombre+", su cita ha sido registrada correctamente. ¡Gracias por confiar en Multivisión!");

    // Mostrar todas las citas registradas en el div: resultado
    mostrarCitas();
    return;
}

// Lista todas las citas registradas en el arreglo
function mostrarCitas(){
    let salidaHTML2="<h2>Citas Registradas</h2>";
    for(let i=0; i<citas.length; i++){
        salidaHTML2=salidaHTML2+
                    citas[i].c_nombre+", "+
                    citas[i].c_servicio+", "+
                    citas[i].c_fecha+", "+
                    "Médico: "+citas[i].c_medico+", "+
                    "Costo S/ "+citas[i].c_costo+"<br>";
    }
    console.log("salidaHTML2: "+salidaHTML2);
    // Enviar los datos al div "resultado2"
    document.getElementById("resultado2").innerHTML=salidaHTML2;
}

 var personas = [{ 
    id: 0,
    nombre: "Fernando Farcy",
    email: "fernandosfarcy@gmail.com",
    club: "River Plate",
    sexo: "M",
    nacimiento: "08/07/1968",
    observacion: "Edit",
    borrar: "Borrar"
},{   
    id: 1,
    nombre: "Bruno Monfrinoti",
    email: "",
    club: "",
    sexo: "M",
    nacimiento: "  /  /1968    ",
    observacion: "Edit",
    borrar: "Borrar"
},{
    id: 2,
    nombre: "Hernan Bossarelli",
    email: "",
    club: "River Plate",
    sexo: "M",
    nacimiento: "  /  /    ",
    observacion: "Edit",
    borrar: "Borrar"
},{
    id: 3,
    nombre: "Manuel Dominguez",
    email: "",
    club: "Boca Juniors",
    sexo: "M",
    nacimiento: "  /  /1968",
    observacion: "Edit",
    borrar: "Borrar"
},{
    id: 4,
    nombre: "Daniel Osvaldo Dilorenzo",
    email: "",
    club: "San Lorenzo",
    sexo: "M",
    nacimiento: "08/01/1966",
    observacion: "Edit",
    borrar: "Borrar"
},{   
    id: 5,
    nombre: "Javier Sergio Fassetta",
    email: "",
    club: "Boca Juniors",
    sexo: "M",
    nacimiento: "16/03/1966",
    observacion: "Edit",
    borrar: "Borrar"
},{   
    id: 6,
    nombre: "Leonardo Russef",
    email: "",
    club: "",
    sexo: "O",
    nacimiento: "  /  /    ",
    observacion: "Edit",
    borrar: "Borrar"
},{   
    id: 7,
    nombre: "Pepe",
    email: "",
    club: "",
    sexo: "",
    nacimiento: "  /  /    ",
    observacion: "Edit",
    borrar: "Borrar"
}]

var restopersonas = personas;


function principal(){
    const contenedor = document.querySelector(".grid-container");


for (var varperso in restopersonas){
    let datos = restopersonas[varperso];
    let id = datos["id"];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let club = datos["club"]; 
    let sexo = datos["sexo"];
    let nacimiento = datos["nacimiento"];
    let observacion = datos["observacion"];
    let borrar = datos["borrar"];
    let htmlCode = `
     <div class="grid-item id" >${id}</div>
     <div class="grid-item nombre" >${nombre}</div>
     <div class="grid-item email" >${email}</div>
     <div class="grid-item club">${club}</div>
     <div class="grid-item sexo">${sexo}</div>
     <div class="grid-item nacimiento">${nacimiento}</div>
     <button type="button" onclick="editate(${id})">${observacion}</div>
     <button type="button" onclick="borrate(${id})">${borrar}</div>
        `
    contenedor.innerHTML+= htmlCode;
    }

 }


principal(restopersonas);



// ********************************************
function editate(id){
    console.log(id)

    console.log(personas[id])

    console.log(personas)

    const recapa = document.querySelector(".capa");

        let mdatos = personas[id];
        let mid = mdatos["id"];
        let mnombre = mdatos["nombre"];
        let memail = mdatos["email"];
        let mclub = mdatos["club"]; 
        let msexo = mdatos["sexo"];
        let mnacimiento = mdatos["nacimiento"];
        let asdfcode = `
     
        <div class="capa editador mid" > <label>Id:</label> <input type="text" value="${mid}"></div>
        <div class="capa editador mnombre" >  <label>Nombre:</label> <input type="text" value="${mnombre}"></div>
        <div class="capa editador memail" >  <label>Mail:</label> <input type="text" value="${memail}"></div>
        <div class="capa editador mclub" >  <label>Club:</label> <input type="text" value="${mclub}"></div>
        <div class="capa editador msexo" > <label>Sexo:</label> <input type="text" value="${msexo}"></div>
        <div class="capa editador mnacimiento" > <label>Nacimiento:</label> <input type="text" value="${mnacimiento}"></div>
        <button type="button" onclick="guardate(${id})">Guardar</div>
        <button type="button" onclick="cancelate(${id})">Cancelar</div>
   
        `
        recapa.innerHTML+=asdfcode

}



// **********************************************
function guardate(id){
    //Cambia
    console.log(personas[id]);
  //  console.log(personas[id])
   // personas.splice([id],[[2],"Domingo"] ); // cambia splice( "posicion donde","donde elimina e inserta","elemento") 
    //console.log(personas[id]);
  
}



// ********************************************
function borrate(id){
    console.log(id)

    // splice()  
    console.log(restopersonas);
    personas.splice(id,1); // borra splice( "posicion desde donde empiesa a borrar", "mayor a cero significa cuantos elementos borra") 
    console.log(restopersonas);

 

    //personas.splice(1,0,"Fernando" ); // Agrega splice( "posicion donde","el CERO Agrega","elemento")
    //console.log(personas);

    //personas.splice(id,0,"don jose"); // Agrega splice( "posicion donde","el Cero Agrega","elemento")
    //console.log(personas);

    //personas.splice(6,0,"Sabado" ); // Agrega splice( "posicion donde","el CERO Agrega","elemento") 
    //console.log(personas);

    // Cambia
    //personas.splice(id,1,"Domingo" ); // cambia splice( "posicion donde","donde elimina e inserta","elemento") 
    //console.log(personas);
    





    //cosaagregada = personas.push("Sabado"); // agrega a lo ultimo 
    //console.log(personas);
    //console.log(cosaagregada);



    //var cosaborrada = personas.pop(); // borra el ultimo elemento
    //console.log(personas);
    //console.log(cosaborrada);
    //console.log(personas)



    //personas.shift(); // borra el primer elemento
    // var cosaborrada = personas.shift();
    // console.log(personas);
    // console.log(cosaborrada);




}


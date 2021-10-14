//--------------------------DESAFIO INCORPORANDO OBJETOS----------------------------
//-------EJERCICIO 1
//plastic artist
class plasticArtist {
    constructor(nombre, especialidad, anioexperiencia, exposiciones, nacionalidad){
        this.nombre=nombre;
        this.especialidad=especialidad;
        this.anioexperiencia=anioexperiencia;
        this.exposiciones=exposiciones;
        this.nacionalidad=nacionalidad;

    }


}

const artist1 = new plasticArtist("Alex", "pintura", "10 años", "2 expo individuales", "Peru")
const artist2 = new plasticArtist("Arnaldo", "escultor", "15 años", "1 expo individuales", "Colombia")
const artist3 = new plasticArtist("Luis", "grabador", "5 años", "5 expo individuales", "chile")
const artist4 = new plasticArtist("Pedro", "muralista", "3 años", "1 expo individuales", "mexico")
const artist5 = new plasticArtist("Victor", "retratista", "4 años", "11 expo individuales", "Argentina")

console.log(artist1);
console.log(artist2.nacionalidad);  //al mencionar nacionalidad desde this solo se visualizara ese aspecto.


//----------------EJERCICIO 2---
//ciclo para ingresar cantidad de artistas plasticos-------------
let infoArtistas = "";
for (i = 1; i <= 3; i++) {
    let artista = new plasticArtist(prompt("Nombre del artista " + i), prompt("Que es espacialidad es en arte"), prompt("año de experiencia"), prompt("nro de expo"), prompt("nacionalidad"));
    //console.log(artista);
    infoArtistas = infoArtistas + " " + artista.nombre + " " + artista.especialidad + " " + artista.anioexperiencia + " " + artista.exposiciones + "" + artista.nacionalidad +"\n";
}

alert("los datos ingresadod de los artistas son:\n" + infoArtistas)
// console.log("Los datos de las Artistas ingresados son: "); //TAMBIEN SE PUEDE PEDIR POR CONSOLE
// console.log(infoArtistas);




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
    //DECLARANDO METODO:
    tieneExperiencia(anio) {
        if((anio >= 15) && (anio <= 3)||(anio >= 15) && (anio <= 20)) {
            return true; 
        }
        return false;
    }
}
const artist1 = new plasticArtist("Alex", "pintura", "10 años", "2 expo individuales", "Peru")
const artist2 = new plasticArtist("Arnaldo", "escultor", "15 años", "1 expo individuales", "Colombia")
const artist3 = new plasticArtist("Luis", "grabador", "5 años", "5 expo individuales", "chile")
const artist4 = new plasticArtist("Pedro", "muralista", "3 años", "1 expo individuales", "mexico")
const artist5 = new plasticArtist("Victor", "retratista", "4 años", "11 expo individuales", "Argentina")
for (let index = 0; index < 5 ; index++) {
    let entrada = parseInt(prompt("INGRESAR año de experiencia del artista "));
    if(artist1.tieneExperiencia(entrada)){
        alert("EL ARTISTA TIENE  "+entrada+ "AÑOS DE EXPERIENCIA DEMOSTRADOS")
    }else{
        alert("El artista no tiene "+entrada+ "AÑOS DE EXPERIENCIA DEMOSTRADO")
    }
}





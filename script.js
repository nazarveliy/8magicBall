const boton = document.getElementsByClassName("btn");
const respuestas = [
    "Es cierto",
    "Es decididamente así.",
    "Sin lugar a dudas.",
    "Sí. definitivamente",
    "Puedes confiar en ello",
    "Como yo lo veo, sí.",
    "Lo más probable.",
    "Perspectiva buena.",
    "Las señales apuntan a que sí",
    "Sí.",
    "Respuesta confusa, vuelve a intentarlo.",
    "Vuelve a preguntar más tarde.",
    "Mejor no decirte ahora.",
    "No se puede predecir ahora.",
    "Concéntrate y vuelve a preguntar.",
    "No cuentes con ello.",
    "Mi respuesta es no.",
    "Mis fuentes dicen que no.",
    "Las perspectivas no son muy buenas.",
    "Muy dudoso."
];

function res(){
    let introduceTexto = document.getElementById("caja").value;
    let retorno = document.getElementById("retorno");
    let numRandom = Math.floor(Math.random()*20);
    if(introduceTexto.length == 0){
        retorno.textContent ="Preguntame algo"
    }else{
        retorno.textContent = respuestas[numRandom];
    }
};











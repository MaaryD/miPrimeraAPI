console.log("Entro al main.js");

const imgRandom = document.getElementById("imgRandom");
const URL = "https://picsum.photos/200/500";

const randomImage = () => {
    console.log("Entro a la función randomImage");
    fetch(URL)
        .then((data) => {
            console.log(data);
            imgRandom.src = data.url;
        })
        .catch((error) => console.log("¡Ocurrió un error!"));
};
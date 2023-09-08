const button = document.getElementById("btn");

function postion(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

function error(error) {
    console.log(error);
}

button.addEventListener("click", async() => {
    const lo = navigator.geolocation.getCurrentPosition(postion, error)
        // (error) => {
        //     console.log(error);
        // });


})
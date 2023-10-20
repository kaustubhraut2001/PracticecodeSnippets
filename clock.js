let ele = document.getElementById("btn");

function f() {
    let t = new Date();

    let time = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;

    document.getElementById("time").innerText = time;
}

let interval = setInterval(() => {
    f();


}, 1000)


ele.addEventListener("click", () => {
    clearInterval(interval);
})
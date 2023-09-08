// window.localStorage.setItem('mapsetweakmap', 'mapsetweakmap');
// location.reload();

let a = document.querySelector("input");
console.log(a.value);
localStorage.setItem("a", a.value);



let b = document.querySelector("button");
b = b.textContent = localStorage.getItem("a");

sessionStorage.setItem("a", a.value);
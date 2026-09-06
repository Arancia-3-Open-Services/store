const hash = "#" + Math.random(2 -2);
console.log("Starting Shell with A3N Live hash:", hash);
document.getElementById("hash").innerText = hash;
// buttons.
document.querySelector('#latest').addEventListener('click', () => {
    location.href="https://arancia-3-open-services.github.io/store/latest"
});
document.querySelector('#reload').addEventListener('click', () => {
    location.href="./index.html"
});
document.querySelector('#libs').addEventListener('click', () => {
    location.href="https://arancia-3-open-services.github.io/store/libraries"
});
document.querySelector('#download').addEventListener('click', () => {
    window.location.href="https://github.com/arancia313/Arancia-3-Network/raw/refs/heads/System/store/games/Incredibox-Smart_Hub_Kuh_treatment.sb3"
});
// Don't think about this.
document.getElementById('#ishkt').src="https://raw.githubusercontent.com/arancia313/Arancia-3-Network/refs/heads/System/assets/images/new_preview.png"
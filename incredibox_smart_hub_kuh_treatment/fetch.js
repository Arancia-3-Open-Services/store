const descElement = document.querySelector('ishktdesc');
if (descElement) {
    descElement.innerText = t;
}
const url2 = "https://raw.githubusercontent.com/arancia313/Arancia-3-Network/refs/heads/System/net/desc/ISHKT/desc.txt";
fetch(url2).then(r=>r.text()).then(t=>document.getElementById('ishktdesc').innerText=t);
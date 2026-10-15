const pesan = document.getElementById("pesan");
const tombolPesan = document.getElementById("tombolPesan");
const tombolWarna = document.getElementById("tombolWarna");

tombolPesan.addEventListener("click", function() {
    pesan.textContent = "weee api 600 kesss 🌱";
});

tombolWarna.addEventListener("click", function() {
    const warna = ["#dbeafe", "#fce7f3", "#dcfce7", "#fef3c7", "#ede9fe"];

    const pilihan = Math.floor(Math.random() * warna.length);

    document.body.style.backgroundColor = warna[pilihan];
});
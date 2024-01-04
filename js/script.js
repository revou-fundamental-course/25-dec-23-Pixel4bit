// Function untuk menghitung keliling segitiga
function hitung_kel() {
    var sisi_a = parseFloat(document.getElementById("sisi_a_segitiga").value);
    var sisi_b = parseFloat(document.getElementById("sisi_b_segitiga").value);
    var sisi_c = parseFloat(document.getElementById("sisi_c_segitiga").value);

    // Untuk mengecek inputnya
    if (isNaN(sisi_a) || isNaN(sisi_b) || isNaN(sisi_c)) {
        alert("Input harus berupa angka.");
        return;
    }

    // Rumus menghitung keliling segitiga
    var keliling = sisi_a + sisi_b + sisi_c;

    // Menampilkan hasil perhitungan keliling
    var hasil_keliling = document.getElementById("hasil_keliling");
    hasil_keliling.innerHTML = "<p>Hasil Keliling Segitiga:</p><p>K = sisi + sisi + sisi</p> <p>K = "+ sisi_a + " + " + sisi_b + " + " + sisi_c +"</p><p>K = " + keliling + " cm </p>"
}

function reset_kel() {
    document.getElementById("sisi_a_segitiga").value = "";
    document.getElementById("sisi_b_segitiga").value = "";
    document.getElementById("sisi_c_segitiga").value = "";

    var hasil_keliling = document.getElementById("hasil_keliling");
    hasil_keliling.innerHTML = "";
}

// Function untuk menghitung luas segitiga
function hitung_luas() {
    // Get the values from the input fields
    var alas = parseFloat(document.getElementById("alas_segitiga").value);
    var tinggi = parseFloat(document.getElementById("tinggi_segitiga").value);

    // Untuk mengecek input
    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Input alas dan tinggi harus berupa angka.");
        return;
    }

    // Rumus menghitung luas segitiga
    var luas = (alas * tinggi) / 2;

    // Menampilkan hasil perhitungan
    var hasil_luas = document.getElementById("hasil_luas");
    hasil_luas.innerHTML = "<p>Hasil Luas Segitiga:</p><p>L = (alas x tinggi) / 2</p><p>L = (" + alas + " x " + tinggi + ") / 2</p><p>L = " + luas + " cm</p>"
}

// Function untuk mereset perhitungan
function reset_luas() {
    document.getElementById("alas_segitiga").value = "";
    document.getElementById("tinggi_segitiga").value = "";

    var hasil_luas = document.getElementById("hasil_luas");
    hasil_luas.innerHTML = "";
}
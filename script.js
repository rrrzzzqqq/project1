const tombolTambah = document.getElementById("tombolTambah");
const reset = document.getElementById("reset");
const inputan = document.querySelector(".inputan");
const wadahJadwal = document.getElementById("wadahJadwal");

tombolTambah.addEventListener("click", () => {
  // jika inputan kosong, maka kembali ke awal
  if (inputan.value.trim() === "") return;
  // wadah untuk jadwal per-baris
  const wadahPerJadwalDanButton = document.createElement("div");
  // deklarasi nama kelas
  wadahPerJadwalDanButton.className = "wadahJadwalSebaris";
  const tambahJadwal = document.createElement("p");
  // deklarasi jadwal.
  const tombolMinusPerJadwal = document.createElement("button");
  tombolMinusPerJadwal.className = "tombolMinusPerJadwal";
  tombolMinusPerJadwal.textContent = "-";
  tambahJadwal.textContent = inputan.value;
  wadahPerJadwalDanButton.appendChild(tambahJadwal);
  wadahPerJadwalDanButton.appendChild(tombolMinusPerJadwal);
  wadahJadwal.appendChild(wadahPerJadwalDanButton);
  inputan.value = "";

  // hapus per-jadwal
  tombolMinusPerJadwal.addEventListener("click", () => {
    if (wadahPerJadwalDanButton) wadahPerJadwalDanButton.remove();
  });

  // mencoret per-jadwal
  wadahPerJadwalDanButton.addEventListener("click", () => {
    wadahPerJadwalDanButton.classList.toggle("coret");
  });
});

// hapus semua jadwal
reset.addEventListener("click", () => {
  if (wadahJadwal) wadahJadwal.innerHTML = "";
});

// tambah per-jadwal dengan tombol enter
inputan.addEventListener("keypress", (enter) => {
  if (enter.key === "Enter") {
    tombolTambah.click();
  }
});

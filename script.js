const tombolTambah = document.getElementById("tombolTambah");
const reset = document.getElementById("reset");
const inputan = document.querySelector(".inputan");
const wadahJadwal = document.getElementById("wadahJadwal");

tombolTambah.addEventListener("click", () => {
  if (inputan.value.trim() === "") return;
  const wadahPerJadwalDanButton = document.createElement("div");
  wadahPerJadwalDanButton.className = "wadahJadwalSebaris";
  const tambahJadwal = document.createElement("p");
  const tombolMinusPerJadwal = document.createElement("button");
  tombolMinusPerJadwal.className = "tombolMinusPerJadwal";
  tombolMinusPerJadwal.textContent = "-";
  tambahJadwal.textContent = inputan.value;
  wadahPerJadwalDanButton.appendChild(tambahJadwal);
  wadahPerJadwalDanButton.appendChild(tombolMinusPerJadwal);
  wadahJadwal.appendChild(wadahPerJadwalDanButton);
  inputan.value = "";

  tombolMinusPerJadwal.addEventListener("click", () => {
    if (wadahPerJadwalDanButton) wadahPerJadwalDanButton.remove();
  });
});

reset.addEventListener("click", () => {
  if (wadahJadwal) wadahJadwal.innerHTML = "";
});

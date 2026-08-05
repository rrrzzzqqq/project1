const tombolTambah = document.getElementById("tombolTambah");
const inputan = document.querySelector(".inputan");
const wadahJadwal = document.getElementById("wadahJadwal");

tombolTambah.addEventListener("click", () => {
  if (inputan.value.trim() === "") return;
  const tambahJadwal = document.createElement("p");
  tambahJadwal.textContent = inputan.value;
  wadahJadwal.appendChild(tambahJadwal);
  inputan.value = "";
});

window.onload = iniciar;
function iniciar() {
  let boton = document.getElementById("btnAgragar");
  boton.addEventListener("click", cargar);
}
async function cargarUrl(url) {
  let resultado = await fetch(url);
  return resultado.json();
}
async function cargar() {
  let pais = document.getElementById("selecPais").value;
  let inputFechas = document.getElementById("inputFechas").value;
  let url =
    "https://api.covid19tracking.narrativa.com/api/" +
    inputFechas +
    "/country/" +
    pais;
  let json = await cargarUrl(url);
  let estadisticas = json.dates[inputFechas].countries[pais];
  document.getElementById("today_confirmed").innerHTML =
    estadisticas.today_confirmed;
  document.getElementById(
    "today_hospitalised_patients_with_symptoms"
  ).innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
  document.getElementById("today_intensive_care").innerHTML =
    estadisticas.today_intensive_care;
  document.getElementById("today_new_deaths").innerHTML =
    estadisticas.today_new_deaths;
  document.getElementById(
    "today_new_hospitalised_patients_with_symptoms"
  ).innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
  document.getElementById("today_new_intensive_care").innerHTML =
    estadisticas.today_new_intensive_care;
  document.getElementById("today_new_open_cases").innerHTML =
    estadisticas.today_new_open_cases;
  document.getElementById("today_new_recovered").innerHTML =
    estadisticas.today_new_recovered;
  document.getElementById("today_new_total_hospitalised_patients").innerHTML =
    estadisticas.today_new_total_hospitalised_patients;
  document.getElementById("today_open_cases").innerHTML =
    estadisticas.today_open_cases;
}

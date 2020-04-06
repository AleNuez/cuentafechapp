var conocimos = moment('2017-10-17'); //genero las fechas
var novios = moment('2018-04-02');
var comprometidos = moment('2020-02-24');
var casorio = moment('2020-08-07');
var now = moment();

var timeconocimos = moment.duration(now.diff(conocimos)); //resto las fechas
var timenovios = moment.duration(now.diff(novios));
var timecomprometidos = moment.duration(now.diff(comprometidos));
var timetomarry = moment.duration(casorio.diff(now));

var diffnovios = moment.preciseDiff(novios, now, true);
var diffconocimos = moment.preciseDiff(conocimos, now, true); 
var diffcomprometidos = moment.preciseDiff(comprometidos, now, true);
var diffmarry = moment.preciseDiff (now, casorio ,true);

var yearspace = document.getElementById("meet-years"); //manipulo dom y muestro
var monthspace = document.getElementById("meet-months");
var dayspace = document.getElementById("meet-days");
yearspace.innerHTML = diffconocimos.years;
monthspace.innerHTML = diffconocimos.months;
dayspace.innerHTML = diffconocimos.days;

var yearnovspace = document.getElementById("novios-years");
var monthnovspace = document.getElementById("novios-months");
var daynovspace = document.getElementById("novios-days");
yearnovspace.innerHTML = diffnovios.years;
monthnovspace.innerHTML = diffnovios.months;
daynovspace.innerHTML = diffnovios.days;

var yearcompspace = document.getElementById("compromiso-years");
var monthcompspace = document.getElementById("compromiso-months");
var daycompspace = document.getElementById("compromiso-days");
yearcompspace.innerHTML = diffcomprometidos.years;
monthcompspace.innerHTML = diffcomprometidos.months;
daycompspace.innerHTML = diffcomprometidos.days;

var yearmarryspace = document.getElementById("marriage-years");
var monthmarryspace = document.getElementById("marriage-months");
var daymarryspace = document.getElementById("marriage-days");
yearmarryspace.innerHTML = diffmarry.years;
monthmarryspace.innerHTML = diffmarry.months;
daymarryspace.innerHTML = diffmarry.days;

hideNav = () => {
    let nav = document.querySelector("#navbar");
    nav.style.display = nav.style.display == "block" ? "none" : "block";

}

beautyCross = (x) => {
    x.classList.toggle("close");
}
showMeet = (id, card) => {
    let check = document.querySelector(id);
    let meetCard = document.querySelector(card);
    meetCard.style.display = check.checked == 1 ? "flex" : "none";
}

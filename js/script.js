var conocimos = moment('2017-10-17'); //genero las fechas
var novios = moment('2018-04-02');
var comprometidos = moment('2020-02-24');
var now = moment();

var timeconocimos = moment.duration(now.diff(conocimos)); //resto las fechas
var timenovios = moment.duration(now.diff(novios));
var timecomprometidos = moment.duration(now.diff(comprometidos));
var diffnovios = moment.preciseDiff(novios, now, true);
var diffconocimos = moment.preciseDiff(conocimos, now, true); 
var diffcomprometidos = moment.preciseDiff(comprometidos, now, true);

var yearspace = document.getElementById("years"); //manipulo dom y muestro
var monthspace = document.getElementById("months");
var dayspace = document.getElementById("days");
yearspace.innerHTML = diffconocimos.years;
monthspace.innerHTML = diffconocimos.months;
dayspace.innerHTML = diffconocimos.days;

var yearnovspace = document.getElementById("yearsnov");
var monthnovspace = document.getElementById("monthsnov");
var daynovspace = document.getElementById("daysnov");
yearnovspace.innerHTML = diffnovios.years;
monthnovspace.innerHTML = diffnovios.months;
daynovspace.innerHTML = diffnovios.days;

var yearcompspace = document.getElementById("yearscom");
var monthcompspace = document.getElementById("monthscom");
var daycompspace = document.getElementById("dayscom");
yearcompspace.innerHTML = diffcomprometidos.years;
monthcompspace.innerHTML = diffcomprometidos.months;
daycompspace.innerHTML = diffcomprometidos.days;



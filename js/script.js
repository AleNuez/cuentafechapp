var conocimos = moment('2017-10-17'); //genero las fechas
var novios = moment('2018-04-02');
var now = moment();

var timeconocimos = moment.duration(now.diff(conocimos)); //resto las fechas
var timenovios = moment.duration(now.diff(novios));
var diffnovios = moment.preciseDiff(novios, now, true);
var diffconocimos = moment.preciseDiff(conocimos, now, true); 

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



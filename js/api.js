// Funcion que nos ayuda a traer el nombre de la ciudad.
function nombreCiudad (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`,
        units: "metric",
    } 
    $.ajax(settings).done(function (response) {
        var nombre_ciudad = document.getElementById(id);
        var nombre_banner = response.name;
        nombre_ciudad.innerHTML = `<p>${nombre_banner}</p>`
    });
};
nombreCiudad("Bogota","co","banner-texto");
nombreCiudad("Paris","fr","nombre-otros-paises-1");
nombreCiudad("Argentina","ar","nombre-otros-paises-2");

// Funcion que nos permite obtener la temperatura de los dias siguentes del Forecast
function temperaturaProximosDias (ciudad,cant,id_1,id_2,id_3) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apikey}&units=metric&cnt=${cant}`
    } 
    $.ajax(settings).done(function (response) {
        var prox_temp_1 = document.getElementById(id_1);
        var prox_temp_2 = document.getElementById(id_2);
        var prox_temp_3 = document.getElementById(id_3);

        var max_tem_1 = response.list[3].main.temp_max;
        var min_tem_1 = response.list[3].main.temp_min;
        var max_tem_2 = response.list[11].main.temp_max;
        var min_tem_2 = response.list[11].main.temp_min;
        var max_tem_3 = response.list[19].main.temp_max;
        var min_tem_3 = response.list[19].main.temp_min;
        prox_temp_1.innerHTML = `<p>${parseInt(max_tem_1)}º / ${parseInt(min_tem_1)}º</p>`;
        prox_temp_2.innerHTML = `<p>${parseInt(max_tem_2)}º / ${parseInt(min_tem_2)}º</p>`;
        prox_temp_3.innerHTML = `<p>${parseInt(max_tem_3)}º / ${parseInt(min_tem_3)}º</p>`;
    });
};
temperaturaProximosDias("Bogota",24,"dia-1","dia-2","dia-3");

// Esta funcion permite obtener el nombre del dia de la semana, se utilizó el metodo moment()
function nombreDiasSemana (ciudad,cant,id_1,id_2,id_3) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apikey}&units=metric&cnt=${cant}`
    } 
    $.ajax(settings).done(function (response) {
        var dia_next_1 = document.getElementById(id_1);
        var dia_next_2 = document.getElementById(id_2);
        var dia_next_3 = document.getElementById(id_3);
        
        var fecha = response.list[3].dt_txt;
        var fecha2 = response.list[11].dt_txt;
        var fecha3 = response.list[19].dt_txt;
        dia_next_1.innerHTML = `<p>${moment(fecha).format('dddd')}</p>`;
        dia_next_2.innerHTML = `<p>${moment(fecha2).format('dddd')}</p>`;
        dia_next_3.innerHTML = `<p>${moment(fecha3).format('dddd')}</p>`;
    });
};
nombreDiasSemana("Bogota",24,"dia_proximo_1","dia_proximo_2","dia_proximo_3")

// Con esta funcion podemos obtener el nombre del clima en el momento.
function nombreClima (ciudad,cant,id_1,id_2,id_3) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apikey}&units=metric&cnt=${cant}`
    } 
    $.ajax(settings).done(function (response) {
        var clima_next_1 = document.getElementById(id_1);
        var clima_next_2 = document.getElementById(id_2);
        var clima_next_3 = document.getElementById(id_3);
        
        var clima_1 = response.list[3].weather[0].main;
        var clima_2 = response.list[11].weather[0].main;
        var clima_3 = response.list[19].weather[0].main;
        clima_next_1.innerHTML = `<p>${clima_1}</p>`;
        clima_next_2.innerHTML = `<p>${clima_2}</p>`;
        clima_next_3.innerHTML = `<p>${clima_3}</p>`;
    });
};
nombreClima("Bogota",24,"clima_proximo_1","clima_proximo_2","clima_proximo_3")

// Funcion que nos permite obtener la imagen del clima de los proximos dias.
function obteniendoImg_proximosDias (ciudad,cant,id,lista,clima) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings_1 = {
        "url": `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apikey}&units=metric&cnt=${cant}`
    } 
    $.ajax(settings_1).done(function (response) {
        var img = document.getElementById(id);
        var codigoImg = response.list[lista].weather[clima].icon;
        var imagen =  `http://openweathermap.org/img/wn/${codigoImg}@2x.png`
        img.innerHTML = `<img class="img_pantalla" src="${imagen}"></img>`;
    });
};
obteniendoImg_proximosDias("Bogota",24,"icon-dia-semana-1",3,0);
obteniendoImg_proximosDias("Bogota",24,"icon-dia-semana-2",11,0);
obteniendoImg_proximosDias("Bogota",24,"icon-dia-semana-3",19,0);

// Funcion que nos permite obtener la imagen del clima del dia actual
function obteniendoImg_diaActual (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings_1 = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`
    } 
    $.ajax(settings_1).done(function (response) {
        var img = document.getElementById(id);
        var codigoImg = response.weather[0].icon;
        console.log(codigoImg);
        var imagen =  `http://openweathermap.org/img/wn/${codigoImg}@2x.png`
        img.innerHTML = `<img class="img_pantalla" src="${imagen}"></img>`;
    });
};
obteniendoImg_diaActual("Argentina","ar","icon-otros-paises-2");
obteniendoImg_diaActual("Paris","fr","icon-otros-paises-1");
obteniendoImg_diaActual("Bogota","co","img_dia")

// Funcion que permite obtener la temperatura del dia actual
function obteniendoTemp_diaActual (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`
    } 
    $.ajax(settings).done(function (response) {
        var id_temp = document.getElementById(id);
        var temp_obt = response.main.temp;
        id_temp.innerHTML = `<p>${temp_obt}º</p>`;
    });
};
obteniendoTemp_diaActual("Paris","fr","temp-otros-paises-1");
obteniendoTemp_diaActual("Argentina","ar","temp-otros-paises-2");
obteniendoTemp_diaActual("Bogota","co","temp_hoy");

// Funcion que permite obtener la humedad del dia actual
function obteniendoHumedad_ciudad (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`
    } 
    $.ajax(settings).done(function (response) {
        console.log(response);
        var id_humedad = document.getElementById(id);
        var humedad_obt = response.main.humidity;
        id_humedad.innerHTML = `<p>${humedad_obt}º</p>`;
    });
};
obteniendoHumedad_ciudad("Paris","fr","porcentaje-humedad-1");
obteniendoHumedad_ciudad("Argentina","ar","porcentaje-humedad-2");

// Funcion que permite obtener la descripcion en string del clima del dia
function obteniendoDescripcion_clima (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`
    } 
    $.ajax(settings).done(function (response) {
        console.log(response);
        var id_descripcion = document.getElementById(id);
        var descripcion_obt = response.weather[0].description;
        id_descripcion.innerHTML = `<p>${descripcion_obt}</p>`;
    });
};
obteniendoDescripcion_clima("Paris","fr","clima-otros-paises-1");
obteniendoDescripcion_clima("Argentina","ar","clima-otros-paises-2");
obteniendoDescripcion_clima("Bogota","co","clima_hoy");

// Funcion que permite obtener la velocidad del viento.
function obteniendoVelocidad_clima (ciudad,pais,id) {
    var apikey = "1af8d9aa4463fa066e36547746a79a3c"
    var settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`
    } 
    $.ajax(settings).done(function (response) {
        console.log(response);
        var id_velocidad = document.getElementById(id);
        var velocidad_obt = response.wind.speed;
        id_velocidad.innerHTML = `<p>${velocidad_obt}km/h</p>`;
    });
};
obteniendoVelocidad_clima("Paris","fr","km-otros-paises-1");
obteniendoVelocidad_clima("Argentina","ar","km-otros-paises-2");



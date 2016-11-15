

function geolocalizar()
        {
          $("#estado").text("Buscando...");
          navigator.geolocation.getCurrentPosition(exito,fallo);
        }
 
        

        function exito(posicion){

          var lat = posicion.coords.latitude; //obtengo la latitud
          var lon = posicion.coords.longitude; //obtengo la longitud
          var googleAPI = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon; //Construyo URL
          
          $.getJSON(googleAPI, function(data){ 
          var direccion = data.results[0].formatted_address;
              var direccion2 = data.results[0].address_components[1].long_name+", "+data.results[0].address_components[0].long_name;
              $("#estado").html("Dirección completa: "+direccion + "<br>Dirección parcial: " + direccion2);
          });

          
          $("#empieza").hide();
        }

        /*Funcion para el fallo cuando no hay geolocalizacion*/
        function fallo(fallo)
        {
            $("#estado").text("No te encontre, pero lo voy a seguir intentando.");
        } 

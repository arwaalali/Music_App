$(document).ready(function(){ // Cuando el documento esté preparado que lea la función.


	// $(".botonreg").on("click", function(){ 
	// 	window.location = "index1.html"
	// });


	var username = $(".user").val(); 
	var userpass = $(".password").val(); 


	$.ajax ({
		url: 'users.json', // sacame los datos del usuario de este arhivo					
		type: 'GET',		// tipo get para la cabecera 	
		dataType: 'JSONP', 	// el tipo de archivo que voy a leer	
		crossDomain: true,  // abrir archivos locales que no vayan con peticion a api
		jsonpCallback : 'callback', //respuesta, la funcion esta pero este es el repsonse
			

		success: function(response){
			mostrar(response);
		},

		

		error: function(error){   
		 	console.log(error);
		}
	});


//INICIAR SESIÓN
	function mostrar(response){
		event.preventDefault();
			// var otro = $('#name').append(response[0].user);// para que se imprima el user
			// console.log(otro);

		$(".botonreg").on("click", function(){ 
		// cuando el valor escrito en el input sea igual al definido en el .json succes.

			var name = response[0].user;
			var nombre = $('#userreg').val();
			console.log ("name");


			var pass = response[0].password;
			var contra = $("#passreg").val();
			console.log("pass");



			if (name === nombre && pass === contra) {
			window.location = "index2.html"
			console.log("hii");
			}
		});
	}


//GUARDAR USUARIO
	//$(document).ready(function(){ 
		$(".botonreg").on("click", function(){
			event.preventDefault();

			// coge el valor de los inputs
			var login = $("#userreg").val();
			var passw = $("#passreg").val();

			//guardar la sesion de mi usuario
			var array= [];
			array.push(login);
			array.push(passw);

			window.sessionStorage.setItem("user", JSON.stringify(array));

		});


//AÑADIR CANCIONES A LA LISTA
		$(".add").on("click", function(){
			event.preventDefault();

			var artist = $("#artista").val();
			var song = $("#cancion").val();

			var array=[];
			array.push(artist);
			array.push(song);

			$(".listacan").append("<li class='canciones'>  Canción: "+ song + "</li>");



//GUARDAR LISTA POR USUARIO EN EL LOCAL STORAGE // ERROR
			// var getuser = window.sessionStorage.getItem('user'); //cogeme el usuario que almaceno en el session

			// var userlist = $(".listacan"); // lo igualo a la lista 
			// user.push('userlist'); // push al user, añadelo 

			// window.localStorage.setItem("getuser", JSON.stringify(userlist));

		});

		

//PEDIR CANCIONES DEL SPOTIFY

	$(".add").on("click", function(){
			event.preventDefault();

		//var artistsearch = $("#artista").val(); // el usuario escribe la búsqueda aqui
		var songsearch = $("#cancion").val();
		var audiosearch = $(".audio");
	

		$.ajax ({
			url: "https://api.spotify.com/v1/search?type=track&limit=1&q=" + songsearch, // sacame los datos del usuario de este arhivo					
			type: 'GET',		// tipo get para la cabecera 	

				
			success: function(response){
				var track = response.tracks.items[0];
				audiosearch[0].src=track.preview_url;
				audiosearch[0].play();	
				//audiosearch.prop("src", track.preview_url);		
			},

			error: function(error){   
			 	console.log(error);
			}

		});
	});
	
	});	

	
	
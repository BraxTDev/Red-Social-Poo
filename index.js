//Base de datos
const UserDateBase =   [
    {
        username: "Andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789",

    }
];

const UsersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta Javascript"
    },
    {

        username: "Oscar",
        timeline: "Bebeloper es lo mejor"

    },
    {
        username:  "Mariana",
        timeline: "Ami me gusta mas el cafe",  

    }
];


const username = prompt('¿Cual es tu usuario?')
const password = prompt('Cual es tu contraseña')

function  usuarioExistente (username, password)  {
    // hacer recorrer el arrays de objetos

    for(let i = 0; i < UserDateBase.length; i++) {
    //validar si cada uno de igual
    if(
        // validar si esos valores son igual a los que estamos colando en nuestra declaracion de la variables
        UserDateBase[i].username === username  && UserDateBase[i].password === password
        

    ) {
        return true
    } 
      return false
    }

}

function SignIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(UsersTimeline)
    } else {
        alert("Ups, usuario o contraseña incorrecto")
    }
}

SignIn(username, password);







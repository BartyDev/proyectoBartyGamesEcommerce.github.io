// llamo al  prompt mediante la funcion validacion que me permite almacenar las entradas recientes mediante let en formato string
let nombre = "Ingrese su Nombre";
let opciones = "ingrese una opcion: \n 1: Comprar juegos 🎮 \n 2: salir";

//defino mi array de objetos
const juegos = [{
    id: 1,
    titulo: "CS Go",
    genero: "multijugador,shooter",
    precio: 15,
    cantidad: 5
  },
  {
    id: 2,
    titulo: "Valheim",
    genero: "rol,supervivencia",
    precio: 12,
    cantidad: 5
  },
  {
    id: 3,
    titulo: "F1® 22",
    genero: "carreras,deporte",
    precio: 35,
    cantidad: 5
  },
  {
    id: 4,
    titulo: "God of War",
    genero: "accion,guerra",
    precio: 22,
    cantidad: 5
  },
  {
    id: 5,
    titulo: "Final Fantasy VII Remake",
    genero: "rol,accion y aventura",
    precio: 35,
    cantidad: 5
  },
  {
    id: 6,
    titulo: "Elden Ring",
    genero: "aventura,fantasia oscura",
    precio: 45,
    cantidad: 5
  },
  {
    id: 7,
    titulo: "Geometry Dash",
    genero: "accion,indie",
    precio: 8,
    cantidad: 5
  },
];

//defino variables - constantes - arrays
const carritoCompras = [];
var objectValidacion;
let arrayJuegos = [];

//clase productos del carrito y su funcion constructora
class productosCarro {
  constructor(object) {
    this.id = object.id;
    this.titulo = object.titulo;
    this.genero = object.genero;
    this.precio = object.precio;
    this.cantidad = object.cantidad;
  }
}

//funcion de validacion me permite almacenar las entradas string y reutilizarlas mediante el return de la variable
function validacion(nombre) {
  var nuevaEntrada = prompt(nombre);
  while (nuevaEntrada == "" || nuevaEntrada == null) {
    alert("😵 Error no se ingresaron datos");
    nuevaEntrada = prompt(nombre);
  }
  return objectValidacion = nuevaEntrada;
}

//validacion y retorno del nombre de usuario y bienvenida
validacion(nombre);
alert('🤗 Bienvenido(a)  ' + objectValidacion.toUpperCase() + '  a  "barty G`o" 🎮');
menu();


//menu principal- aqui posibles mayores opciones a futuro(usamos el parseint para obtener un formato numero para validar las opciones con el case)
function menu() {
  validacion(opciones);
  parseInt(objectValidacion);
  switch (objectValidacion) {
    case "1":
      menuProd();
      break;
    case "2":
      salir(false);
      break;
    default:
      alert("error 😵 ingresa otra opcion");
      menu();
  }
}

//lista de los juegos en general- aqui se puede elegir los juegos y sumarlos al carrito,puedes escoger cuantos juegos quieras hasta agotar stock!
function menuProd() {
  let mostrarJuegos = "";
  let x = 1;
  juegos.forEach((i) => {
    mostrarJuegos += (i.id + " - " + i.titulo + " : " + i.genero + ", su precio es de  $ " + i.precio + " - stock : " + i.cantidad + "\n");
    x++;
  });
  let menuJuegos = (mostrarJuegos + (x) + " - Finalizar Compra \n" + (x + 1) + " - Volver");
  valMenuJuegos(menuJuegos, x);
}

//si no esacoges ningun producto te saltara un mensaje de vacio y si vuelves al menu anterior se elimina lo ya escogido y puedes ver el ultimo pedido en consola
function valMenuJuegos(menuJuegos, x) {
  validacion(menuJuegos);
  if (objectValidacion == x) {
    if (carritoCompras.length == 0) {
      alert("carrito Vacio");
      menuProd();
    } else {
      mostrandoPedidos();
    }
  } else if (objectValidacion == x + 1) {
    alert("😵 datos eliminados");
    //ultimo juego desechado u.u
    console.log("el ultimo juego que escogiste fue : " + (arrayJuegos.titulo));
    salir(false);
  } else if (objectValidacion > 0 && objectValidacion < juegos.length + 1) {
    buscadorJ();
  } else {
    alert("error 😵 ingresa otra opcion")
    menuProd();
  }
}

//mapeo de productos en general
function buscadorJ() {
  var cantidad = 1;
  juegos.map(function (producto) {
    if (producto.id == objectValidacion) {
      arrayJuegos = {
        id: producto.id,
        titulo: producto.titulo,
        genero: producto.genero,
        precio: producto.precio,
        cantidad: cantidad,
      };
      return arrayJuegos;
    }
  });
  agreeProduct(arrayJuegos);
}


//funcion para almacenar todos los pedidos realizados con todos sus valores correspondientes al array declarado mas arriba
function agreeProduct(arrayJuegos) {
  const acumulado = carritoCompras.some((elemento) => elemento.id == objectValidacion);
  if (acumulado == false) {
    const nuevoCarrito = new productosCarro(arrayJuegos);
    carritoCompras.push(nuevoCarrito);
    alert("Agregaste " + (arrayJuegos.titulo));
  } else {
    carritoCompras.filter((elemento) => {
      if (elemento.id == objectValidacion) {
        elemento.cantidad++
      }
    });
    alert("Agregaste " + (arrayJuegos.titulo));
  }
  menuProd();
}

//Aqui mostramos el carrito con los productos sumamos precio luego pedimos efectivo al clioente y restamos si es menos nos da un mensaje si es mas nos da vuelto y cerramos el ciclo
function mostrandoPedidos() {
  let mostrarCarrito = "";
  let subTotal = 0;
  let Total = 0;
  carritoCompras.forEach((i) => {
    subTotal = i.precio * i.cantidad;
    Total += subTotal;
    mostrarCarrito += (i.titulo + ":" + i.genero + " $ " + i.precio + " cantidad : " + i.cantidad + " su precio es " + subTotal + "\n");
  });
  alert(mostrarCarrito + "\n Total a Pagar $ " + Total);

  let cash = parseInt(prompt('Ingresa efectivo $ :'))
  if (cash > Total) {
    alert(" Tu vuelto es $ " + (cash - Total));
  } else if (cash < Total) {
    alert('No te alcanza 😵 ingresa un nuevo monto')
    cash = parseInt(prompt('Ingresa Nuevo efectivo $ :'))
    alert(" Tu vuelto es $ " + (cash - Total));
  }
  salir(true);
}

//mensajes de despedida x si compramos o no
function salir(mensaje) {
  if (mensaje == false) {
    alert("Gracias Por tu Visita 🤗 te Esperamos Pronto");
    return;
  } else {
    alert("Enhorabuena 🎉");
    alert("Gracias Por tu Compra 👍 te Esperamos Pronto con mas Novedades")
    return;
  }
}
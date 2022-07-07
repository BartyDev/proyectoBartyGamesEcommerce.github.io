//DOM agrego secion,titulos,parrafos,clases y estilos
let seccion = document.createElement('section');
seccion.className = 'saludo-principal';
let titulo = document.createElement('h2');
titulo.innerHTML = "<h2 style='padding:20px;color:#fff'>Welcome</h2>";
let subTitulo = document.createElement('h3');
subTitulo.innerHTML = "<h3 style='font-size:20px;padding:20px;color:#fff'>Atencion!!!</h3>";
let saludo = document.createElement('p');
saludo.innerHTML = "<p style='padding:20px;color:#fff;'>¡Olvídate del aburrimiento con barty G'o! La mayor selección de juegos está aquí, para que lleves la diversión al siguiente nivel. Juega online y sin preocupaciones: puedes jugar en linea solo o con amigos. ¡Pero cuidado! Nuestros juegos de acción, terror solo son aptos para los más atrevidos; competirás con grandes pilotos en juegos de carreras; podrás poner a prueba al estratega que llevas dentro en todos nuestros juegos de estrategia; y sólo los auténticos exploradores llegarán a su meta en los juegos de aventura. Y para los clásicos, las versiones clásicas y no tan clásicas. ¡Todos los juegos al mejor precio y con la calidad que 5 años de compras exitosas nos certifican! ¡Se bienvenido de parte del equipo barty G'o al mas grande mundo del entretenimiento en linea 🎮!</p>"


seccion.appendChild(titulo);
seccion.appendChild(subTitulo);
seccion.appendChild(saludo);
//document.body.append(seccion);

const intro = document.getElementById('intro');
intro.appendChild(seccion);
function AbrirPestaña(evento, pestaña) {
    // Declara todas las variables
    var i, contenido, linkpestaña;
  
    // Recoge todos los elementos con clase "contenido" y los esconde
    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
      contenido[i].style.display = "none";
    }
  
    // Recoge todos los elementos con clase linkpestaña y les quita la clase activa
    linkpestaña = document.getElementsByClassName("linkpestaña");
    for (i = 0; i < linkpestaña.length; i++) {
      linkpestaña[i].className = linkpestaña[i].className.replace(" active", "");
    }
  
    // Muestra la pestaña actual y le añade la clase activa al link que ha abierto la pestaña
    document.getElementById(pestaña).style.display = "flex";
    evento.currentTarget.className += " active";
  }
// Recoge el elemento con el id "defecto y lo clica para que se abra
document.getElementById("defecto").click();

// Recoge el modal
var modal = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var modal3 = document.getElementById("Modal3");
var modal4 = document.getElementById("Modal4");

// Recoge el boton que abre el modal
var btn = document.getElementById("boton");
var btn2 = document.getElementById("boton2");
var btn3 = document.getElementById("boton3");
var btn4 = document.getElementById("boton4");

// Recoge el span que cierra el modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// Cuando clica en el boton, abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}

// Cuando el clica en el span, cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
// Cuando se clica en cualquier parte fuera del modal lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
// Objeto Alumno
function Alumno (nombre, apellidos, curso, ciclo){
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.curso = curso;
  this.ciclo = ciclo;
}
//Objeto Empresa
function Empresa (nombre,dirección,pagweb,pcontacto,telcontacto,tutorlab,tlf,email){
  this.nombre = nombre;
  this.dirección = dirección;
  this.pagweb = pagweb;
  this.pcontacto = pcontacto;
  this.telcontacto = telcontacto;
  this.tutorlab = tutorlab;
  this.tlf = tlf;
  this.email = email;
}
// Objeto Profesor
function Profesor (nombre, apellidos){
  this.nombre = nombre;
  this.apellidos = apellidos;
}
// Objeto Asignaciones
function Asignaciones (Alumno,Empresa,Tutord,fechainicio,fechafin){
  this.Alumno = Alumno;
  this.Empresa = Empresa;
  this.Tutord = Tutord;
  this.fechainicio = fechainicio;
  this.fechafin = fechafin;
}
// Objeto Actividades
function Actividades (dia,actividad,numhoras){
  this.dia = dia;
  this.actividad = actividad;
  this.numhoras = numhoras;
}
function Mensajito(){
  var mensaje = document.getElementById("Mensaje"); //Recoge la variable del Mensaje de confirmacion
  mensaje.style.display = "flex"; // Le aplica el estilo block para que se muestre
  // Aplica un tiempo para ejecutar una función
  setTimeout(function CerrarMensaje(){
    // Aplica el estilo none para ocultarlo
    mensaje.style.display = "none";
    // El tiempo para que se ejecute esta acción es de 3s
  },3000);
}
/*FUNCION PARA AGREGAR ALUMNOS */
function AgregarAlumno(){
  /*Se crean las Variables de Alumno */
  var nomb= document.getElementById("nombreAlumno").value;
  var apell= document.getElementById("apellidosAlumno").value;
  var curs= document.getElementById("cursoAlumno").value;
  var ciclo= document.getElementById("cicloAlumno").value;
  /*Se crea la fila*/
  var fila="<tr><td>"+nomb+"</td><td>"+apell+"</td><td>"+curs+"</td><td>"+ciclo+"</td></tr>";
  /*Se crea la variable que crea un TR */
  var tr = document.createElement("TR");
  /*Al TR se le inserta la variable fila */
  tr.innerHTML=fila;
  /*Se recoge la tabla y se le asigna el TR */
  document.getElementById("tablaAlumnos").appendChild(tr);
  /*Se crea un objeto con el alumno insertado */
  var x = new Alumno (nomb, apell, curs, ciclo);
  /*Se muestra por consola*/
  console.log(x);
  Mensajito();
}
/*FUNCION PARA AGREGAR EMPRESA */
function AgregarEmpresa(){
  /*Se crean las variables de Empresa */
  var nombemp = document.getElementById("NombreEmpresa").value;
  var dir = document.getElementById("DireccionEmpresa").value;
  var web = document.getElementById("PaginaEmpresa").value;
  var contact = document.getElementById("PersonaContacto").value;
  var tlfcontact = document.getElementById("NumeroContacto").value;
  var tutor = document.getElementById("TutorLaboral").value;
  var tlf = document.getElementById("TLF").value;
  var email = document.getElementById("EmailTutor").value;
  /*Se crea la fila a insertar en la tabla */
  var filaemp ="<tr><td>"+nombemp+"</td><td>"+dir+"</td><td>"+web+"</td><td>"+contact+"</td><td>"+tlfcontact+"</td><td>"+tutor+"</td><td>"+tlf+"</td><td>"+email+"</td></tr>";
  /*Se crea una variable para crear el elemento TR */
  var tremp = document.createElement("TR");
  /*Se inserta en el TR la fila */
  tremp.innerHTML = filaemp;
  /*Se le asigna a la tabla empresas el objeto creado */
  document.getElementById("tablaEmpresas").appendChild(tremp);
  /*Se crea una variable para el objeto empresa */
  var y = new Empresa (nombemp, dir, web, contact, tlfcontact, tutor, tlf, email);
  /*Se muestra en consola el objeto empresa */
  console.log(y);
  Mensajito();
}
/*FUNCION PARA AGREGAR PROFESOR */
function AgregarProfesor(){
  /*Se crean las variables de Profesor */
  var nombProf = document.getElementById("nombreProfesor").value;
  var apellProf = document.getElementById("apellidosProfesor").value;
  /*Se crea la fila a insertar en la tabla */
  var filaprof = "<tr><td>"+nombProf+"</td><td>"+apellProf+"</td><tr>";
  /*Se crea la variable para crear elemento TR */
  var trprof = document.createElement("TR");
  /*Se inserta en el TR la fila*/
  trprof.innerHTML = filaprof;
  /*Se le asigna a la tabla profesor el objeto creado*/
  document.getElementById("tablaProfesor").appendChild(trprof);
  /*Se crea una variable para guardar el objeto profesor*/
  var p = new Profesor (nombProf, apellProf);
  /*Se muestra por consola el objeto profesor */
  console.log(p);
  Mensajito();
}
/*FUNCION PARA ASIGNAR PROFESORES A ALUMNOS*/
function AgregarAsignacion(){
  /*Se crean las variables de Asignaciones */
  var nombreAsignacion = document.getElementById("nombreAsignacion").value;
  var empresaAsignacion = document.getElementById("empresaAsignacion").value;
  var tutorDocente = document.getElementById("TutorDocente").value;
  var fechaInicio = document.getElementById("FechaInicio").value;
  var fechaFinal = document.getElementById("FechaFinal").value;
  /*Se crea la fila a insertar en la tabla */
  var filaAsign = "<tr><td>"+nombreAsignacion+"</td><td>"+empresaAsignacion+"</td><td>"+tutorDocente+"</td><td>"+fechaInicio+"</td><td>"+fechaFinal+"</td></tr>";
  /*Se crea la variable para crear elemento TR*/
  var trAsign = document.createElement("TR");
  /*Se inserta en el TR la fila*/
  trAsign.innerHTML = filaAsign;
  /*Se le asigna a la tabla Asignaciones el objeto creado */
  document.getElementById("tablaAsignaciones").appendChild(trAsign);
  /*Se crea una variable para guardar el objeto profesor*/
  var a = new Asignaciones (nombreAsignacion, empresaAsignacion, tutorDocente, fechaInicio, fechaFinal);
  /*Se muestra por consola el objeto nuevo asignaciones*/
  console.log(a);
  /*Se muestra el mensaje de realizacion de cambios */
  Mensajito();
}
// OBJETOS ALUMNOS
var Alumno01 = new Alumno ("Julián", "Chaves Velasco", "1º", "ASIR");
var Alumno02 = new Alumno ("José", "Vizuete Domínguez", "1º","ASIR");
var Alumno03 = new Alumno ("Daniel", "Kansas Gutiérrez", "2º", "ASIR");

// OBJETOS EMPRESAS
var Empresa01 = new Empresa ("AguasEstancadas S.A","C/Abrete sésamo nº1","www.aguasestancadas.es","Pepon","955876231","Pepe Junior","662211041","pepejr@aguasestan.es");
var Empresa02 = new Empresa ("EMASESA","C/Onomatopeya","www.emasesa.es","Jose luís","955876097","Kike","667452182","josema@emasesa.es"); 
var Empresa03 = new Empresa ("ALJARAFESA","C/Troya nº7","www.aljarafesa.es","Enrique","955874211","Alonso","696858747","alonso@aljarafesa.es");

// OBJETOS PROFESORES
var Profesor01 = new Profesor ("Enrique","Muñoz Collado");
var Profesor02 = new Profesor ("Álvaro","Recio Domínguez");
var Profesor03 = new Profesor ("Jesús","Palomero Monaguillo");

// OBJETOS ASIGNACIONES
var Asignacion01 = new Asignaciones (Alumno01.nombre,Empresa01.nombre+"("+Empresa01.tutorlab+")",Profesor01.nombre+" "+Profesor01.apellidos,"2020/05/19","2020/08/20");
var Asignacion02 = new Asignaciones (Alumno02.nombre,Empresa02.nombre+"("+Empresa02.tutorlab+")",Profesor02.nombre+" "+Profesor02.apellidos,"2020/05/25","2020/08/30");
var Asignacion03 = new Asignaciones (Alumno03.nombre,Empresa03.nombre+"("+Empresa03.tutorlab+")",Profesor03.nombre+" "+Profesor03.apellidos,"2020/05/30","2020/08/35");

/// TABLA ASIGNACIONES
// ALUMNO1
document.getElementById("Alumno01Nombre").innerHTML = Asignacion01.Alumno
document.getElementById("Alumno01Empresa").innerHTML = Asignacion01.Empresa
document.getElementById("Alumno01Tutord").innerHTML = Asignacion01.Tutord
document.getElementById("Alumno01Fecini").innerHTML = Asignacion01.fechainicio
document.getElementById("Alumno01Fecfin").innerHTML = Asignacion01.fechafin
// ALUMNO2
document.getElementById("Alumno02Nombre").innerHTML = Asignacion02.Alumno
document.getElementById("Alumno02Empresa").innerHTML = Asignacion02.Empresa
document.getElementById("Alumno02Tutord").innerHTML = Asignacion02.Tutord
document.getElementById("Alumno02Fecini").innerHTML = Asignacion02.fechainicio
document.getElementById("Alumno02Fecfin").innerHTML = Asignacion02.fechafin
// ALUMNO3
document.getElementById("Alumno03Nombre").innerHTML = Asignacion03.Alumno
document.getElementById("Alumno03Empresa").innerHTML = Asignacion03.Empresa
document.getElementById("Alumno03Tutord").innerHTML = Asignacion03.Tutord
document.getElementById("Alumno03Fecini").innerHTML = Asignacion03.fechainicio
document.getElementById("Alumno03Fecfin").innerHTML = Asignacion03.fechafin

// TABLA FICHA SEMANAL
document.getElementById("Alumno01").innerHTML = Alumno01.nombre+" "+Alumno01.apellidos;
document.getElementById("Alumno02").innerHTML = Alumno02.nombre+" "+Alumno02.apellidos;
document.getElementById("Alumno03").innerHTML = Alumno03.nombre+" "+Alumno03.apellidos;

function autocompletar() {
var casilla = document.getElementById("SeleccionarAlumno").value;
if ( casilla == Alumno01.nombre+" "+Alumno01.apellidos ) {
  document.getElementById("CampoCiclo").value = Alumno01.ciclo;
  document.getElementById("CampoCiclo").readOnly = true; // Hace que no se pueda escribir en el input
  document.getElementById("CampoGrado").value = "Superior";
  document.getElementById("CampoGrado").readOnly = true; // Hace que no se pueda escribir en el input
  document.getElementById("CampoProfesor").value = Profesor01.nombre+" "+Profesor01.apellidos;
  document.getElementById("CampoProfesor").readOnly = true; // Hace que no se pueda escribir en el input
  document.getElementById("CampoTutorL").value = Empresa01.tutorlab;
  document.getElementById("CampoTutorL").readOnly = true; // Hace que no se pueda escribir en el input
  document.getElementById("CampoEmpresa").value = Empresa01.nombre;
  document.getElementById("CampoEmpresa").readOnly = true; // Hace que no se pueda escribir en el input
  document.getElementById("CampoCentro").value = Empresa01.dirección;
  document.getElementById("CampoCentro").readOnly = true; // Hace que no se pueda escribir en el input
}
if ( casilla == Alumno02.nombre+" "+Alumno02.apellidos ) {
  document.getElementById("CampoCiclo").value = Alumno02.ciclo;
  document.getElementById("CampoCiclo").readOnly = true;
  document.getElementById("CampoGrado").value = "Superior";
  document.getElementById("CampoGrado").readOnly = true;
  document.getElementById("CampoProfesor").value = Profesor02.nombre+" "+Profesor02.apellidos;
  document.getElementById("CampoProfesor").readOnly = true;
  document.getElementById("CampoTutorL").value = Empresa02.tutorlab;
  document.getElementById("CampoTutorL").readOnly = true;
  document.getElementById("CampoEmpresa").value = Empresa02.nombre;
  document.getElementById("CampoEmpresa").readOnly = true;
  document.getElementById("CampoCentro").value = Empresa02.dirección;
  document.getElementById("CampoCentro").readOnly = true;
}
if ( casilla == Alumno03.nombre+" "+Alumno03.apellidos ){
  document.getElementById("CampoCiclo").value = Alumno03.ciclo;
  document.getElementById("CampoCiclo").readOnly = true;
  document.getElementById("CampoGrado").value = "Superior";
  document.getElementById("CampoGrado").readOnly = true;
  document.getElementById("CampoProfesor").value = Profesor03.nombre+" "+Profesor01.apellidos;
  document.getElementById("CampoProfesor").readOnly = true;
  document.getElementById("CampoTutorL").value = Empresa03.tutorlab;
  document.getElementById("CampoTutorL").readOnly = true;
  document.getElementById("CampoEmpresa").value = Empresa03.nombre;
  document.getElementById("CampoEmpresa").readOnly = true;
  document.getElementById("CampoCentro").value = Empresa03.dirección;
  document.getElementById("CampoCentro").readOnly = true;
}
}
console.log(Alumno01);
console.log(Alumno02);
console.log(Alumno03);
console.log(Empresa01);
console.log(Empresa02);
console.log(Empresa03);
console.log(Profesor01);
console.log(Profesor02);
console.log(Profesor03);
console.log(Alumno01.nombre);
console.log(Asignacion01);
console.log(Asignacion02);
console.log(Asignacion03);
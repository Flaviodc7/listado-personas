const personas = [
    new Persona('Jorge', 'Corona'),
    new Persona('Carlos', 'Alsogaray'),
];

function mostrarPersonas(){
    let texto = '';
    for (let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }
    else if (nombre.value == '' && apellido.value == ''){
        alert('No ha ingresado ningún valor');
    } else if (nombre.value == ''){
        alert('No ha ingresado nombre');
    } else if (apellido.value == ''){
        alert('No ha ingresado apellido');
    }

}
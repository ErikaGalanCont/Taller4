//2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado. “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
//Miguel tiene $1.000 
//Carlos tiene $2.000 
//Manuel tiene $500 
//Los precios de helados son los siguientes:
//Bonais: $400
//Palito de helado de agua: $1.000 
//Palito de helado de crema: $2.200
//Bombón helado con arequipe: $1.500
//Bombón helado con chispas de chocolate: $2.500
//Bombón helado con fresas: $2.800
//Medio litro de helado: $ 2.000

//El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
//Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
//El programa también tiene que poder dar los vueltos de su compra con su factura

let precios = {
    "Bonais": 400,
    "Palito de helado de agua": 1000,
    "Palito de helado de crema": 2200,
    "Bombón helado con arequipe": 1500,
    "Bombón helado con chispas de chocolate": 2500,
    "Bombón helado con fresas": 2800,
    "Medio litro de helado": 2000
    };
    
    let nombre = prompt("Ingrese su nombre:");
    let dinero = parseInt(prompt("Ingrese la cantidad de dinero que tiene:"));

    let heladosDisponibles = [];
    for (const [helado, precio] of Object.entries(precios)) {
    if (precio <= dinero) {
        heladosDisponibles.push(helado);
    }
    }

    if (heladosDisponibles.length > 0) {
    let mensaje = `Hola ${nombre}, los siguientes helados están disponibles dentro de tu presupuesto:\n`;
    for (let i = 0; i < heladosDisponibles.length; i++) {
        mensaje += `${i + 1}. ${heladosDisponibles[i]} - $${precios[heladosDisponibles[i]]}\n`;
    }
    
    let seleccion = parseInt(prompt(mensaje + "Por favor ingrese el número del helado que desea comprar:"));
    
    while (seleccion < 1 || seleccion > heladosDisponibles.length) {
        seleccion = parseInt(prompt("Selección inválida. Por favor ingrese el número del helado que desea comprar:"));
    }
    
    let heladoSeleccionado = heladosDisponibles[seleccion - 1];
    let precioHeladoSeleccionado = precios[heladoSeleccionado];
    let vuelto = dinero - precioHeladoSeleccionado;
    
    alert(`Aquí está su factura:\n\n${heladoSeleccionado}: $${precioHeladoSeleccionado}\nTotal: $${precioHeladoSeleccionado}\nDinero recibido: $${dinero}\nVuelto: $${vuelto}`);
    
    } else {
        alert(`Lo siento, no hay helados disponibles dentro de su presupuesto.`);
    }

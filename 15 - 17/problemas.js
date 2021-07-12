//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/** */


//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const miFuncion = (precio = undefined, desc = undefined) => {

    if (desc === undefined) return console.error("No ingresaste el descuento");

    if (typeof (precio) !== "number") return console.warn(`El valor "${precio}" introducido no es un número.`);

    if (typeof (desc) !== "number") return console.warn(`El valor "${desc}" introducido no es un número.`);

    if (Math.sign(precio) === -1 || Math.sign(desc) === -1) return console.warn("No debes introducir valores negativos.");

    return console.info(`El objeto cuesta "$${precio}" y menos un descuento de "${desc} %" tienes que pagar solo "${precio - (precio * (desc / 100))}".`);
}

miFuncion(1000, 20);
miFuncion(1000,);
miFuncion("", 20);
miFuncion(1000, "");
miFuncion(1000, -20);
miFuncion(1350, 35);


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// let year = new Date(1984, 4, 23);
// const fecha1 = year.getMilliseconds()
// console.log(fecha1)

// SOluciones de JonMircha
console.clear();
// 15 -

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el número a convertir");

    if (typeof (numero) !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);

    if (base === undefined) return console.warn("No ingresaste la base a convertir.");

    if (typeof (base) !== "number") return console.error(`El valor "${base}" ingresado, NO es un número`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`);
    } else {
        return console.error("El tipo de base a convertir No es Válido");
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(10010101, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);

console.clear();
// 16 - 

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto");

    if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`);

    if (monto === 0) return console.error("El monto no puede ser 0.");

    if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo.");

    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número.`);

    if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo.");

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`)
}

aplicarDescuento();
aplicarDescuento("2");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);

console.clear();

// 17 - 

//mes base 0, 1984, 4, 23 = (23 de mayo de 1984)

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");

    if (!(fecha instanceof Date)) return console.error("El valor ingresado no es una fecha válida.");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1991, 1, 15));
calcularAnios(new Date(2084, 1, 15));

console.clear();
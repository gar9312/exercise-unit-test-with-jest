// Valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87,  // libra esterlina
}

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

// Función para convertir de dólares a yenes
const fromDollarToYen = (dollars) => {
    return dollars * oneEuroIs.JPY / oneEuroIs.USD;
}

// Función para convertir de yenes a libras
const fromYenToPound = (yen) => {
    return yen / oneEuroIs.JPY * oneEuroIs.GBP;
}

// Exportar funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

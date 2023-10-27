
// dolar blue

const api = "https://dolarapi.com/v1/dolares/blue";

const precioCompra = document.getElementById("dolarCompra")
const precioVenta = document.getElementById("dolarVenta")
let precioDolar;

const getDolarBlue = () => {
    fetch(api)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `error codigo Nº: ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                precioCompra.textContent = `$${data.compra}`
                precioVenta.textContent = `$${data.venta}`
                precioDolar = data.venta
            })
        .catch((error) => {
            console.error("Error: " + error);
        });
    }
getDolarBlue();


// modelos x marca
const modelosPorMarca = {
    Toyota: ["Corolla", "Camry", "RAV4"],
    Honda: ["Civic", "Accord", "CRV", "Pilot", "Fit", "HR-V"],
    Chevrolet: ["Corsa", "Astra", "Classic"],
    Renault: ["Sandero", "Kangoo", "Duster"],
    Volkswagen: ["Gol", "Polo", "TCross"],
    Ford: ["Fiesta", "Focus", "Kuga"],
    Peugeot: ["207", "307", "208"],
};

document.getElementById("marca").addEventListener("change", cargarModelos);

function cargarModelos() {
    const marcaSelect = document.getElementById("marca");
    const modeloSelect = document.getElementById("modelo");


    modeloSelect.innerHTML = "";

    const marcaSeleccionada = marcaSelect.value;

    if (marcaSeleccionada in modelosPorMarca) {
        const modelos = modelosPorMarca[marcaSeleccionada];


        const option = document.createElement("option");
        option.value = "";
        option.text = "Selecciona un modelo";
        modeloSelect.appendChild(option);


        for (const modelo of modelos) {
            const option = document.createElement("option");
            option.value = modelo;
            option.text = modelo;
            modeloSelect.appendChild(option);
        }
    } else {

        const option = document.createElement("option");
        option.value = "";
        option.text = "Esta marca no tiene modelos disponibles";
        modeloSelect.appendChild(option);
    }
}

// data marcasmodelos

const preciosPorMarcaModeloAnio = {
Toyota: {
    Corolla: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Camry: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,

    },
    RAV4: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,

    },
},
Honda: {
    Civic: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,

    },
    Accord: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,

    },
    CRV: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,

    },
},
Chevrolet: {
    Corsa: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Astra: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Classic: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
},
Renault: {
    Sandero: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Kangoo: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Duster: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
},
Volkswagen: {
    Gol: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Polo: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    TCross: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
},
Ford: {
    Fiesta: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Focus: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    Kuga: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    
},
Peugeot: {
    207: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    307: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
    208: {
        2010: 5000,
        2011: 5500,
        2012: 6000,
        2013: 6500,
        2014: 7000,
        2015: 7500,
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
    },
},
};




//resultado y spinner

const calcularCotizacion = () => {

    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const año = parseInt(document.getElementById("año").value);

    setTimeout(() => {
        const precio = preciosPorMarcaModeloAnio[marca]?.[modelo]?.[año] || 0;
        const cotizacionDolar = (precio / precioDolar).toFixed(2)
        const resultado = `El precio del seguro para un ${marca} ${modelo} ${año} es de $${precio}.(US$${cotizacionDolar}).`;

        spinner.style.display = "none";

        const cotizacionElement = document.getElementById("cotizacion");
        cotizacionElement.textContent = resultado;
    }, 1000);
};



document.getElementById("cotizarBtn").addEventListener("click", calcularCotizacion);





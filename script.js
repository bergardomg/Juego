const questions = [
    { q: "¿Cuál es la principal causa del desperdicio de alimentos y bebidas?", options: ["Mal almacenamiento", "Daños, pérdidas y retrasos en el transporte", "Falta de demanda"], answer: 1 },
    { q: "¿Cuántos alimentos desperdicia en promedio un transportista al año?", options: ["1 millón", "2.4 millones", "3.5 millones"], answer: 1 },
    { q: "¿Qué factor tiene el mayor impacto en la fluctuación de los precios de los alimentos?", options: ["Costos logísticos", "Competencia de supermercados", "Subsidios agrícolas"], answer: 0 },
    { q: "¿Cómo ayuda el monitoreo en tiempo real a las empresas logísticas a preservar la calidad de los alimentos?", options: ["Garantizando que los alimentos se mantengan frescos únicamente durante el transporte", "Identificando la ubicación exacta de cada producto en todo momento", "Permitiendo a los distribuidores tomar medidas inmediatas ante cambios en las condiciones como temperatura y humedad"], answer: 2 },
    { q: "¿Qué ventaja clave aportan los sistemas avanzados de planificación de rutas en la logística alimentaria?", options: ["Calculan los trayectos más eficientes, minimizando tiempos de transporte y reduciendo el deterioro de alimentos", "Evitan la necesidad de implementar sensores en la cadena de suministro", "Reducen las fluctuaciones de la demanda en mercados locales"], answer: 0 },
    { q: "¿Cuál es uno de los principales beneficios del uso de inteligencia artificial en la logística de alimentos?", options: ["Sustituir completamente el transporte humano por sistemas automatizados", "Predecir las fechas de caducidad de los productos con exactitud absoluta", "Identificar patrones de desperdicio y ajustar los inventarios a la demanda"], answer: 2 },
    { q: "¿Cuál es una consecuencia clave de no tener procesos formalizados en la logística?", options: ["El aumento del costo del transporte debido al uso de rutas más largas", "La incapacidad de realizar entregas internacionales de manera eficiente", "La imposibilidad de medir la eficiencia del proceso y la generación de incertidumbre en los clientes"], answer: 2 },
    { q: "¿Qué porcentaje de transportistas de alimentos y bebidas identifican los costos de transportes como factor número uno en el aumento de los precios de alimentos y bebidas, según el estudio del 2022?", options: ["30%", "77%", "15%"], answer: 1 },
    { q: "¿Cuál fue el impacto promedio de los retrasos en el transporte en las ventas de los transportistas de alimentos y bebidas en 2022?", options: ["12%", "8%", "5%"], answer: 1 },
    { q: "¿Cómo afecta la falta de rutas de distribución optimizadas al costo final de los alimentos para el consumidor?", options: ["Disminuye la cantidad de alimentos disponibles en los puntos de venta, lo que provoca una baja en los precios por exceso de inventario", "Aumenta los costos operativos debido a mayores tiempos de entrega y el uso ineficiente de recursos, lo que eleva el precio de los alimentos", "Reduce la calidad de los alimentos, lo que lleva a una disminución en los precios de venta"], answer: 1 },
    { q: "¿Qué factores externos contribuyen a los retrasos en el transporte?", options: ["Tráfico de ruta, complicación en aduana, averías de vehículos y falta de claridad logística", "Condiciones climáticas extremas, aumento de la demanda de productos, y reducción de costos operativos", "Cambios en las políticas fiscales, la escasez de combustible y la inflación económica"], answer: 0 },
    { q: "¿Qué es el tráfico en las rutas?", options: ["Es el movimiento de vehículos y personas en las vías de transporte, que puede estar influenciado por factores como la cantidad de vehículos, el clima o los accidentes", "Es el proceso de construcción y mantenimiento de carreteras y caminos para mejorar la fluidez del tráfico", "Es el control de los horarios de los autobuses y trenes en las estaciones de transporte público"], answer: 0 },
    { q: "¿Cuáles son las consecuencias de la pérdida de confianza del cliente, por el transporte ineficiente?", options: ["Disminución en las ventas, pérdida de clientes actuales y una reputación dañada que afecta la adquisición de nuevos clientes", "Aumento en la lealtad del cliente y mayor recomendación del producto o servicio", "Reputación dañada, lo que puede llevar a una pérdida de clientes y a un impacto negativo en la rentabilidad"], answer: 0 },
    { q: "¿Cómo afectan los retrasos en el transporte a la industria de alimentos y bebidas?", options: ["Los daños y pérdidas debido a los retrasos pueden costar a los transportistas de alimentos y bebidas millones de dólares al año", "Los retrasos en el transporte benefician a la industria de alimentos y bebidas, ya que permiten que los productos se mantengan frescos por más tiempo", "Los retrasos en el transporte solo afectan a los productos no perecederos, por lo que no impactan significativamente a la industria de alimentos y bebidas"], answer: 0 },
    { q: "Según el estudio de 2022, ¿Cuánto costó los daños y pérdidas por un transporte ineficiente a los transportistas promedio de alimentos y bebidas?", options: ["Más de 6 millones de dólares al año", "Menos de 500 mil dólares al año", "Más de 1 millón de dólares al año"], answer: 0 }
];

let currentIndex = 0, score = 0, startTime;

function startGame() {
    const playerName = document.getElementById("playerName").value;
    if (!playerName) { alert("Ingresa tu nombre"); return; }
    startTime = new Date();
    document.querySelector(".game-container h1").innerText = `¡Bienvenido, ${playerName}!`;
    document.getElementById("game").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.querySelector("button").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= questions.length) { endGame(); return; }
    document.getElementById("currentQuestion").innerText = currentIndex + 1;
    document.getElementById("questionText").innerText = questions[current

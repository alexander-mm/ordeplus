import { facebook, instagram, tiktok, youtube } from '../assets/icons'
import { car, banner } from '../assets/images'
export const navLinks = [
    { to:"/", label: "INICIO" },
    { to:"/machines", label: "EQUIPOS" },
    { to: "/machines", title: "Equipos Portátiles" },
    { to: "/machines", title: "Equipos Tipo Sala" },
    { to: "/engines", label: "MOTORES" },
    { to: "/engines", title: "Motores a Gasolina" },
    { to: "/engines", title: "Motores Eléctricos" },
    { to: "/pumps", label: "BOMBAS DE VACÍO" },
    { to: "/products", label: "REPUESTOS Y ACCESORIOS" },
    { to: "supplies", label: "INSUMOS" },
    { to: "/supplies", title: "Detergentes" },
    { to: "/supplies", title: "Aceites" },
    { to: "/supplies", title: "Sellantes" }
]

export const listPortableMachines = [
    { to: "/machines", label: "Buggy Motor Individual" },
    { to: "/machines", label: "Buggy Doble Motor" },
    { to: "/machines", label: "Monorrueda" }
]

export const subLinksEngines = [
    { to: "/engines", label: "Motores a Gasolina" },
    { to: "/engines", label: "Motores Eléctricos" },
]

export const subLinksPumps = [
    { to: "/pumps", label: "ILGÜN BV-250" },
    { to: "/pumps", label: "TRIUNFO BVT-1" },
    { to: "/pumps", label: "TRIUNFO BVT-2" },
    { to: "/pumps", label: "TRIUNFO BVT-3" },
]

export const subLinksProducts = [
    { to: "/products", label: "Reguladores" },
    { to: "/products", label: "Pulsadores" },
    { to: "/products", label: "Vacuómetros" },
    { to: "/products", label: "Colectores" },
    { to: "/products", label: "Medidores" },
    { to: "/products", label: "Pezoneras Estándar" },
    { to: "/products", label: "Pezoneras Triangulares" },
    { to: "/products", label: "Casquillos Estándar" },
    { to: "/products", label: "Casquillos Triangulares" },
    { to: "/products", label: "Casquillos Mangueras" },
    { to: "/products", label: "Aceiteras" },
    { to: "/products", label: "Mangueras y Otros..." },
]

export const subLinksSupplies = [
    { to: "/supplies", label: "Detergente Ácido" },
    { to: "/supplies", label: "Detergente Alcalino Clorado" },
    { to: "/supplies", label: "Detergente Neutro" },
    { to: "/supplies", label: "Desinfectante Clorado" },
    { to: "/supplies", label: "Aceite Bomba de Vacío" },
    { to: "/supplies", label: "Sellador Barrera" },
    { to: "/supplies", label: "Sellador Yodado" }
]

export const socialMedia = [
    { src: facebook, alt: "facebook", href: "https://www.facebook.com" },
    { src: instagram, alt: "instagram", href: "https://www.instagram.com" },
    { src: tiktok, alt: "tiktok", href: "https://www.tiktok.com" },
    { src: youtube, alt: "youtube", href: "https://www.youtube.com" },
]

export const portableMachines = [
    { name: "BUGGY SENCILLO DE 1 - 4 PUESTOS", key:"1", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: car },
    { name: "BUGGY DOBLE DE 1 - 4 PUESTOS", key:"2", desc1: "• Motor a Gasolina", desc2: "• Motor Eléctrico", desc3: "• De 1 - 4 unidades de ordeño", src: car },
    { name: "MONORRUEDA SENCILLO DE 1 - 4 PUESTOS", key:"3", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: car },
    { name: "MONORRUEDA DOBLE DE 1 - 4 PUESTOS", key:"4", desc1: "• Motor a Gasolina", desc2: "• Motor Eléctrico", desc3: "• De 1 - 4 unidades de ordeño", src: car },
]

export const roomMachines = [
    { name: "BUGGY SENCILLO DE 1 - 4 PUESTOS", key:"1", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: banner },
    { name: "BUGGY SENCILLO DE 1 - 4 PUESTOS", key:"2", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: banner },
    { name: "BUGGY SENCILLO DE 1 - 4 PUESTOS", key:"3", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: banner },
    { name: "BUGGY SENCILLO DE 1 - 4 PUESTOS", key:"4", desc1: "• Motor a Gasolina", desc3: "• De 1 a 4 unidades de ordeño", src: banner },
]

export const engines = [
    {
        category: "MOTORES A GASOLINA",
        items: [
            {
                name: "HONDA",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/honda.png",
                brand: "●  MARCA: HONDA",
                model: "● MODELO: GX200T QC",
                type: "● TIPO: 4 TIEMPOS",
                power:"● POTENCIA MAX: 6.5hp/3600rpm",
                tank:"● CAP. MAX. COMBUSTIBLE: 4L",
                
            },
            { 
                name: "SLONG",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/slong.png",
                brand: "●  MARCA: SLONG",
                model: "● MODELO: SL210",
                type: "● TIPO: 4 TIEMPOS",
                power:"● POTENCIA MAX: 7hp/3600rpm",
                tank:"● CAP. MAX. COMBUSTIBLE: 3.6L",
            },
            { 
                name: "KOHLER",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/kohler.png",
                brand: "●  MARCA: KOHLER",
                model: "● MODELO: SH256",
                type: "● TIPO: 4 TIEMPOS",
                power:"● POTENCIA MAX: 6.5hp/3600rpm",
                tank:"● CAP. MAX. COMBUSTIBLE: 4L",
            },
            { 
                name: "BRIGGS & STRATTON",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/briggs.png",
                brand: "●  MARCA: BRIGGS & STRATTON",
                model: "● MODELO: RS",
                type: "● TIPO: 4 TIEMPOS",
                power:"● POTENCIA MAX: 7hp/3600rpm",
                tank:"● CAP. MAX. COMBUSTIBLE: 6L",
            },
        ]
    },
    {
        category: "MOTORES ELÉCTRICOS",
        items: [
            { 
                name: "WEG",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/weg.png",
                brand: "●  MARCA: WEG",
                type: "● TIPO: ABIERTO",
                tension:"● TENSIÓN: 110/220v",
                power:"● POTENCIA MAX: 1hp, 1.5hp, 2hp, y 3hp",
            },
            { 
                name: "+THRUST",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/electric.png",
                brand: "●  MARCA: +THRUST",
                type: "● TIPO: CERRADO",
                tension:"● TENSIÓN: 110/220v",
                power:"● POTENCIA MAX: 1hp, 1.5hp, 2hp, y 3hp",
            }
        ]
    }
]

export const pumps = [
    {
        category: "BOMBAS DE VACÍO",
        items: [
            {
                name: "ILGÜN BV-250",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/250.png",
                brand: "●  MARCA: ILGÜN",
                from: "● PROCEDENCIA: TURQUÍA",
                model: "● MODELO: BV-250",
                flow:"● CAUDAL MAX: 250L/min",
                powerReq:"● POTENCIA MAX REQUERIDA: 1.0hp/1460rpm",
            },
            { 
                name: "TRIUNFO BVT-1",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/bvt-1.png",
                brand: "●  MARCA: TRIUNFO",
                from: "● PROCEDENCIA: BRASIL",
                model: "● MODELO: BVT-1",
                flow:"● CAUDAL MAX: 460L/min",
                powerReq:"● POTENCIA MAX REQUERIDA: 2.0hp/1460rpm",
            },
            { 
                name: "TRIUNFO BVT-2",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/bvt-2.png",
                brand: "●  MARCA: TRIUNFO",
                from: "● PROCEDENCIA: BRASIL",
                model: "● MODELO: BVT-2",
                flow:"● CAUDAL MAX: 800L/min",
                powerReq:"● POTENCIA MAX REQUERIDA: 3.0hp/1460rpm",
            },
            { 
                name: "TRIUNFO BVT-3",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/bvt-3.png",
                brand: "●  MARCA: TRIUNFO",
                from: "● PROCEDENCIA: BRASIL",
                model: "● MODELO: BVT-3",
                flow:"● CAUDAL MAX: 1100L/min",
                powerReq:"● POTENCIA MAX REQUERIDA: 4.0hp/1460rpm",
            },
        ]
    },
]

export const products = [
    {
        category: "REGULADORES",
        items: [
            { 
                name: "+THRUST",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/regulator-vacuum2.png",
                brand: "● MARCA: +THRUST",
                desc: "● CAPACIDAD: 300L/min",
                desc2: "● Preciso",
                desc3: "● Funcionamiento con membrana",
            },
            { 
                name: "INTERPULS",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/stabilvac.png",
                brand: "● MARCA: InterPuls",
                desc: "● CAPACIDAD: 1400L/min",
                desc2: "● SERIE: ESTABILVAC",
                desc3: "● Preciso",
            },
            { 
                name: "SERVO-REGULADOR",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/servoregulator.png",
                brand: "● MARCA: +THRUST",
                desc: "● CAPACIDAD: 3500L/min",
                desc2: "● Incorpora pre-filtro de aire",
                desc3: "● Diseñado para ordeños tipo sala",
            },
        ]
    },
    {
        category: "PULSADORES",
        items: [
            { 
                name: "L-80 Air InterPuls",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/l80-inter.png",
                brand: "● MARCA: InterPuls",
                desc: "● FABRICADO EN: Plástico reforzado",
            },
            {
                name: "L-80 Inox",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/inter-acero.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Plástico reforzado y acero inoxidable",
            },
            { 
                name: "L-80",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/puls1.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Plástico reforzado",
            },
            { 
                name: "FLACO JD-91",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/puls-flaco.png",
                brand: "● MARCA: FLACO",
                desc: "● FABRICADO EN: Plástico reforzado y acero inoxidable",
            },
        ]
    },
    {
        category: "VACUÓMETROS",
        items: [
            {
                name: "VACUÓMENTRO SECO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/manometro.png",
                brand: "● MARCA: +THRUST",
                desc: "● Preciso",
                desc2: "● Caucho protector contra golpes",
            },
            { 
                name: "EN GLICERINA",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/vacuometro.png",
                brand: "● MARCA: +THRUST",
                desc: "● Preciso",
                desc2: "● La glicerina en su interior permite una lectura clara",
            },
        ]
    },
    {
        category: "COLECTORES",
        items: [
            { 
                name: "CLASSIC",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/collecto-1.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Polisulfona y acero inoxidable",
                desc2: "● CAPACIDAD: 300cc",
            },
            { 
                name: "ORBITER",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/colector-1.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Policarbonato y plástico",
                desc2: "● CAPACIDAD: 240cc",
            },
            { 
                name: "3400",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/3400.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Policarbonato y plástico",
                desc2: "● CAPACIDAD: 200cc",
            },
        ]
    },
    {
        category: "PEZONERAS",
        items: [
            { 
                name: "DL016U - ESTANDAR", 
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/cauchos.png",
                brand: "● MARCA: MILK-RITE",
                desc: "● PARA CASQUILLO: 140 - 20 - 44",
                desc2: "● FABRICADA EN: Caucho",
                desc3: "● La pezonera más utilizada en equipos a nivel nacional",
            },
            { 
                name: "IMPULSE-IP15 TRIANGULAR",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/cauchos-triangulares.png",
                brand: "● MARCA: MILK-RITE",
                desc: "● FABRICADA EN: Caucho",
                desc2: "● Diseñada para la prevención y control de MASTITIS",
                desc3: "● Disponible en versión ventilada y NO ventilada",
            },
        ]
    },
    {
        category: "CASQUILLOS",
        items: [
            {
                name: "DL016U - ESTANDAR",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/casquillos.png",
                brand: "● MARCA: +THRUST",
                desc: "● FABRICADO EN: Acero inoxidable",
                desc2: "● PARA PEZONERAS: Estándar Circulares",
                desc3: "● MEDIDAS: 140 - 20 - 44",
            },
            { 
                name: "TRIANGULARES",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/casquillo-triangular.png",
                brand: "● MARCA: MILK-RITE",
                desc: "● FABRICADO EN: Plástico doble pared",
                desc2: "● PARA PEZONERAS: Triangulares",
                desc3: "● DIÁMETRO: 24mm",
            },
        ]
    },
    {
        category: "ACEITERAS",
        items: [
            { 
                name: "POR GOTEO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/aceitera.png",
                brand: "● MARCA: EUROLATTE",
                desc: "● Suministro de lubricación por goteo",
                desc2: "● Las mirillas permiten graduar la cantidad de gotas de aceite lubricante",
                desc3: "dependiendo del requerimiento para cada modelo de bomba de vacío.",
            },
            { 
                name: "POR CAPILARIDAD",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/lubrificador.png",
                brand: "● MARCA: TRIUNFO",
                desc: "● Suministro de lubricación continuo",
                desc2: "● Permite graduar la cantidad de aceite lubricante",
                desc3: "dependiendo del requerimiento para cada modelo de bomba de vacío.",
            },
            {
                name: "POR GRAVEDAD",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/succion.png",
                brand: "● MARCA: ILGÜN",
                desc: "● Suministro por gravedad",
                desc2: "● Permite graduar la cantidad de aceite lubricante",
                desc3: "dependiendo del requerimiento para cada modelo de bomba de vacío.",
            },
        ]
    },
    {
        category: "MANGUERAS Y OTROS",
        items: [
            { 
                name: "MEDIDOR PROPORCIONAL",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/medidor.png",
                brand: "● MARCA: WAIKATO",
                desc: "● FABRICADO EN: Polisulfona",
                desc2: "● Medición precisa para cada animal",
                desc3: "● Resistente al calor",
                desc4: "● Resistente a la corrosión",
            },
            { 
                name: "MANGUERA PVC 9/16 - AIRE-LECHE",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/milk-hose.png",
                brand: "● MARCA: +THRUST",
                desc: "● GRADO ALIMENTICIO",
                desc2: "● Resistente a los ácidos de la leche",
                desc3: "● Libre de ftalatos",
                desc4: "● Su transparencia permite visualizar el flujo de leche",
            },
            { 
                name: "MANGUERA DOBLE PVC 5/16 - VACÍO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/vacuum-hose-2.png",
                brand: "● MARCA: +THRUST",
                desc: "● GRADO ALIMENTICIO",
                desc2: "● Resistente a las condiciones de vacío requerido ",
                desc3: "por los pulsadores del sistema de ordeño.",
            },
            { 
                name: "LINEA CORTA DE VACÍO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/cauchos-colector.png",
                desc: "● FABRICADO EN: Caucho",
                desc2: "● Para cualquier tipo de Colector",
                desc3: "● PAQUETE x4",
            },
            { 
                name: "OTROS REPUESTOS",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/orings.png",
                desc: "Consulte con su asesor por la referencia de su requerimiento",
            },
        ]
    }
]

export const supplies = [
    {
        category: "DETERGENTES",
        items: [
            {
                name: "ALCALINO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/alcaline.png",
                brand: "●  MARCA: DetPal",
                desc: "● Detergente Alcalino Clorado",
                desc2: "● Contribuye a la reducción de Unidades Formadoras de Colonias",
                desc3: "● Limpieza en equipos de ordeño, tanques y sistemas automáticos",
                desc4: "● Remueve residuos de grasa y otras bacterias.",                
            },
            {
                name: "ACIDO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/acid.png",
                brand: "●  MARCA: AcidPal",
                model: "● Detergente Ácido",
                desc: "● Elimina la piedra de la leche",
                desc2: "● Limpieza en equipos de ordeño, tanques y sistemas automáticos",
                desc3: "● Neutraliza los residuos de cloro y alcalinidad equilibrando el pH,",                
                desc4: "conservando la vida útil de las pezoneras",                
            },
            {
                name: "NEUTRO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/neutral.png",
                brand: "●  MARCA: JabónDeLac",
                desc: "● Detergente Neutro Concentrado",
                desc2: "● No afecta las manos del operario",
                desc3: "● Eficiente en procesos de limpieza manual para todas las superficie",
                desc4: "● Remueve suciedad pesada como grasas",                
                desc5: "● Alta concentración",                
            },
            {
                name: "DESINFECTANTE CLORADO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/chlorine.png",
                brand: "● MARCA: SaniLac",
                desc: "● Desinfectante Clorado",
                desc2: "● De amplio espectro, asegura la sanidad de los elementos del equipo",
                desc3: "● Rápida acción germicida",
                desc4: "● Baja Dosificación",                  
            },
        ]
    },
    {
        category: "ACEITES LUBRICANTES",
        items: [
            {
                name: "ACEITE PARA BOMBA DE VACÍO",
                src: "https://www.masqueunefecto.com/wp-content/uploads/2024/02/pump-oil.png",
                brand: "●  MARCA: BOMVAC PRO",
                desc: "● Protección contra el desgaste, la herrumbre y corrosión",
                desc2: "● Asegura un desempeño adecuado para la bomba",
                desc3: "● Con propiedades de liberación de aire atrapado",
                desc4: "y punto de escurrimiento",                
            },
        ]
    }
]
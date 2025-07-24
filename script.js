// Lista de ramos con sus requisitos
const ramos = {
  // 1er semestre
  "Introducción al Calculo": [],
  "Introducción al Algebra": [],
  "Introducción a la Física Clásica": [],
  "Herramientas Computacionales para Ingeniería y Ciencias": [],
  "Desafíos de Innovación en Ingeniería y Ciencias": [],
  "Aplicaciones de la Biología a la Ingeniería y Ciencias": [],

  // 2do semestre
  "Calculo Diferencia e Integral": ["Introducción al Calculo"],
  "Algebra Lineal": ["Introducción al Algebra"],
  "Introducción a la Física Moderna": [
    "Introducción al Calculo",
    "Introducción al Algebra",
    "Introducción a la Física Clásica"
  ],
  "Introducción a la Programación": ["Herramientas Computacionales para Ingeniería y Ciencias"],
  "Proyecto de Innovación en Ingeniería y Ciencias": ["Desafíos de Innovación en Ingeniería y Ciencias"],
  "Formación Integral DR/EH/FG/EI/FT": [],

  // 3er semestre
  "Calculo en Varias Variables": ["Calculo Diferencia e Integral", "Algebra Lineal"],
  "Ecuaciones Diferenciales Ordinarias": ["Calculo Diferencia e Integral", "Algebra Lineal"],
  "Mecánica": ["Calculo Diferencia e Integral", "Algebra Lineal", "Introducción a la Física Moderna"],
  "Métodos Experimentales": ["Calculo Diferencia e Integral", "Introducción a la Física Moderna"],
  "Química": ["Introducción a la Física Moderna", "Introducción a la Programación"],

  // 4to semestre
  "Calculo Avanzado y Aplicaciones": ["Calculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias"],
  "Economía": ["Calculo en Varias Variables"],
  "Electromagnetismo": ["Calculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias", "Métodos Experimentales"],
  "Termodinámica Química": ["Calculo en Varias Variables", "Mecánica", "Química"],
  "Modulo Interdisciplinario": ["Proyecto de Innovación en Ingeniería y Ciencias"],
  "Formación Integral DR/EH/FG/EI/FT (2)": [],

  // 5to semestre
  "Probabilidades y Estadística": ["Calculo en Varias Variables"],
  "Optimización": ["Calculo Avanzado y Aplicaciones"],
  "Mecánica Estructural": ["Mecánica"],
  "Análisis de Sistemas de Transporte": ["Economía"],
  "Mecánica de Fluidos": ["Calculo Avanzado y Aplicaciones", "Termodinámica Química", "Métodos Experimentales"],

  // 6to semestre
  "Calculo Numérico para la Ingeniería Civil": ["Calculo Avanzado y Aplicaciones"],
  "Ingeniería Hidráulica": ["Mecánica de Fluidos"],
  "Ingeniería Estructural": ["Mecánica Estructural"],
  "Ingeniería Ambiental": ["Mecánica de Fluidos"],
  "Topografía": ["Métodos Experimentales"],
  "Taller de Practica Profesional I": [],

  // 7mo semestre
  "Evaluación de Proyectos": ["Economía", "Probabilidades y Estadística"],
  "Ingeniería Geotécnica": ["Mecánica Estructural", "Mecánica de Fluidos"],
  "Dinámica de Estructuras": ["Calculo Numérico para la Ingeniería Civil", "Ingeniería Estructural"],
  "Ingeniería de Materiales": ["Mecánica Estructural", "Probabilidades y Estadística"],
  "Electivo": [],
  "Practica I Topografía": ["Análisis de Sistemas de Transporte", "Mecánica de Fluidos", "Taller de Practica Profesional I", "Mecánica Estructural"],

  // 8vo semestre
  "Construcción": ["Topografía", "Evaluación de Proyectos"],
  "Planificación y Gestión de Proyectos": ["Evaluación de Proyectos"],
  "Diseño Sísmico de Estructuras": ["Dinámica de Estructuras", "Ingeniería Geotécnica"],
  "Diseño Hormigón Armado": ["Ingeniería Estructural", "Ingeniería de Materiales"],
  "Formación Integral EH/FG": [],
  "Taller de Practica Profesional II": ["Practica I Topografía"],
  "Examen de Suficiencia en Ingles I": [],

  // 9no semestre
  "Diseño Geotécnico": ["Ingeniería Geotécnica"],
  "Diseño de Estructuras de Acero": ["Ingeniería Estructural", "Ingeniería de Materiales"],
  "Proyecto de Hormigón Armado": ["Diseño Sísmico de Estructuras", "Diseño Hormigón Armado"],
  "Proyecto de Construcción": ["Ingeniería de Materiales", "Construcción"],
  "Electivo de Especialidad": [],
  "Practica Profesional II": ["Taller de Practica Profesional II"],

  // 10mo semestre
  "Trabajo de Habilitación Profesional I": ["Practica Profesional II"],
  "Mecánica de Suelos Avanzada": ["Diseño Geotécnico"],
  "Proyectos de Estructuras de Acero": ["Diseño de Estructuras de Acero"],
  "Ingeniería Estructural Avanzada": ["Diseño Sísmico de Estructuras"],
  "Electivo de Especialidad (2)": [],

  // 11vo semestre
  "Trabajo de Habilitación Profesional II": ["Trabajo de Habilitación Profesional I"],
  "Formación Integral de Especialidad": [],
  "Practica Profesional III": ["Practica Profesional II"],
};

// Estado de aprobación
const estado = {};

// Crear botones
const contenedor = document.getElementById("malla");

Object.keys(ramos).forEach(nombre => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  contenedor.appendChild(div);
  estado[nombre] = false;
});

// Inicial: desbloquea ramos sin requisitos
function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = ramos[nombre];
    const desbloqueado = requisitos.every(req => estado[req]);

    if (estado[nombre]) {
      div.classList.remove("bloqueado");
      div.classList.add("aprobado");
    } else if (desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

actualizarEstado();

// Clic: aprobar ramo
contenedor.addEventListener("click", e => {
  if (!e.target.classList.contains("ramo") || e.target.classList.contains("bloqueado")) return;

  const nombre = e.target.dataset.nombre;
  estado[nombre] = true;
  actualizarEstado();
});


# Brainstorming: cambiar contenido de la pagina y para que el contenido sea de buques pesqueros y transporte

**Jira:** TIB-4  
**Tipo:** Story  
**Fecha:** 2026-03-04  
**Branch:** `feature/tib-4-cambiar-contenido-de-la-pagina-y-para-que-el-conte`  
**Repo:** khalilsen1991/claude-el-tiburon  

---

## Descripción de la Tarea

Modificar el contenido actual de la página para que esté orientado al sector de **buques pesqueros y transporte marítimo**, incorporando:

- Nueva narrativa de negocio enfocada en flota pesquera y logística marítima.
- Una sección visual principal con **10 buques hardcodeados**.
- Representación de los buques navegando por distintas regiones del mundo.
- Enfoque visual dinámico (mapa o animación simulada).
- Consistencia con la arquitectura definida en TIB-1 y TIB-3.

La landing debe transmitir:

- Escala global
- Movimiento constante
- Tecnología marítima
- Transporte y pesca industrial

---

## Análisis Inicial

💡 El agente Orquestador inicia este documento para facilitar la colaboración.

### Contexto asumido

- El proyecto ya tiene estructura modular con Next.js.
- Existe una landing previa que fue rediseñada en TIB-3.
- Se desea cambiar el dominio conceptual del producto hacia buques pesqueros y transporte.
- Los 10 buques estarán hardcodeados (no conectados a API en esta etapa).

### Consideraciones técnicas

- No se requiere backend para esta historia.
- Los datos de los buques pueden definirse como arreglo estático.
- La animación puede ser:
  - CSS simple
  - Animación con librería (ej: framer-motion)
  - Mapa interactivo (versión básica)

---

# Posibles Enfoques

---

## Enfoque A: Cambio solo de contenido (copy + imágenes estáticas)

**Descripción:**  
Actualizar textos, imágenes y branding sin incorporar animación ni simulación de navegación. Los 10 buques aparecen como tarjetas estáticas.

**Ventajas:**

- Implementación rápida.
- Bajo riesgo técnico.
- No impacta performance significativamente.
- Fácil mantenimiento.

**Desventajas:**

- Poco diferencial visual.
- No transmite sensación real de “navegación global”.
- Puede verse genérico.

---

## Enfoque B: Sección animada simple con buques moviéndose (sin mapa real)

**Descripción:**  
Crear una sección visual donde los 10 buques hardcodeados se muevan en una animación estilizada (background tipo océano o globo abstracto).

**Ventajas:**

- Alto impacto visual.
- Control total sin dependencias externas.
- Performance manejable.
- Fácil de mantener.

**Desventajas:**

- No es geográficamente preciso.
- Simulación conceptual, no real.
- Puede requerir ajuste fino de animaciones.

---

## Enfoque C: Mapa mundial con 10 buques posicionados dinámicamente (hardcoded)

**Descripción:**  
Implementar un mapa mundial (SVG o librería ligera) donde los 10 buques tengan coordenadas hardcodeadas y animación de desplazamiento entre puntos.

Ejemplo conceptual:

- Buque 1: Atlántico Norte
- Buque 2: Pacífico Sur
- Buque 3: Mediterráneo
- Buque 4: Mar del Norte
- etc.

**Ventajas:**

- Experiencia visual profesional.
- Refuerza narrativa global.
- Escalable a futura integración con datos reales.
- Diferencial fuerte de producto.

**Desventajas:**

- Mayor complejidad técnica.
- Posible impacto en performance si no se optimiza.
- Requiere diseño más cuidado.

---

# Discusión

### 👤 Colaborador 1 – @devSenior-frontend (Arquitectura Frontend)

Si el objetivo es reposicionar el producto hacia sector marítimo, el Enfoque A es insuficiente.

Estamos cambiando identidad conceptual, no solo copy.

El Enfoque C es el más alineado con una visión a futuro (tracking real, datos reales, etc.).  
Pero debemos hacerlo sin sobreingeniería.

Recomiendo:

- Mapa SVG ligero.
- 10 buques como objetos estáticos con animación simple.
- Sin librerías pesadas tipo mapas completos.

Escalable y limpio.

---

### 👤 Colaborador 2 – @product-architect (Producto + Escalabilidad)

Coincido.

Si estamos hablando de transporte marítimo global, el mapa es casi obligatorio para storytelling.

Sin embargo:

- No debemos introducir dependencia innecesaria.
- Mantener hardcoded los 10 buques.
- Preparar estructura de datos como si fuera futura API.

Estructura recomendada:

ts
const vessels = [
  {
    id: 1,
    name: "Atlantic Voyager",
    type: "Fishing",
    coordinates: { lat: 40.7, lng: -30.5 },
    route: [...]
  },
];

Aunque hoy sea estático, mañana puede ser dinámico.

Mi voto: Enfoque C con implementación controlada.

Decisión Final

✅ Enfoque seleccionado: Enfoque C – Mapa mundial con 10 buques hardcodeados navegando globalmente

Solución acordada

Cambiar narrativa completa a sector buques pesqueros y transporte.

Implementar sección principal con:

Mapa mundial en SVG.

10 buques hardcodeados.

Movimiento animado entre rutas simuladas.

Crear estructura de datos modular para los buques.

Mantener performance como prioridad.

No integrar API en esta historia.

Mantener coherencia con arquitectura modular existente.

Prioridad: Alta
Estimación: 4–5 días

Acciones a Implementar

 Redefinir copy orientado a transporte y pesca marítima

 Crear modelo de datos hardcodeado para 10 buques

 Implementar componente WorldMap

 Implementar componente Vessel

 Agregar animación de navegación

 Optimizar performance (lazy load si aplica)

 Validar responsive (desktop-first, luego mobile)

 Revisar accesibilidad básica

 Actualizar metadata SEO hacia sector marítimo

 Documentar estructura de datos para futura integración API

Documento listo para que el Orquestador ejecute la implementación bajo lineamientos acordados.

# Diseño emocional

Hay 3 componentes clave para el diseño emocional:

- **Visceral:** Es sobre cómo todo se ve de lindo, vivo y fluido a primera vista.
- **Behavioral:** Esto va más relacionado con la experiencia de usuario, y guía al usuario para ver cómo funciona la app por medio de su usabilidad.
- **Reflective:** Es cuando logramos que el usuario se logre sentir conectado con el producto.

# Instalación

Se puede hacer por medio de CDN, pero también podemos hacer uso de `npm` para instalarlo:

```bash
npm i gsap
```

# .to

Cuando tenemos un elemento en nuestro DOM con un estado inicial y queremos indicar su estado final podemos hacer uso del `.to()` para colocar los atributos:

```javascript
gsap.to(".card", {
  duration: 5,
  opacity: 1,
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      duration: 0.5,
      repeat: -1, // infinite repeat
      y: -20,
      yoyo: true, // reverse the animation on each repeat
    });

    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  },
});
```

## Targeting

Para seleccionar los elementos podemos hacerlo de muchas formas:

```jsx
// Clases
<div class="box"></div>

gsap.to(".box", {...});

// ID
<div id="hero"></div>

gsap.to("#hero", {...});

// Tipo de elemento (en este caso todos los botones)
<button>Click Me</button>
<button>Another Button</button>

gsap.to("button", {...});

// Múltiples selectores (modificar varios elementos a la vez)
<div class="box"></div>
<div class="circle"></div>

gsap.to(".box, .circle", {...});

// Hijos o elementos anidados
<div class="card">
  <img />
  <div class="info">text</div>
</div>

gsap.to(".card img", {...});
gsap.to(".card .info", {...});
```

### Reto

Teniendo los siguientes elementos:

```html
<div class="circle"></div>
<div id="square"></div>
<div class="triangle"></div>
```

Hacer los siguientes Targetings

```javascript
// Seleccionar todos los elementos en 1 instrucción
gsap.to(".circle, #square, .triangle", {});

// Seleccionarlos por separado
gsap.to(".circle", {});
gsap.to("#square", {});
gsap.to(".triangle", {});

// Seleccionar elementos anidados
gsap.to(".card .title", {});
gsap.to(".card .description", {});
```

## Propiedades

```javascript
import gsap from "gsap";

gsap.to(".box", {
  background: "#FF6F61", // Color de fondo
  borderRadius: "50%", // Porcentaje de redondez del elemento
  delay: 2, // Tiempo de espera antes de que inicie la animación
  duration: 0.5, // Duración de la animación en segundos
  ease: "bounce", // Estilo de la animación
  opacity: 1, // Opacidad que queremos darle al elemento (transparencia)
  paused: true, // Pausar las animaciones
  scale: 1.25, // Crecimiento (tanto positivo como negativo) del elemento
  scaleX: 1.25, // Crecimiento en el eje X (tanto positivo como negativo) del elemento
  scaleY: 1.25, // Crecimiento en el eje Y (tanto positivo como negativo) del elemento
  stagger: 1, // Si tenemos varios elementos animandose podemos indicar cuántos queremos que se hagan a la vez
  repeat: 2, // Cantidad de veces que queremos que se repita la animación (-1 es infinito)
  repeatDelay: 2, // Tiempo de espera antes de que se repita la animación
  rotation: 360, // Rotación en grados
  rotationX: 360, // Rotación en el eje X
  rotationY: 120, // Rotación en el eje Y
  x: -200, // Posición en el eje X (positivo píxeles hacia la derecha, negativo hacia la izquierda)
  y: -200, // Posición en el eje Y (positivo píxeles hacia abajo, negativo hacia arriba)
  yoyo: true, // Revertirá la animación en cada repetición
});
```

### ease

| Valor           | Descripción                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `none`          | Ningún ease                                                             |
| `bounce`        | Rebote al final (lineal)                                                |
| `power2.in`     | Empieza lento y termina rápido                                          |
| `power2.out`    | Empieza rápido y termina lento                                          |
| `power2.inOut`  | Lento - rápido - lento                                                  |
| `sine.in`       | Empieza lento, y va acelerando a una velocidad muy gentil               |
| `sine.out`      | Empieza rápido y baja la velocidad dee una forma suave                  |
| `sine.inOut`    | Lento - rápido - lento pero en un flujo muy natural                     |
| `back.in`       | Retrocede primero y luego avanza                                        |
| `back.out`      | Llega al destino y regresa                                              |
| `back.inOut`    | Combina ambos, retrocede, se sobrepasa y se queda                       |
| `back.out(2.5)` | Cuán dramático queremos nuestro bounce                                  |
| `bounce.in`     | Rebota al inicio                                                        |
| `bounce.out`    | Rebota cuando termina                                                   |
| `bounce.inOut`  | Rebota al inicio y al final                                             |
| `elastic.in`    | Movimiento gentil que es como si estuviera cargando, no rebota al final |
| `elastic.out`   | Rebota al final de una forma muy suave y agradable                      |
| `elastic.inOut` | Combinación de `in` y `out`                                             |
| `expo.in`       | Empieza lento y acelera dramáticamente                                  |
| `elastic.out`   | Empieza acelerado y desacelera drásticamente                            |

Y hay 4 variaciones de las mismas:

- **power1:** Gentil.
- **power2:** Medio.
- **power3:** Fuerte.
- **power4:** Agresivo.

#### Tips

- Si necesitamos algo de retroalimentación rápida, usar `power1` o `power2`.
- Si es un elemento principal de nuestra interfaz ingresando, usar `power3` o `power4`.
- Para flujos naturales y balanceados, usar `power2.inOut`.

## Métodos

Podemos hacer uso de métodos para ejecutar tareas muy específicas de nuestras animaciones:

```javascript
const animation = gsap.to(".box", {
  borderRadius: "50%",
  duration: 2,
  opacity: 1,
  rotation: 360,
  scale: 1.25,
});

// Ejecutar la animación en el punto en el que está (si estaba en modo reverse irá en el sentido normal nuevamente)
animation.play();

// Pausar la animación
animation.pause();

// Continuar la animación en el punto en el que está, incluso cuando está en reverse
animation.resume();

// Reiniciar la animación desde el inicio
animation.restart();

// Revertir la animación
animation.reverse();

// Elimina por completo la animación, ya no se podrá ejecutar
animation.kill();

// Habilitar el yoyo para que se devuelva la animación en cada repetición
animation.yoyo();

// Cantidad de veces que queremos que se repita
animation.repeat(2);
```

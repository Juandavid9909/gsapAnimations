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

## Callbacks

Cuando usamos el `.to` podemos usar callbacks para agregar más animaciones cuando se completa, reinicia e incluso actualiza una animación, algo como lo siguiente:

```javascript
import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    duration: 0.8,
    ease: "power4.out",
    opacity: 1,
    scale: 1,
    y: -120,
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        duration: 0.7,
        ease: "power2.in",
        opacity: 0,
        scale: 0.95,
        y: 0,
        onComplete: () => {
          setTimeout(showToastLoop, 2500);
        },
      });
    },
  });
};

showToastLoop();
```

# .from

Nos permite indicar el origen del elemento, y utilizará el estado actual como el estado final del mismo.

```javascript
gsap.from(".card", {
  delay: 0.2,
  duration: 0.6,
  ease: "power4.out",
  immediateRender: false, // Esperar a que la animación empiece para aplicar los valores
  opacity: 0,
  scale: 0.95,
  stagger: 0.2, // Cuando hay varios elementos con la misma clase, agrega un delay para que se vea de forma secuencial
  y: 60,
});
```

# fromTo

Es la combinación del `.from` con el `.to`, el primer parámetro es el elemento que queremos modificar, el segundo las propiedades que queremos aplicar con nuestro `.from`, y el último las propiedades para nuestro `.to`.

```javascript
import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      delay: index * 0.1,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      scaleY: 1.6,
      yoyo: true,
    }
  );
});
```

# set

Nos permite setear cómo queremos que se encuentre nuestro elemento para efectuar nuestra animación con `.to`.

```javascript
import gsap from "gsap";

gsap.set(".gsap-box", {
  opacity: 0,
  scale: 0.5,
  y: 100,
});

gsap.to(".gsap-box", {
  delay: 0.5,
  duration: 0.6,
  ease: "expo.out",
  opacity: 1,
  scale: 1,
  y: 0,
});
```

# Timelines

Nos permiten orquestar nuestras animaciones sin necesidad de usar callbacks, delays y demás, para crear un timeline podemos hacer algo como lo siguiente:

```javascript
import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".box", { duration: 1, x: 200 });
tl.to(".circle", { duration: 1, y: 100 });

// Podemos usar también from y fromTo
tl.from(".box", { duration: 1, opacity: 0 });
tl.fromTo(".circle", { scale: 0 }, { duration: 1, scale: 1 });

// Pausar
tl.pause();

// Revertir
tl.reverse();

// Reiniciar
tl.restart();

// Ejecutar
tl.play();

// También si queremos que nuestra animación inicie pausada en nuestro timeline podemos hacer lo siguiente
const tl = gsap.timeline({ paused: true });
```

## Position parameter

Nos permite pasar un tercer argumento a nuestro timeline para indicar en qué momento debe iniciar una animación (valor numérico para indicar en qué segundo debe iniciar).

```javascript
import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".box", { duration: 1, x: 300 }, 0); // Inicia a los 0 segundos
tl.to(".circle", { duration: 1, y: 300 }, 2); // Inicia a los 2 segundos
```

Pero adicional también podemos hacer que se aplique de forma calculada cuando finaliza una animación anterior:

```javascript
import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".box", { duration: 1, x: 300 }).to(
  ".circle",
  { duration: 1, y: 300 },
  "+=3"
); // Inicia 3 segundos después de que finaliza la nimación de box

// Si quisieramos que se ejecutara 3 segundos antes de que acabe la animación, podemos usar el valor -=3
```

### Relative to Others Param

Podemos hacer uso de los operadores `>` y `<` para indicar si queremos que el cálculo se haga al inicio o la finalización de la animación previa. `>` inicia al final, y `<` al inicio de la animación anterior.

```javascript
import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".box", { duration: 2, x: 300 }).to(
  ".circle",
  { duration: 1, y: 300 },
  "<"
); // Inicia al mismo tiempo que .box

tl.to(".box", { duration: 2, x: 300 }).to(
  ".circle",
  { duration: 1, y: 300 },
  ">"
); // Inicia cuando termina .box
```

Si por ejemplo quisieramos que se ejecutara 0.5 segundos después de que la animación finaliza podemos usar `<+=0.5`. Adicional, también podemos usar porcentajes, por ejemplo para indicar que el círculo inicie un 25% antes de que box termine podemos usar `-=25%`, y para indicar que se ejecute al llevar 25% box `<25%`.

## Stagger

Aquí también podemos hacer uso de Stagger para dar un delay a los elementos (cuando tenemos varios) y que se vea más fluida la animación, similar a como lo hicimos en los ejemplos anteriores.

# ScrollTrigger

Esto nos permite activar animacinones dependiendo de las acciones de scroll que el usuario realice. A continuación un ejemplo:

```jsx
// HTML
<section class="spacer">Scroll down to see the animation</section>

<div class="box"></div>

<section class="spacer">
  Box moves when start hits the starter-marker
</section>

// JavaScript
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  rotate: 360,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    markers: true,
  }
});
```

El `trigger: ".box"` le dice al ScrollTriger que observe el elemento `.box` para decidir cuándo iniciar la animación. Para el `start: "top center"` significa que la animación debe iniciar cuando el inicio ('top') del elemento `.box` llegue a la mitad del viewport. Y por último, el `markers: true` mostrará unos pequeños markers a la derecha de la pantalla, así podemos saber exactamente dónde se hace el trigger de nuestro scroll. Es muy útil para hacer debug.

Para la propiedad `start`, la primera parte se relaciona con el trigger del elemento (top, center, bottom), y la segunda parte con el viewport (top, center, bottom).

También podemos usar la propiedad `end` para definir cuándo una animación debe finalizar. Importante tener en cuenta que si no agregamos la propiedad `end`, nuestra animación no sabrá cuándo debe terminar.

Para el segundo parámetro que se pasa a estas funciones podemos usar porcentajes, como `end: bottom 20%` para indicar que finalice la animación cuando la parte de abajo del elemento alcance el 20% del inicio de nuestro viewport.

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

# Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

![Amigo Secreto](assets/amigo-secreto.png)

## Funcionalidades

### Agregar participantes
- Campo de texto para ingresar nombres
- Botón "Añadir" para agregar a la lista
- Validación automática de campos vacíos
- Actualización instantánea de la lista visible

### Realizar sorteo
- Botón "Sortear amigo" con icono visual
- Selección aleatoria usando algoritmos de JavaScript
- Visualización clara del resultado
- Validación de lista no vacía antes del sorteo

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox
- **JavaScript (ES6+)**: Lógica de aplicación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## Instalación y uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

### Pasos para ejecutar

1. **Descargar el proyecto**
   ```bash
   # Clonar repositorio
   git clone https://github.com/fsbfranco/amigo-secreto.git
   
   # O descargar ZIP y extraer
   ```

2. **Ejecutar la aplicación**
   - Abrir el archivo `index.html` en cualquier navegador web
   - O hacer doble clic en el archivo para abrirlo automáticamente

3. **Usar la aplicación**
   - Agregar nombres usando el campo de texto y botón "Añadir"
   - Realizar sorteo con el botón "Sortear amigo"

## Guía de uso

### Paso 1: Agregar participantes
1. Escribir el nombre en el campo de texto "Escribe un nombre"
2. Hacer clic en "Añadir" o presionar Enter
3. El nombre aparecerá automáticamente en la lista
4. Repetir para todos los participantes

### Paso 2: Realizar sorteo
1. Verificar que todos los nombres estén en la lista
2. Hacer clic en el botón "Sortear amigo"
3. El resultado aparecerá destacado en verde

## Demo en vivo

🌐 **Visita la aplicación**: [https://fsbfranco.github.io/amigo-secreto/](https://fsbfranco.github.io/amigo-secreto/)

## Personalización

### Modificar colores
Editar las variables CSS en `style.css`:

```css
:root {
    --color-primary: #4B69FD;      /* Color principal */
    --color-secondary: #FFF9EB;    /* Fondo secundario */
    --color-button: #fe652b;       /* Color del botón */
    --color-text: #444444;         /* Color del texto */
}
```

## Solución de problemas

| Problema | Solución |
|----------|----------|
| El sorteo no funciona | Verificar que hay al menos un nombre en la lista |
| Los estilos no cargan | Verificar conexión a Internet para Google Fonts |
| No se agregan nombres | Verificar que el campo no esté vacío |

## Estado del proyecto

### Funcionalidades implementadas
- [x] Array para almacenar nombres
- [x] Función para agregar amigos con validación
- [x] Función para mostrar lista en HTML
- [x] Función de sorteo aleatorio
- [x] Interfaz completa y funcional
- [x] Desplegado en GitHub Pages

### Posibles mejoras
- [ ] Eliminar nombres individualmente
- [ ] Prevenir nombres duplicados
- [ ] Guardar historial de sorteos
- [ ] Animaciones en el sorteo
- [ ] Modo oscuro/claro

## Contribuir

Si quieres contribuir a este proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Autor

Desarrollado por **fsbfranco** como parte del desafío de programación - Challenge Alura Latam

---

## ¿Te gustó el proyecto?

Si este proyecto te fue útil, considera:
- Darle una estrella al repositorio
- Hacer un fork para tus propias modificaciones
- Reportar bugs o sugerir mejoras
- Compartirlo con otros desarrolladores

---

**¡Disfruta organizando tus intercambios de regalos!**
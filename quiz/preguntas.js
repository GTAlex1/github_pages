// Las preguntas del quiz. Solo las carga la pantalla del presentador (host.html),
// así el móvil de cada jugador nunca recibe la respuesta correcta antes de tiempo.
//   q: pregunta · o: 4 opciones · c: posición de la correcta (0 a 3) · t: segundos para responder
window.QUESTIONS = [
  { q: "¿Qué rompió el índice de la presentación?", o: ["Un balón de baloncesto", "Un bug en Canva", "Un merge sin revisar", "El WiFi"], c: 0, t: 15 },
  { q: "¿Qué es Git?", o: ["Una red social para programadores", "Un programa que guarda el historial de cambios de tus archivos", "Un editor de código en la nube", "Un servicio para publicar webs"], c: 1, t: 20 },
  { q: "¿Qué es un commit?", o: ["Una copia del repositorio", "Un error en el código", "Una foto del proyecto en un momento, con un mensaje", "Una rama nueva"], c: 2, t: 20 },
  { q: "¿Para qué sirve una rama (branch)?", o: ["Para publicar la web", "Para activar el 2FA", "Para borrar archivos antiguos", "Para trabajar en cambios sin tocar la rama principal"], c: 3, t: 20 },
  { q: "¿Qué comando sube tus commits a GitHub?", o: ["git push", "git pull", "git clone", "git add"], c: 0, t: 15 },
  { q: "¿Qué es un fork?", o: ["Un error de fusión", "Una rama protegida", "Una copia de un repositorio en tu propia cuenta", "Un archivo de configuración"], c: 2, t: 20 },
  { q: "¿Para qué sirve una Pull Request?", o: ["Para borrar una rama", "Para proponer que tus cambios se unan a otra rama o repositorio", "Para instalar Git", "Para cambiar tu contraseña"], c: 1, t: 20 },
  { q: "¿Qué hace GitHub Actions?", o: ["Es un editor de código", "Es un foro de preguntas", "Aloja imágenes", "Automatiza tareas (tests, despliegues…) cuando ocurre algo en el repositorio"], c: 3, t: 25 },
  { q: "¿Qué permite GitHub Pages?", o: ["Publicar una web estática gratis desde un repositorio", "Ejecutar bases de datos", "Enviar correos", "Editar imágenes"], c: 0, t: 20 },
  { q: "¿Qué hace Dependabot?", o: ["Escribe código por ti", "Avisa de dependencias vulnerables y propone actualizarlas", "Borra tus commits antiguos", "Traduce el README"], c: 1, t: 20 },
  { q: "¿Qué archivo le dice a Git qué archivos ignorar?", o: ["README.md", "LICENSE", ".gitignore", "package.json"], c: 2, t: 15 },
  { q: "¿Qué es un Codespace?", o: ["Un tipo de licencia", "Un comando de Git", "Una rama protegida", "Un entorno de desarrollo completo en el navegador"], c: 3, t: 20 }
];

# Quiz Orion (nuestro Kahoot)

Un quiz en tiempo real para el taller. La **pantalla del presentador** (`host.html`) enseña la sala, el QR, las preguntas y el podio. Cada persona juega desde el **móvil o el ordenador** (`play.html`), sin instalar nada.

Es una web estática (va en GitHub Pages) + **Firebase Realtime Database** (gratis) para sincronizar a todo el mundo.

## Archivos
- `host.html`: pantalla del presentador (se abre dentro de la presentación, punto 12).
- `play.html`: lo que ven los jugadores. Cada móvil coloca los 4 botones en un orden distinto.
- `pregunta.html`: página para que el público escriba preguntas durante la presentación (se ven en el punto 14).
- `preguntas.js`: **las preguntas** (edítalas aquí).
- `firebase-config.js`: tus datos de Firebase (hay que rellenarlo, ver abajo).
- `database.rules.json`: reglas de seguridad para pegar en Firebase.
- `qrcode.js`: librería para dibujar el QR (MIT, Kazuhiko Arase).

## Puesta en marcha (una sola vez, ~10 min)
1. Entra en https://console.firebase.google.com y crea un proyecto (puedes desactivar Google Analytics).
2. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable → Save.**
3. **Build → Realtime Database → Create database.** Elige región (p. ej. Bélgica, `europe-west1`) y empieza en **modo bloqueado**.
4. En la pestaña **Rules** de Realtime Database, pega el contenido de `database.rules.json` y pulsa **Publish**.
5. **Project settings (rueda dentada) → General → Your apps → Web (`</>`)**: registra una app y copia `firebaseConfig` dentro de `firebase-config.js` (`apiKey`, `authDomain`, `databaseURL`, `projectId`, `appId`).
6. **Authentication → Settings → Authorized domains → Add domain:** `gtalex1.github.io`.
7. Sube la carpeta `quiz/` a tu repositorio `github_pages` y espera a que Pages despliegue.

## Probarlo
1. Abre https://gtalex1.github.io/github_pages/quiz/host.html y pulsa **Crear sala**.
2. En el móvil, escanea el QR (o entra en `.../quiz/play.html` y escribe el PIN).
3. Pulsa **Empezar**. Teclado del presentador: `Espacio`, `Enter` o `→` para continuar.

## Cómo puntúa
- Respuesta correcta: de 1000 a 500 puntos según lo rápido que respondas. Incorrecta o sin responder: 0.
- Si todos han respondido, la pregunta se cierra sola a los 0,7 s.
- Si recargas el móvil, vuelves a tu sala.

## Preguntas del público (`pregunta.html`)
- Sin login: Firebase crea una sesión anónima invisible. Cada pregunta se guarda en `questions/<id de la sesión anónima>/…`, y las reglas solo dejan escribir y borrar ahí a esa sesión. Quien la escribió puede **borrarla** desde el mismo navegador (sección "Tus preguntas"), aunque recargue la página.
- Cualquier tamaño, hasta 3000 caracteres. Nombre opcional.
- En la presentación salen en el punto 14, ordenadas por hora. Un clic en una pregunta la tacha (solo en tu pantalla). El botón 💬 de la esquina enseña el QR en cualquier momento.
- **Hay que volver a pegar las reglas** (`database.rules.json`) en Firebase → Realtime Database → Rules → Publish.
- Para borrar una pregunta ajena o inapropiada: Firebase → Realtime Database → nodo `questions`.

## Si se corta la conexión
- **El presentador recarga o se sale**: al volver a abrir `host.html` aparece **↺ Reanudar la sala**, con el mismo PIN. Los jugadores siguen dentro y la partida continúa donde estaba.
- **Mientras el presentador no está**: los móviles muestran "El presentador se ha desconectado" y se reconectan solos cuando vuelve.
- **Los jugadores pueden salir cuando quieran** con el botón **Salir** (arriba a la derecha). También salen si la sala ya no existe.

## Cambiar las preguntas
Edita `preguntas.js`: `q` (pregunta), `o` (4 opciones), `c` (posición de la correcta, de 0 a 3) y `t` (segundos).
En el móvil solo se ven formas y colores (▲ ◆ ● ■): la pregunta y las opciones se leen en la pantalla del presentador. Al cerrarse la pregunta, el móvil muestra si acertaste y qué era cada opción.

## Seguridad y límites
- Las reglas impiden que un jugador cambie puntuaciones, vea las respuestas de otros o escriba en la sala del presentador. Los tiempos de respuesta los pone el servidor.
- El plan gratuito de Firebase permite unas 100 conexiones simultáneas: suficiente para una clase.
- Los datos de las salas se quedan en la base de datos. Cuando acabes, borra el nodo `rooms` desde la consola de Firebase.

## Si algo falla
- **"Falta configurar Firebase"**: `firebase-config.js` todavía tiene los textos `PEGA_AQUI`.
- **`PERMISSION_DENIED` o "No se pudo crear la sala"**: comprueba que el acceso anónimo está activado (paso 2) y que las reglas están publicadas (paso 4).
- **No carga nada**: mira la consola del navegador (F12) y comprueba que `databaseURL` es exacto.

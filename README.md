# Task Manager Frontend

Este es un microfrontend desarrollado con Vue.js y Nuxt.js para gestionar tareas mediante una API backend. El proyecto implementa un sistema CRUD (Crear, Leer, Actualizar, Eliminar) de tareas, usando Vuex/Pinia para la gestión de estado y Tailwind CSS para los estilos.

## Tecnologías usadas

- **Vue.js 3**: Framework principal para el desarrollo del frontend.
- **Nuxt.js 3**: Integración opcional para el renderizado del lado del servidor (SSR).
- **Pinia**: Manejo del estado global de la aplicación.
- **Tailwind CSS**: Framework CSS para estilos y diseño responsivo.
- **TypeScript**: Tipado estático para JavaScript.
- **PostCSS**: Procesamiento de CSS con plugins como Tailwind CSS y Autoprefixer.

## Requisitos previos

- Node.js >= 14
- Yarn >= 1.22.22
- Backend API ejecutándose en `localhost:8000` con los endpoints necesarios para el CRUD de tareas.

- Antes de empezar, hay un archivo .env.example con la API_URL, hay que dejarlo en .env

## Instalación y configuración

1. Clona este repositorio:

```bash
git clone https://github.com/sbotargues/task-manager-frontend.git
cd task-manager-frontend
```

2. Instala las dependencias

```bash
# yarn
yarn install
```

## Development Server

El proyecto se ejecutará en `http://localhost:8000`:

```bash
# yarn
yarn dev
```

## Uso

1. **Crear una nueva tarea**:

   - Visita la página `/` para agregar una nueva tarea.
   - Completa el formulario con los campos de **Título** y **Descripción**.
   - Haz clic en el botón **Guardar** para enviar la tarea al backend.

2. **Listar todas las tareas**:

   - La lista de tareas existentes se muestra en la página principal `/`.
   - Cada tarea se visualiza con su título y descripción, junto con opciones para editar o eliminar.

3. **Obtener una tarea por ID**:

   - Haz clic en el título de una tarea para ver más detalles.
   - Serás redirigido a una página específica para esa tarea donde podrás verla en detalle.

4. **Actualizar una tarea**:

   - Una vez en la página de detalles de una tarea, puedes editar su título y descripción.
   - Después de realizar los cambios, haz clic en el botón **Guardar** para actualizar la tarea en el backend.

5. **Eliminar una tarea**:
   - En la página principal (`/`), puedes eliminar una tarea haciendo clic en el botón **Eliminar** junto a cada tarea.
   - La tarea será eliminada del backend y la lista se actualizará automáticamente.

## Estructura

.
├── components
│ ├── TaskForm.vue # Formulario para crear/editar tareas
│ ├── TaskList.vue # Lista de tareas
├── layouts
│ └── default.vue # Layout principal de la aplicación
├── pages
│ ├── index.vue # Página principal con lista de tareas y formulario
│ └── task
│ └── [id].vue # Página de detalles y edición de tareas
├── store
│ └── taskStore.ts # Pinia store para manejar el estado de las tareas
├── services
│ └── TaskService.ts # Servicio para interactuar con la API del backend
├── assets
│ └── css
│ └── tailwind.css # Archivo CSS para Tailwind
├── nuxt.config.ts # Configuración de Nuxt.js
├── tailwind.config.js # Configuración de Tailwind CSS
└── tsconfig.json # Configuración de TypeScript


# Fire Track

Este proyecto es una SPA hecha con React que permite buscar incendios en la región de Castilla y León gracias a los datos abiertos de la Junta de Castilla y León y poder visualizarlos en un mapa.

#### Deploy : https://fire-track.vercel.app/

## Features

- Búsqueda y filtrado por provicina, estado, nivel máximo alcanzado y causa probable.
- Almacenamiento de los filtros del usuario en local storage.
- Visualización de los incendios en Google Maps.

## ScreenShot
![MacBook Pro-1697875770370](https://github.com/mig-code/fire-track/assets/99726342/eb89c2c2-520f-489d-9419-b0e929ea3de0)


## Technical Decisions

- He decidido añadir un uuid a cada incendio para poder identificarlos de forma única y evitar problemas con el renderizado de React.

- He decidido usar Sass para la maquetación.

- He decidido usar Google Maps con la librería React-Google-Maps para la visualización de los incendios

## Development Stack

- Editor: VS Code
- UI: React
- Styling: Sass
- Version control: Git with https://gitmoji.dev/ for commit history
- Deployment: Vercel

## Libraries

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [react-uuid](https://github.com/RickBr0wn/react-uuid#readme)
- [Reac-Google-Maps](https://github.com/JustFly1984/react-google-maps-api/)

## Future Development

- Añadir testings
- Añadir búsqueda de incendios por distancia a un punto

## Project configuration

He utilizado variables de entorno para almacenar la API key de Google Maps y la URL de la API de la Junta de Castilla y León.

Necesitarás una API key de Google Maps para poder usar la librería de Google Maps. En este tutorial se explica cómo obtenerla y configurarla en React: 
[React Google Maps Tutorial ](https://www.youtube.com/watch?v=9e-5QHpadi0&list=PL2rFahu9sLJ2QuJaKKYDaJp0YqjFCDCtN)

Para configurar las variables, renombre el archivo `.env.example` a `.env` y reemplace los valores de las variables de entorno con las suyas.

    VITE_GOOGLE_MAPS_API_KEY= XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    VITE_API_URL = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

La url básica y pública de la API de la Junta de Castilla y León es la siguiente:

    https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/

## Installation

Antes de instalar el proyecto, debe tener Node.js y npm instalados en su sistema.

Para instalar el proyecto, siga estos pasos:

Clone el proyecto en su máquina local:

    git clone https://github.com/mig-code/fire-track.git

Navegue hasta el directorio del proyecto:

     cd fire-track

Instale las dependencias del proyecto:

    npm install

## Running the App

Para ejecutar la aplicación, ejecuta el siguiente comando:

    npm run dev

Esto iniciará la aplicación en modo de desarrollo en tu máquina local.

## Build

Para compilar la aplicación para producción, ejecuta el siguiente comando:

    npm run build

Esto creará una versión de producción de la aplicación en el directorio "build".

### Vite Info

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

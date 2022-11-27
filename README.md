# Front app of GoSports App

GoSports is a web app that try to manage athletes activities by offering many features for them such as give them the ability to track their activities, make communication with their coach easier ...

## Tech Stack

**Client:** Next, Redux, Material UI

**Server:** Next, MongoDB

**API's:** Strava, Openweathermap

## Run Locally

Clone the project

```bash
  git clone https://github.com/abderrazaqoussi/gosports.git
```

Go to the project directory

```bash
  cd gosports
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

##

| Parameter                       | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `Material UI`                   | npm install @mui/material @emotion/react @emotion/styled |
| `Next Auth`                     | npm install next-auth                                    |
| `mongodb adapter for next auth` | npm install @next-auth/mongodb-adapter                   |
| `Config Prettier`               | npm install eslint-config-prettier                       |
| `Mongo DB`                      | npm install mongodb                                      |

## Folders Structure

```

├── public
│ ├── images -> Static assets
│ ├── icons.js -> All Icons
│ └── logo.svg -> Website Logo
│
├── src
│ │
│ ├── @core -> Template's core files
│ │ ├── context -> Your context files go here
│ │ └── hooks -> Your hooks go here
│ │
│ ├── configs -> Configuration files
│ │ └── themeConfig.js -> Template configurations
│ │
│ ├── layouts -> Your layouts
│ │ ├── components -> Your components, layout components
│ │ └── UserLayout.tsx -> File responsible to render layout & template
│ │
│ ├── navigation
│ │ └── index.js -> navigation menu
│ │
│ ├── pages -> View files that render all the pages
│ │ ├── \_app.js -> Main file responsible to render layout
│ │ ├── \_document.js -> HTML document & emotions configurations
│ │ └── index.js -> Application entry file
│ │
│ ├── store -> Redux store
│ │
│ └── views -> View files that are included in pages folder
│
├── .env -> Environment file
├── next.config.js -> Next js configurations
├── package.json -> All the dependencies require to run the template
├── .gitignore -> gitignore (ignore files and folder to sync with repo)
├── .eslintrc.js -> ESLint configurations (Linting code)
├── .prettierrc.js -> Prettier configurations (editor code formatting)

```

## Routes

| Default Routes | Description                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 401            | an HTTP status code that indicates that the server received an unverified request. In human terms, this means that the website you're trying to access won't load until you log-in with a valid user ID and password. |
| 404            |                                                                                                                                                                                                                       |
| 500            |                                                                                                                                                                                                                       |
| login          |                                                                                                                                                                                                                       |
|                |

| User NRoutes | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| /            | Home Page containe some stats about the user                   |
| activities   | Activities Page show all user done activities with details     |
| groups       | Groups Page where user manage the communication with his coach |
| calendar     | Calendar Page show all upcoming seance                         |

## Palette

| Parameter | Light     | Dark      | Anivia    |
| --------- | --------- | --------- | --------- |
| default   | `#fff`    | `#16213E` | `#eef2f3` |
| primary   | `#F9F9F9` | `#0F3460` | `#dee2e5` |
| svg 1     | `#eef2f3` | `#eef2f3` | `#eef2f3` |
| svg 2     | `#eef2f3` | `#eef2f3` | `#eef2f3` |
| border    | `#eef2f3` | `#12131C` | `#bbbfc2` |

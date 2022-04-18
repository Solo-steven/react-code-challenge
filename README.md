## File Structure

- src
  - asset: mock up logo file
  - component: component for style.
  - pages: component for main business logic
  - system: style for reset and root style.
- types: type for asset file.
- server.js: simple express server for deploy statuic file.

## Start Method

- using static file.

```
yarn
yarn build
yarn production

##  start at localhost port 9000
```

- using yarn dev server.

```
yarn
yarn start

##  start at localhost port 3000
```

- using docker

```
docker-compose up -d
docker-compose down

##  start at localhost port 3000
```

## Tech Stack I use

Since this is a simple example, I used as few libraries as possible

- create-react-app: the easiest way to create a standard React template with Typescript.
- react-roter-dom: most popular and Well documented URL package when using react.
- styled-components: CSS-in-JS solution.Make Module CSS more easy.
- axios: more friendly interface in contrast to fetch API.

## Improvements I could make

1. Using Intersection Observer API for lazy render Component. In this example, Component all are petter simple, so the render time which shows in react profiler is still acceptable ( below 16ms ), but when the app scale is extended or component become more complex, render time may increase. When it occurs, we should make sure we only render component which shows in the screen window

2. Assign more precise width and height for image element, which can lower the cumulative layout shift, making better UX.

## What I would do if I were allocated more time

1. Draw figam frist: In this demo, UI is quite simple, I may draw a more complex UI first to make this demo more attract.
2. Debounce Search: In this demo, the search input and result page are separate, Maybe it would be better to combine both on the same page. and using AbortControl API to make debounce requests.
3. Using Frame-mortion: I think that adding page animation when changing the page would make better UX.
4. Better RWD: I only noticed the screen of mobile phone (screen size is about 350px) and laptop or desktop (screen size is about 1000px ~ 1440px), not designed to use tablet screen.

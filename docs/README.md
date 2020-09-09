# Creation of a PWA : React JS

DATA : https://www.avoindata.fi/data/fi/report/google-analytics-dataset


https://gist.github.com/adrianhajdin/fd4a0db480ee827f11756bdae0597f0d
https://www.color-hex.com/color-palette/13689

## 1. start : index.tsx, App.tsx

here is the package.json
```
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.11.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/axios": "^0.14.0",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    "axios": "^0.20.0",
    "bootstrap": "^4.5.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3",
    "recharts": "^1.8.5",
    "typescript": "~3.7.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```


```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

```
import React from 'react';
import './App.css';
import Dashboard from "./components/screens/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
```



## 2. Fetch Data
```
import axios from 'axios';

const URL: string = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY: string = 'f33a484cf794d08d0148764789aaba32';
const FetchData = async (query: any) => {
  const response: any = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });
  return response;
}
export default FetchData;
```

## 3. frontend

```
import React from 'react';
import './App.css';
import Dashboard from "./components/screens/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
```

```
import React, { useState } from 'react'
import FetchData from '../api/FetchData';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11 - country Flag with isoCode
function countryToFlag(isoCode: any) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char: any) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

export default function Home() {
  const [query, setQuery] = useState<string>("")
  const [weather, setWeather] = useState<any>("")

  const search = async (e: any) => {
    if (e.key === "Enter") {
      const res: any = await FetchData(query);
      console.log(res.data);
      setWeather(res.data);
      setQuery('')
    }
  }

  return (
    <div className="main-container">
      <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} >
      </input>
      {
        weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country} {countryToFlag(weather.sys.country)}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}<sup>°C</sup>
            </div>
            <div className="info">
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p style={{ color: "black" }}>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

```

## 2. the PWA 

### 2.1. 
create a offline.html
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MeowMeow</title>
        <style type="text/css">
            html {
                height: 100%;
            }
            body {
                height: 100%;
                margin: 0;
                background: #0a1f44;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
            }
        
            .city {
                align-items: center;
                width: 80%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 40px 8%;
                border-radius: 20px;
                background: #fff;
            }

            .city-name {
                font-size: 2em;
            }
        </style>
    </head>
    <body>
        <div class="city">
            <h2 class="city-name">
                <span>Please go online to use the app</span>
            </h2>
        </div>
    </body>
</html>
```


create a serviceworker.js
```
const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// installation ServiceWorker SW : create a cache at the first open
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
      })
  )
});

// listen for requests / if we don't get the cache, get the offline.html page
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // if (!response || response.status !== 200 || response.type !== 'basic') {
        //   return response;
        // }
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
});

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request).then(
//           (response) => {
//             // Check if we received a valid response
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }
//             // IMPORTANT: Clone the response. A response is a stream// and because we want the browser to consume the response // as well as the cache consuming the response, we need// to clone it so we have two streams.
//             var responseToCache = response.clone();
//             caches.open(CACHE_NAME)
//               .then((cache) => {
//                 cache.put(event.request, responseToCache);
//               });
//             caches.match('offline.html')
//             return response;
//           }
//         );
//       })
//   );
// });


// Active the SW : lot of version of the cache :  remove all previous to keep only one
self.addEventListener('activate', (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  // if the cacheName is not include in the cacheWhiteList, we delete it, so you keep only one
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  )
});
```










This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

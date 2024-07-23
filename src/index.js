import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
import 'normalize.css'

// import { createBrowserHistory } from "history";  // 这里的createBrowserHistory就是App.js中直接使用的BrowserHistory
// const history = createBrowserHistory()
// export { history }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h3>loading ...</h3>}>
        <HashRouter>
          <App />
        </HashRouter>        
      </Suspense>
    </Provider>
  // </React.StrictMode>
);

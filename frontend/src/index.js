import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/css/vendor/simple-line-icons.css';
import './assets/css/vendor/elegant.css';
import './assets/css/vendor/linear-icon.css';
import './assets/css/plugins/nice-select.css';
import './assets/css/plugins/easyzoom.css';
import './assets/css/plugins/slick.css';
import './assets/css/plugins/animate.css';
import './assets/css/plugins/magnific-popup.css';
import './assets/css/plugins/jquery-ui.css';
import './assets/css/style.css';


//import './assets/js/vendor/modernizr-3.11.7.min.js';
//import './assets/js/vendor/jquery-v3.6.0.min.js';
//import './assets/js/vendor/jquery-migrate-v3.3.2.min.js';
//import './assets/js/vendor/popper.min.js';
//import './assets/js/vendor/bootstrap.min.js';
// import './assets/js/plugins/jquery.syotimer.min.js';
// import './assets/js/plugins/jquery.nice-select.min.js';
// import './assets/js/plugins/jquery-ui.js';
// import './assets/js/plugins/magnific-popup.js.js';
// import './assets/js/plugins/sticky-sidebar.js';
//import './assets/js/plugins/easyzoom.js';
// import './assets/js/plugins/scrollup.js';
// import './assets/js/plugins/ajax-mail.js';





import router from './Routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
    </Provider>
);



/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@solidjs/router';


render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)


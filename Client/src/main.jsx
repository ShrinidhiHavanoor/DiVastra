import '@fontsource/cinzel';
import '@fontsource/marcellus';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Shop from './Shop.jsx';
import 'react-multi-carousel/lib/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shop />
  </StrictMode>,
)

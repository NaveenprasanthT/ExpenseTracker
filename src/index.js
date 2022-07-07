import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './context/context';
import {SpeechProvider} from '@speechly/react-client';
import './index.css';

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <SpeechProvider appId='1fed2d27-4fe3-49f1-8a31-83810e990009' language='en-US'>
                <Provider>
                    <App />
                </Provider>
            </SpeechProvider>,
);
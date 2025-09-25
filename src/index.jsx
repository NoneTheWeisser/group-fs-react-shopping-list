import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
 <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GTVnDz3FJqcn2s5hTcVWTFS1DEzDf3YT1MFkUHz2cT9qGp8skFkYYn7cCr5FwUKI"
      crossorigin="anonymous"
    />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

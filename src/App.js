import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./AppRoutes";

import Layout from "./Components/UI/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
          <div>
            <AppRoutes /> 
          </div>
        </Layout>
    </div>
  );
}

export default App;

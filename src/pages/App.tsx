import React from 'react';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario/>
     <Lista />
    </div>
  );
}

export default App;

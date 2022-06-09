import React from 'react';
import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario/>
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;

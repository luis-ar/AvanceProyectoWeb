import { useState, useEffect } from "react";
import Login from "./componens/Login";
import Registro from "./componens/Registro";

function App() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [registro, setRegistro] = useState(false);

  return (
    <>
      {!registro ? (
        <Login
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRegistro={setRegistro}
        />
      ) : (
        <Registro 
        setRegistro={setRegistro}/>
      )}
    </>
  );
}

export default App;

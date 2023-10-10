import React from "react";
import "./Home.css";

export const Home = () => {
  let amigo = "Vicente";
  let interruptor = true;

  let coches = [
    { id: 1, marca: "bmw" },
    { id: 2, marca: "fiat" },
    { id: 3, marca: "mercedes" },
    { id: 4, marca: "seat" },
    { id: 5, marca: "mercedes" },
  ];

  const saludar = () => {
    console.log("hola mundo cruel...");
  };

  const modificar = (elementoEscogido) => {
    console.log(elementoEscogido)
  }

  return (
    <div className="homeDesign">
      Hola{" "}
      {interruptor && (
        <>
          {/* {
      amigo
    } */}

          {
            /* Ejemplo de como mapear dinámicamente en React,
      por cada elemento dentro del array, nos concatenará un
      return con la renderización del correspondiente...*/

            coches.map((coche) => {
              return (
                <div onClick={() => modificar(coche)} key={coche.id}>
                  {coche.marca}
                </div>
              );
            })
          }

          <div onClick={() => saludar()}>Me podeis hacer click.</div>
        </>
      )}
      .
    </div>
  );
};

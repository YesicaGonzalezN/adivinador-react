import React, { useState } from "react";
import swal from "sweetalert";
import "./App.css";

/*
Instrucciones del juego: 
Cuando inicia el juego, la aplicación piensa un número del 1 al 100. Hay un campo de texto donde el jugador ingresa su intento. 
Si el número es mayor o menor que el número ganador le saldrá una alerta para que siga intentando. 
Cuando el jugador adivine le saldrá una alerta indicando que ganó el juego.
Se puede reiniciar el juego en el momento que quiera y volver a intentar.
*/ 

export default function App() {
  /*Started: Configuramos el formulario para permitirnos ingresar un número cuando se inicia el juego.*/
  const [started, setStarted] = useState(false);

  /*Status: muestra si el numero escogido es correcto o no. */
  const [status, setStatus] = useState(false);

  /*Answer: Muestra la respuesta. */
  const [answer, setAnswer] = useState(0);

  /*RightAnswer: Tiene la respuesta correcta.*/
  const [rightAnswer, setRightAnsweer] = useState(0);


  /*La submit función verifica la respuesta que ingresamos.*/
  const submit = (e) => {

    const alertWin = () => {
      swal("¡Felicitaciones, adivinaste el número secreto!");
    };

    e.preventDefault();
    
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +rightAnswer) {
      alertWin();
      setStarted(false); 
    } else if (+answer < +rightAnswer) {
      setStatus("El numero es mayor, escoge otro...");
    } else {
      setStatus("El numero es menor, escoge otro...");
    }
  };

  /*La Start función establece el número secreto.*/
  const start = () => {
    setRightAnsweer(Math.floor(Math.random() * 100));
    setStarted(true);
  };


  /*Si started es true, mostramos el formulario.*/
  if (started) {
    return (
      <div className="container">
        <div className="title">
          <h1>Adivinador</h1>
          <h3>Adivina adivinador ¿En qué número estoy pensando hoy?</h3>
        </div>
        <div className="body-game">
          <h4 className="text-body">Escribe un número del 1 al 100</h4>
          <form onSubmit={submit}>
            <div>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="inputNumber"
              />
            </div>
            <button className="button-check" type="submit">
              Chequear
            </button>
            <p>{status}</p>
          </form>
        </div>
      </div>
    );
  } else {
    /*Si started es false, mostramos el botón de Iniciar Juego.*/
    return (
      <div className="cont-start">
        <button className="button-start" type="button" onClick={start}>
          Iniciar Juego
        </button>
      </div>
    );
  }
}

import React, { useState } from "react";
import Error from "./Error";
import "./Formulario.css";

const Formulario = ({ setData, errorInfo }) => {
  const [busqueda, setbuscaqueda] = useState({
    city: "",
    country: "",
  });

  const [error, setError] = useState(false);
  const [listError, setListError] = useState([]);

  const { city, country } = busqueda;

  const handleChange = (e) => {
    setbuscaqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarAPi = async () => {
    const appID = "62191417b16e574ffde90a448c17399c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()},${country}&appid=${appID}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    if (resultado.cod === "404") {
      console.log("comooo");
      errorInfo(true);
      return;
    }
    setData(resultado);
    errorInfo(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listError = [];
    //validate
    if (city.trim() === "") {
      listError.push({ mensaje: "you must enter a city" });
    }
    if (country.trim() === "") {
      listError.push({ mensaje: "you must enter a country" });
    }

    if (listError.length > 0) {
      setListError(listError);
      setError(true);
      return;
    }
    consultarAPi();
    setError(false);
  };

  return (
    <form className="Formulario__form" onSubmit={handleSubmit}>
      <h5 className="FormClima__title">Formulario</h5>
      {error ? <Error errors={listError} /> : null}
      <label htmlFor="">City</label>
      <input
        type="text"
        className="FomrCLima__input"
        placeholder="Ingresa ciudad"
        name="city"
        onChange={handleChange}
      />
      <label htmlFor="">Country</label>
      <select
        className="FormClima__select"
        name="country"
        onChange={handleChange}
      >
        <option value="">--Selecione Pais--</option>
        <option value="PE">PERU</option>
        <option value="MX">MEXICO</option>
        <option value="US">EEUU</option>
        <option value="AR">ARGENTINA</option>
        <option value="CR">COSTA RICA</option>
        <option value="ES">ESPANA</option>
        <option value="CO">COLOMBIA</option>
      </select>
      <button className="FormClima__button">CONSULTAR</button>
    </form>
  );
};

export default Formulario;

import React, { useState, useEffect } from "react";
import Header from "./Component/Header";
import Formulario from "./Component/Formulario";
import Clima from "./Component/Clima";
import Card from "./Component/Card";

const App = () => {
  const [dataClima, setDataClima] = useState(null);
  const [error, setError] = useState(false);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Formulario setData={setDataClima} errorInfo={setError} />
          </div>
          <div className="col-md-6">
            {dataClima ? (
              <Card>
                {error ? <p>error en los datos</p> : <Clima data={dataClima} />}
              </Card>
            ) : (
              <Card>
                <p>hello beatyfull</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

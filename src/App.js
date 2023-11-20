import { React, } from "react";
import { MisRutas } from "./router/MisRutas";
import BotonComienzo from "./components/BotonComienzo";

function App() {
    return (
        <div className="layout">

            <MisRutas />

            <BotonComienzo />

        </div>

    );
}

export default App;

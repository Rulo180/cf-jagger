import React from 'react';

import './WhatIs.scss';

class WhatIs extends React.Component {
    render() {
        return (
            <section className="whatis">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-7 col-lg-6">
                            <h3>CrossFit...</h3>
                            <p>ES UN PROGRAMA DE PREPARACIÓN FÍSICA GENERAL, AMPLIO E INCLUSIVO</p>
                            <p>A TRAVÉS DE MOVIMIENTOS DINÁMICOS Y <b>SEGUROS</b> UTILIZAMOS EJERCICIOS DE PESO CORPORAL EJERCICIOS CON DOMINIO DE ALGÚN OBJETO EXTERNO, QUE NOS VAN A PERMITIR MEJORAR UNA AMPLIA GAMA DE CAPACIDADES FÍSICAS.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhatIs;

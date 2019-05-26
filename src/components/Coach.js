import React from 'react';
import classNames from 'classnames';

import './Coach.scss';

class Coach extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            separator
         } = this.props;
        
        const containerClasses = classNames(
            'coach__description-container',
            {'coach__description-container--separator': separator},
        );

        return (
            <div className="coach">
                <div className="container">
                    <div className="row align-items-sm-center">
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="coach__title">NUESTRO COACH</h1>    
                                    <div className={containerClasses}>
                                        <p className="coach__description-text">
                                            LUCAS NESSIER, DE 27 A&ntilde;OS, ES PROFESOR DE EDUCACI&Oacute;N F&Iacute;SICA Y ENTRENADOR DE CROSSFIT NIVEL 2 (DOS), APASIONADO POR LA ACTIVIDAD F&Iacute;SICA Y LA SALUD EX JUGADOR DE F&Uacute;TBOL. SUS INICIOS EN EL CROSSFIT FUERON A FINES DEL A&ntilde;O 2013.
                                        </p>
                                        <p className="coach__description-text">
                                            SU PACIENCIA Y DESEMPE&ntilde;O HA MEJORADO LA CALIDAD DE VIDA DE MUCHO DE SUS ALUMNOS CONTAGIANDO EL ENTUSIASMO, PASI&Oacute;N POR EL DEPORTE Y BRINDANDO UN AMBIENTE DE CONTENCI&Oacute;N
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="coach__image" src="static/images/tigres.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coach;

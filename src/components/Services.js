import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion';

import './Services.scss';
import Card from './Card';


const Services = () => {
	return (
		<section className="services">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="services__title">En J&auml;ger Maip&uacute; te ofrecemos...</h2>
					</div>
				</div>
				<div className="row justify-content-center d-none d-md-flex">
					<div className="col-10 col-md-6 col-lg-3 mb-5 mb-lg-0">
						<Card 
							title="j&auml;ger 60" 
							description={["60 minutos", "Constantemente variado", "Diferentes grados de complejidad", "Fuerza y trabajos de habilidad."]}
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-3 mb-5 mb-lg-0">
						<Card 
							title="j&auml;ger 45" 
							description={["45 minutos", "Pesos moderados/bajos", "Complejidad de ejercicios moderada/baja."]}
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-3 mb-5 mb-lg-0">
						<Card 
							title="j&auml;ger kids" 
							description={["45 minutos", "Juegos y actividades recreativas", "Compañerismo", "Generar conciencia sobre la importancia de la actividad física y buena alimentación desde una temprana edad."]}
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-4 mb-5 mb-lg-0">
						<Card 
							title="Levantamiento ol&iacute;mpico" 
							description={["60 minutos", "Fuerza y trabajos de técnica", "Enfoque principal en los ejercicios de levantamiento 'Snatch, Clean and Jerk'"]}
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-4 mb-5 mb-lg-0">
						<Card 
							title="SGA e hipopresivos" 
							description={[
								"STRECHING GLOBAL ACTIVO: consiste en estiramiento globales mediante diferentes posturas, acompañadas de una respiración controlada.",
								"Siendo una herramienta muy eficaz para mejorar rendimiento muscular y prevenir lesiones.",
								"ABDOMINALES HIPOPRESIVOS: ejercicios que reducen la presión abdominal y así reducir perímetro de la cintura, mejorar postura, aumentar estabilidad de zona media y prevenir y tratar prolapsos. principal en los ejercicios de levantamiento 'Snatch, Clean and Jerk'"
							]}
						/>
					</div>
				</div>
				<Accordion allowZeroExpanded className="d-md-none">
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/mira-negra.png" alt="Crossfit Jager icon" className="services__accordion-heading-image" />
									</div>
									<h4 className="mb-0 text-uppercase">Crossfit j&auml;ger</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">60 minutos</li>
										<li class="list-group-item">Constantemente variado</li>
										<li class="list-group-item">Diferentes grados de complejidad</li>
										<li class="list-group-item">Fuerza y trabajos de habilidad</li>
									</ul>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/mira-negra.png" alt="Crossfit Jager icon" className="services__accordion-heading-image" />
									</div>
									<h4 className="mb-0 text-uppercase">j&auml;ger 45'</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">45 minutos</li>
										<li class="list-group-item">Pesos moderados/bajos</li>
										<li class="list-group-item">Complejidad de ejercicios moderada/baja</li>
									</ul>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/mira-negra.png" alt="Crossfit Jager icon" className="services__accordion-heading-image" />
									</div>
									<h4 className="mb-0 text-uppercase">j&auml;ger kids</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">45 minutos</li>
										<li class="list-group-item">Juegos y actividades recreativas</li>
										<li class="list-group-item">Compañerismo</li>
										<li class="list-group-item">Generar conciencia sobre la importancia de la actividad física y buena alimentación desde una temprana edad</li>
									</ul>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/mira-negra.png" alt="Crossfit Jager icon" className="services__accordion-heading-image" />
									</div>
									<h4 className="mb-0 text-uppercase">Levantamiento</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">60 minutos</li>
										<li class="list-group-item">Fuerza y trabajos de técnica</li>
										<li class="list-group-item">Enfoque principal en los ejercicios de levantamiento 'Snatch, Clean and Jerk</li>
									</ul>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/mira-negra.png" alt="Crossfit Jager icon" className="services__accordion-heading-image" />
									</div>
									<h4 className="mb-0 text-uppercase">SGA e hipopresivos</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<ul class="list-group list-group-flush">
										<li class="list-group-item">STRECHING GLOBAL ACTIVO: consiste en estiramiento globales mediante diferentes posturas, acompañadas de una respiración controlada</li>
										<li class="list-group-item">Siendo una herramienta muy eficaz para mejorar rendimiento muscular y prevenir lesiones</li>
										<li class="list-group-item">ABDOMINALES HIPOPRESIVOS: ejercicios que reducen la presión abdominal y así reducir perímetro de la cintura, mejorar postura, aumentar estabilidad de zona media y prevenir y tratar prolapsos. principal en los ejercicios de levantamiento 'Snatch, Clean and Jerk'</li>
									</ul>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	)
}

export default Services

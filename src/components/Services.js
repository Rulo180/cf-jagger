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
							title="Crossfit j&auml;ger" 
							description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo."
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-3 mb-5 mb-lg-0">
						<Card 
							title="j&auml;ger 45'" 
							description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo."
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-3 mb-5 mb-lg-0">
						<Card 
							title="j&auml;ger kids" 
							description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo."
						/>
					</div>
					<div className="col-10 col-md-6 col-lg-3">
						<Card 
							title="Levantamiento" 
							description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo."
						/>
					</div>
				</div>
				<Accordion allowZeroExpanded className="d-md-none">
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/miras.png" alt="Mira" />
									</div>
									<h4 className="mb-0 text-uppercase">Crossfit j&auml;ger</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo.
									</p>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/miras.png" alt="Mira" />
									</div>
									<h4 className="mb-0 text-uppercase">j&auml;ger 45'</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo.
									</p>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/miras.png" alt="Mira" />
									</div>
									<h4 className="mb-0 text-uppercase">j&auml;ger kids</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo.
									</p>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem className="services__accordion-item">
						<AccordionItemHeading className="services__accordion-heading">
							<AccordionItemButton className="services__accordion-item-button">
								<div className="row no-gutters align-items-center h-100">
									<div className="services__accordion-heading-icon">
										<img src="/static/images/miras.png" alt="Mira" />
									</div>
									<h4 className="mb-0 text-uppercase">Levantamiento</h4>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="row no-gutters services__accordion-content">
								<div className="col-9">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id dolore dicta nihil iste omnis rem, ducimus pariatur eveniet, qui alias beatae impedit natus ipsam, unde veniam perferendis fuga ea illo deleniti tempore eius aspernatur voluptate. Voluptatum doloribus perspiciatis quo.
									</p>
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

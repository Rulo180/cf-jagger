import React from 'react';

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
				<div className="row justify-content-center">
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
			</div>
		</section>
	)
}

export default Services

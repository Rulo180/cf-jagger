import React from 'react'

import './Banner.scss'


const Banner = (props) => {
  	return (
		<section className="banner">
			<div className="row">
				<div className="col">
					<h4 className="banner__title">
						<b className="d-block d-sm-inline">¡Reserv&aacute; hoy!</b> Tu primera clase es <b className="banner__lead-text">GRATIS</b>
						{(props.hasButton) ? <button className="btn btn-primary">¡QUIERO EMPEZAR!</button> : null}
					</h4>
				</div>
			</div>
		</section>
	)
}

export default Banner

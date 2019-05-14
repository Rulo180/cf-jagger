import React from 'react';
import classNames from 'classnames';

import './InfoSection.scss';

class InfoSection extends React.Component {
    render() {
        const { 
            title,
            description,
            background,
            separator,
            color,
         } = this.props;

        const titles = title.map((word, idx) => <h1 className="text-uppercase" key={idx}>{word}</h1>);

        const styleInfo = {
            background: (background) ? background : '',
            color: (color) ? color : '',
        };

        const containerClasses = classNames(
            'info__description-container',
            {'info__description-container--separator': separator},
        );

        return (
            <div className="info" style={styleInfo}>
                <div className="container">
					<div className="row align-items-sm-center">
                        <div className="col-12 col-sm-6">
                            {titles}
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className={containerClasses}>
                                <p className="info__description-text">
                                    {description}
                                </p>
                            </div>
                        </div>
					</div>
                </div>
            </div>
        )
    }
}

export default InfoSection;

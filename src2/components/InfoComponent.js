import React from 'react';

import './InfoComponent.scss';

class InfoComponent extends React.Component {
    render() {
        
        const titles = this.props.title.map((word, idx) => <h3 className="info__titleword" key={idx}>{word}</h3>);

        let hasBorderClass = '';
        if(this.props.hasBorder) {
            hasBorderClass = 'has-border';
        }

        /**
         * Description could be an string or an array of objects, if it is an array has options then
         * [{
         *     text (String), -> description's text
         *     uppercase (Boolean) -> text uppercase or not
         * }]
         */
        let description = <p className={"info__description " + hasBorderClass} dangerouslySetInnerHTML={{__html: this.props.description}}></p>;
        if(Array.isArray(this.props.description)) {
            description = this.props.description.map((desc, idx) => {
                let uppercaseClass = ' text-uppercase';
                let text = desc;
                if(typeof desc === 'object' && desc.hasOwnProperty('uppercase') && !desc.uppercase) {
                    uppercaseClass = '';
                    text = desc.text;
                }
                return <p key={idx} className={"info__description " + hasBorderClass + uppercaseClass} dangerouslySetInnerHTML={{__html: text}}></p>;
            })
        }


        let styleInfo = {
            backgroundImage: (this.props.backgroundImage) ? 'url(/static/images/' + this.props.backgroundImage + ')' : ''
        };

        let styleContainer = {
            color: (this.props.color) ? this.props.color : ''
        };

        return (
            <div className="info" style={styleInfo}>
                <div className="container" style={styleContainer}>
                    {titles}
                    {description}
                </div>
            </div>
        )
    }
}

export default InfoComponent;
import React from 'react';

import Navbar from "./Navbar";
import Footer from './Footer';


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.footerRef = React.createRef();
        this.handleScrollToFooter = this.handleScrollToFooter.bind(this);
    }

    handleScrollToFooter(event) {
        window.scrollTo(0, this.footerRef.current.offsetTop);
    }

    render() { 
        const { children } = this.props;
        return (
            <div className="layout">
                <Navbar handleScrollToFooter={this.handleScrollToFooter} />
                <main>
                    {children}
                </main>
                <Footer footerRef={this.footerRef} />
            </div>
        );
    }
}

export default Layout;

import React from 'react';

import './styles.scss';

class Header extends React.Component{
    render(){
        return(
            <header data-test="headerComponent">
                <div className="wrap">
                    <div className="logo">
                        <span data-test="logoImg">SimpleTut</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
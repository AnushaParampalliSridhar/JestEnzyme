import React from 'react';

import './styles.scss';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="wrap">
                    <div className="logo">
                        <span>SimpleTut</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
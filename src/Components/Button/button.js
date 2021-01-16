import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Button extends React.Component{

    handleClick = () => {
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const {btnText} = this.props;
        return(
            <button data-test="buttonComponent" onClick={this.handleClick}>
                {btnText}
            </button>
        )
    }
}

Button.propTypes = {
    btnText : PropTypes.string,
    emitEvent : PropTypes.func
};

export default Button;
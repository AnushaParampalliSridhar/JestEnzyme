import React from 'react';
import PropTypes from 'prop-types';

class Headline extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {header,description} = this.props;

        if(!header){
            return null;
        }

        return(
            <div data-test="headlineComponent">
                <h1 data-test="header">
                    {header}
                </h1>
                <p data-test="description">
                    {description}
                </p>
            </div>
        )
    }
}

Headline.propTypes = {
    header : PropTypes.string,
    description : PropTypes.string
}

export default Headline;
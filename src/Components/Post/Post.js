import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Post extends React.Component{
    
    render(){

        const {title,content} = this.props;

        if(!title){
            return null;
        }

        return(
            <div data-test="postComponent">
                <h2 data-test="title">{title}</h2>
                <div data-test="content">
                    {content}
                </div>
            </div>
        );
    }

}

Post.propTypes = {
    title : PropTypes.string,
    content : PropTypes.string
}

export default Post;
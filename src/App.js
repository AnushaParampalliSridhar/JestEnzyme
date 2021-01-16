import React from 'react';
import {connect} from 'react-redux';

import Header from './Components/Header/header';
import Headline from './Components/Headline/headline';
import Button from './Components/Button/button';
import Post from './Components/Post/Post';

import {fetchPosts} from './actions/index';

import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  fetch = () => {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <Header/>     
        <section className="main">
          <Headline header="Posts" description="Click the button to render the posts"/>
          <Button btnText="Get Posts" emitEvent={this.fetch} />
          {this.props.posts.length > 0 ?
          <div>
          {this.props.posts.map(post => {
            return <Post key={post.id} title={post.title} content={post.body}/>
          })}
          </div>:null}
        </section>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(App);

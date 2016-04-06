import React from 'react';

require('assets/styles/styles.css');

export default React.createClass({

  getInitialState: function(){
    return{
  		count: 0,
  		likes: "Like"
  	}
  },

  counter: function(e){
  	var likesWord;
  	var count= this.state.count + 1;
  	if (count === 1){
  		likesWord = 'Like';
  	}else{
  		likesWord = 'Likes';
  	}

	this.setState({
		count: count,
		likes: likesWord
	})
  },


  render: function () {
    return(
      <div className="like">
      	<button className="likeButton" onClick={this.counter}>{this.state.count} {this.state.likes}</button>
      </div>
    )
  }
})
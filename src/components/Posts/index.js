import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';

const { token, apiUrl } = require('../../api-variables');

class PostsContainer extends Component {
  state = {
    posts: [],
    limit: 4
  };

  async componentDidMount() {
    const response = await axios({
      method: 'get',
      url: `${apiUrl}/posts`,
      headers: {
        token: token
      }
    });
    this.setState({
      posts: response.data
    });
  }

  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 4
    });
  };

  render() {
    return <Posts posts={this.state.posts} onLoadMore={this.onLoadMore} limit={this.state.limit} />;
  }
}

export default PostsContainer;

import React, { Component } from 'react';
import axios from 'axios';
import AddPost from './AddPost';

const { token, apiUrl } = require('../../api-variables');

class AddPostContainer extends Component {
  state = {
    categories: [],
    category_id: 'none',
    title: '',
    content: '',
    responseMessage: ''
  };

  async componentDidMount() {
    const response = await axios({
      method: 'GET',
      url: `${apiUrl}/categories`,
      headers: {
        token: token
      }
    });

    this.setState({
      categories: response.data
    });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: `${apiUrl}/posts`,
      headers: {
        token: token
      },
      params: {
        title: this.state.title,
        content: this.state.content,
        category_id: this.state.category_id
      }
    })
      .then(response => {
        if (response.status === 201) {
          this.setState({
            title: '',
            category_id: 'none',
            content: '',
            responseMessage: 'Created succesfully'
          });
        } else {
          this.setState({
            responseMessage: 'There was a problem creating your post. Try again later.'
          });
        }
      })
      .catch(
        this.setState({
          responseMessage: 'Please fill category field.'
        })
      );
  };

  render() {
    return (
      <AddPost
        categories={this.state.categories}
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        values={this.state}
      />
    );
  }
}

export default AddPostContainer;

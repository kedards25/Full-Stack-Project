import React, { Component } from "react";

export class HttpGetDemo extends Component {
  // constructor(props) {
  //   super(props);

  state = {
    isLoaded: false,
    posts: []
  };
  // }

  async componentDidMount() {
    const url = "http://localhost:8080/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ posts: data });
    // console.log(posts[0]);
  }
  render() {
    // const { posts } = this.state;
    return (
      <div>
        {this.state.isLoaded ? (
          <h2>Loading..</h2>
        ) : (
          <div>
            <h2>Loaded..</h2>
            <div>
              {this.state.posts.map(post => (
                <div key={post.userId}>
                  Id: {post.userId}
                  <br />
                  Name: {post.userName}
                  <br />
                  Address: {post.userAddress}
                  <br />
                  Email:{post.userEmail}
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HttpGetDemo;

import React, { Component } from 'react'

const url = "https://jsonplaceholder.typicode.com/posts";
export class HTTP_Fetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null
        }
    }


    componentDidMount() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({ posts: data }))

    }

    render() {
        console.log(this.state.posts);
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts && this.state.posts.map(post => (
                    <h3 key={post.id}>
                        {post.title}
                    </h3>
                ))}

            </div>
        )
    }
}

export default HTTP_Fetch

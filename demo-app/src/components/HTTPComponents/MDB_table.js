import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

export class MDB_table extends Component {
    state = {
        isLoaded: false,
        posts: [],
        show: false
    };
    // }
    onShow = () => {
        this.setState({ show: true })
    }

    onHide = () => {
        this.setState({ show: false })
    }
    async componentDidMount() {
        this.onShow();
        const url = "https://jsonplaceholder.typicode.com/comments";
        const response = await fetch(url);
        const datas = await response.json();
        this.setState({ posts: datas });
        this.onHide();

        // console.log(posts[0]);
    }
    render() {
        return (
            <div>
                <Loading
                    show={this.state.show}
                    color="pink"
                    showSpinner={false}
                />
                <MDBTable
                    responsive
                    hover
                    data={this.posts}
                    striped
                //searching={true}
                >
                    <MDBTableHead color="primary-color" textWhite>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td >{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable >
            </div >
        )
    }
}

export default MDB_table

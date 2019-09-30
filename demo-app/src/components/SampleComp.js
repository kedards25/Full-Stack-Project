import React, { Component } from 'react'

export class SampleComp extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name)
    }


    render() {
        const { name, otherName } = this.props;
        return (
            <div>
                {/* <h1 class="h1-responsive">Hello {name} and {otherName}</h1> */}
            </div>
        )
    }
}

export default SampleComp

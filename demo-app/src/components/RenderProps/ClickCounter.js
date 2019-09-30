import React from 'react';
class ClickCounter extends React.Component {
    render(props) {
        const{count,incrementCount}=this.props
        return (
            
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter

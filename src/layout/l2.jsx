import React from "react";
class L2 extends React.Component {
    render() {
        return (
            <div>
                <div style={{height: "80px",lineHeight: "80px",backgroundColor: "pink"}}>layout 2</div>
                {this.props.children}
            </div>
        )
    }
}
export default L2;
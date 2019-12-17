import React from "react";
class L1 extends React.Component {
    render() {
        return (
            <div>
                <div style={{height: "80px",lineHeight: "80px",backgroundColor: "#ccc"}}>layout 1</div>
                {this.props.children}
            </div>
        )
    }
}
export default L1;
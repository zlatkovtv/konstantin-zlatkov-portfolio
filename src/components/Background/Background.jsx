import React from 'react';
import './Background.scss';


class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: "calc(100% - 4em * 1)",
                marginTop: "6em",
                backgroundImage: `-webkit-linear-gradient(-20deg, #161616 50%, #242530 50%)`
            }
        };
    }

    render() {
        return (
            <div id="background" style={this.state.style}>
            </div>
        );
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.growPercentage !== prevProps.growPercentage) 
        {
            this.setState({
                style: {
                    width: `calc(100% - 4em * ${this.props.growPercentage})`,
                    marginTop: `calc(6em * ${this.props.growPercentage})`
                }
            });
        }
    } 
}

export default Background;
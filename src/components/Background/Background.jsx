import React from 'react';
import './Background.scss';


class Background extends React.Component {
    constructor(props) {
        super(props);
        var gradientConstant = 50 * (1 - this.props.growPercentage);
        this.state = {
            style: {
                width: `calc(100% - 4em * ${this.props.growPercentage})`,
                    marginTop: `calc(6em * ${this.props.growPercentage})`,
                    backgroundImage: `-webkit-linear-gradient(-20deg, #161616 ${50 + gradientConstant}%, #242530 ${50 - gradientConstant}%)`
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
            var gradientConstant = 50 * (1 - this.props.growPercentage);
            this.setState({
                style: {
                    width: `calc(100% - 4em * ${this.props.growPercentage})`,
                    marginTop: `calc(6em * ${this.props.growPercentage})`,
                    backgroundImage: `-webkit-linear-gradient(-20deg, #161616 ${50 + gradientConstant}%, #242530 ${50 - gradientConstant}%)`
                }
            });
        }
    } 
}

export default Background;
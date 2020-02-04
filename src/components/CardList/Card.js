import React from "react"
import * as PropTypes from "prop-types";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moreInfo : false,
        }
    }

    showMoreInfo =()=>{
        this.setState({
            moreInfo : !this.state.moreInfo,
        })
    }
    render() {
        let {character} = this.props;
        const {name, gender, species, status, image} = character;
        const {moreInfo} = this.state;
        const getInfo = () => {
            return(
                <>
                    <h6>Gender: {gender}</h6>
                    <h6>Species: {species}</h6>
                    <h6>Status: {status}</h6>
                </>
            )
        }
        return (
            <li className="card">
                <img src={image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4>{name}</h4>
                    {moreInfo && getInfo() }
                    <button onClick={this.showMoreInfo} className="btn btn-primary">More info</button>
                </div>
            </li>
        )
    }
}

Card.propTypes = {character: PropTypes.any}

export default Card;
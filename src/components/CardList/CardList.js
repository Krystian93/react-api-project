import React from "react";
import axios from "axios";
import  './index.css'
import Card from "./Card";

class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
            characters : []
        }
    }

    async componentDidMount() {
        try{
            const {data} = await axios.get("https://rickandmortyapi.com/api/character");

            this.setState({
                isLoaded : true,
                characters : data.results,
            })

        }catch (error) {
            console.log(error);
        }
    }

    render() {
        const {characters, isLoaded} = this.state;
        return(
            <div className="container justify-content-center py-5">
                <ul className="cards-grid">
                    { isLoaded && characters.map(character => {
                        return(
                            <Card key={character.id} character={character}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CardList;
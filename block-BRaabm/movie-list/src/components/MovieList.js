import React from "react";
import RenderModal from "./Movie";
import data from "../data/data.json";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalFor: null
    }
  } 

  handleShowDetails = (movie) => {
    this.setState({ showModalFor: movie });
  }

  handleCloseDetails = () => {
    this.setState ({
      showModalFor : null,
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <ul className="movie-list">
            {data.map((movie, index) => {
              return(
                <>
                  <li key={index} className="flex gap-2 center movie">
                    <img className="poster" src={movie.Images[0]} alt={movie.Title} />
                    <div>
                      <h2>{movie.Title}</h2>
                      <h3>{movie.Released}</h3>
                    </div>
                    <div>
                      <button 
                        onClick={() => this.handleShowDetails(movie)} 
                        className="more-info"
                      >
                        More info
                      </button>
                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
        {this.state.showModalFor &&
        <RenderModal closeModal= {this.handleCloseDetails} movie= {this.state.showModalFor} />
        }

      </>
    )
  }
}

export default MovieList;
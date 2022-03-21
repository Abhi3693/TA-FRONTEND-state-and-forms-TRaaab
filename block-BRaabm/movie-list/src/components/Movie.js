import React from "react"

class RenderModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.movie) return null;
    const movie = this.props.movie;
    return (
      <div className={"modal open"}>
        <div>
          <span className="close" onClick={this.props.closeModal}>Close</span>
          <h2>{movie.Title}</h2>
          <h3>{movie.Actors}</h3>
          <h3>{movie.Director}</h3>
          <h3>{movie.Genre}</h3>
          <h3>{movie.Rated}</h3>
          <h3>{movie.Writer}</h3>
          <h3>{movie.Year}</h3>
          <h3>{movie.Language}</h3>
          <div className="flex gap-2 wrap">
            {movie.Images.map((img, i) => {
              return  <img key={i} className="images" src={img} alt={`img-`+ i} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default RenderModal;
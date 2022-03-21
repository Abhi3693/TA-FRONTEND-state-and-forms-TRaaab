
function Card(props) {
  return (
    <li className="card flex space-btw gap-1">
      <div className="img-holder">
        <img src={props.img} />
      </div>
      <div>
        <div className="flex space-btw center gap-1">
          <h2>{props.title.charAt(0).toUpperCase() + props.title.slice(1, props.title.length)}</h2>
          <span>$ {props.price}</span>
        </div>
        <hr/>
        <p>{props.desc}</p>
      </div>
    </li>
  )
}

export default Card;
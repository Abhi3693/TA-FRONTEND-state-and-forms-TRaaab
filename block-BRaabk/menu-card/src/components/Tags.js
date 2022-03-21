
import React from "react";
import data from "../data/data.json";
import Card from "./Card";


class Tags extends React.Component {
  constructor() {
    super();
    this.state ={
      activeTag : "all",
    }
  }

  handleClick = (val) => {
    this.setState((prevState)=>{
      return {
        activeTag : val,
      }
    });
  }

  render() {

    let category = [] ;
    data.forEach((d,i,arr)=>{
      category.push(d.category)
    })
    let unique = category.filter((c,i,all) => {
      return all.indexOf(c) === i
    });

    let result ;

    if(this.state.activeTag === "all") {
      result = data;
    } else {
      result = data.filter((e) => {
        return e.category === this.state.activeTag
      })
    }
    
    // console.log(result)
    return (
      <>
      <div className="category-holder">
        <button onClick={()=> this.handleClick("all")} className={this.state.activeTag === "all" ? "active btn" : "btn" }>All</button>
        {unique.map((u) => {
          return <button onClick={()=> this.handleClick(u)} className={this.state.activeTag === u ? "active btn" : "btn" } key={u}>{u.charAt(0).toUpperCase() + u.slice(1, u.length)}</button>
        })}
      </div>
      <div>
        <ul className="flex space-btw align-top gap-1">
          {result.map((item) => {
            return <Card key={item.id} {...item} />
          })}
        </ul>
      </div>
      </>

    )
  }
}

export default Tags;
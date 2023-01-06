import React, { Component } from "react";

export class Newsitems extends Component {

  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" >{title?title.slice(0,50):'No title Avaiable'}...</h5>
            <p className="card-text">{description?description.slice(0,80):'No description avaiable'}...</p>
            <a href={newsUrl} target="_blank "className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;

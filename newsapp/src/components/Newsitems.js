import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 50) : "No title Avaiable"}...
            </h5>
            <h6>Source <span className="badge bg-secondary">{source?source:"Not Avaiable"}</span></h6>
            <p className="card-text">
              {description
                ? description.slice(0, 80)
                : "No description available"}...
            </p>
            <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toUTCString()}</small></p>
            <a
              href={newsUrl}
              target="_blank "
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;

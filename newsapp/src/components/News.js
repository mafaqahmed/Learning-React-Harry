import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=1&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=${
      this.state.page - 1
    }&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=${
      this.state.page + 1
    }&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Daily Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row justify-content-md-center">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-lg-4 my-3" key={element.url}>
                    <Newsitems
                      title={element.title}
                      description={element.description}
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "data:image/jpeg;base64,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"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page === 1}
              onClick={this.handlePrevious}
              type="button"
              className="btn btn-dark"
            >
              &laquo; Previous
            </button>
            <button
              disabled={
                this.state.page > Math.floor(this.state.totalResults / 15)
              }
              onClick={this.handleNext}
              type="button"
              className="btn btn-dark"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

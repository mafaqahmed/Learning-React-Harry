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

  capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `JungleNews - ${this.capitalizeString(this.props.category)}`;
  }

  handleUpdate = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=${this.state.page}&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.handleUpdate();
  }

  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.handleUpdate();
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.handleUpdate();
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-10" style={{margin: "15px 0"}}>JungleNews - Top {this.capitalizeString(this.props.category)} Headlines</h1>
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
                          : "https://image.cnbcfm.com/api/v1/image/106994202-1644609684532-abc.jpg?v=1673040825&w=1920&h=1080"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
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

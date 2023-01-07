import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsInfScr extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 2,
    };
    document.title = `JungleNews - ${this.capitalizeString(
      this.props.category
    )}`;
  }

  async componentDidMount() {
    this.props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=1&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(30);
    let parsedData = await data.json();
    this.props.progress(70);
    this.setState({
      articles:     parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.progress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c5644d494fb44b01b5c906fb8ecf099d&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-10 mx-1" style={{ margin: "12px 0" }}>
          JungleNews - Top {this.capitalizeString(this.props.category)}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <div className="container" style={{maxWidth: "1510px"}}>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.totalResults !== this.state.articles.length}
            loader={<Spinner />}
          >
            <div className="row justify-content-md-center">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-lg-3 my-3" key={index}>
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
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default NewsInfScr;

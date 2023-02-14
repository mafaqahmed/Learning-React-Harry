import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsInfScr from "./components/NewsInfScr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" height={4} progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={<NewsInfScr progress={this.setProgress} key="general" category="general" />}
            />
            <Route
              exact
              path="/about"
              element={<About />}
            />
            <Route
              exact
              path="/business"
              element={<NewsInfScr progress={this.setProgress} key="business" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsInfScr progress={this.setProgress} key="entertainment" category="entertainment" />
              }
            />
            <Route
              exact
              path="/health"
              element={<NewsInfScr progress={this.setProgress} key="health" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<NewsInfScr progress={this.setProgress} key="science" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<NewsInfScr progress={this.setProgress} key="sports" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<NewsInfScr progress={this.setProgress} key="technology" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    
    <div className="App">

      <Header name = "Underreacted"/>

      <About image = "https://via.placeholder.com/215" about = "React Learning Blog."/>
     
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;

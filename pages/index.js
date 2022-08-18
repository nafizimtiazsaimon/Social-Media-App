import React from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

function Index({ user, postsData, errorLoading }) {
  return (
    <div>
      {posts &&
        psots.length > 0 &&
        posts.map((post) => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const { name } = ctx.query;
  console.log(name);

  return { postsData: res.data };
};

export default Index;

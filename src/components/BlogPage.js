import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Layout from "./Layout";
import remarkGfm from "remark-gfm";

const BlogPage = () => {
  const {blogName} = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    import(`../data/blogs/${blogName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setBlog(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  console.log(blog);
  return (
    <Layout>
      <section className="p-8">
        <ReactMarkdown children={blog} className="prose prose-slate" remarkPlugins={[remarkGfm]} />
      </section>
    </Layout>
  );
};

export default BlogPage;

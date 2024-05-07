import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </main>
  );
}

export default ArticleList;
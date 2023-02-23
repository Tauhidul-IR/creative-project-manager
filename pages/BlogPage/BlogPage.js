import BlogArticlePages from "../../Components/Resources/Blog/BlogArticlePages";
import Blog from "../../Components/Resources/Blog/Blog";
import ArticleCard from "../../Components/Resources/Blog/ArticleCard";


const BlogPage = ({ articles }) => {
  console.log(articles);

  return (
    <div>
      <div>
        <Blog></Blog>
      </div>
      <div>
        <BlogArticlePages></BlogArticlePages>
      </div>
      <div className="grid justify-center place-content-center lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  ">
        {
          articles.map(article => <ArticleCard
            key={article._id}
            article={article}
          ></ArticleCard>)
        }

      </div>
    </div>
  )
};


export const getStaticProps = async () => {
  const res = await fetch('https://creative-project-manager-server.vercel.app/blog-article');
  const data = await res.json();
  return {
    props: {
      articles: JSON.parse(JSON.stringify(data))
    }
  }

}

export default BlogPage;


import Link from "next/link";

const ArticleCard = ({article}) => {
    return (
        <div>
         
		 
	<Link href={`/BlogPage/BlogPage/${article?._id}`}>
	<div class="containerCard  ">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={article.img}/>
					</div>
					<div class="contentBx">
						
						<h3>{article.title}<br/><span>By {article.writer}</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li className="text-white mt-4 mb-4" >
						<a href="">{article.description.slice(0,50)}</a>
					</li>
					
				</ul>
			</div>
        </div>
	
	</Link>
		 
	
        </div>
    );
};

export default ArticleCard;
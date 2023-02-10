const ArticleCard = ({article}) => {
    return (
        <div>
           	<div class="containerCard">
			<div class="cardArticle">
				<div class="content">
					<div class="imgBx">
						<img src={article.img}/>
					</div>
					<div class="contentBx">
						<h3>{article.title}</h3>
                        <p><span className="text-sky-500 ml-10">By </span>{article.writer}</p>
                        <p className="ml-10 mt-3">{article.date}</p>
                      
					</div>
				</div>
				<ul class="sci">
					<li>
                    <p className="ml-10 mt-3 mb-3">{article.description.slice(0,90)}</p>
					</li>
					
				</ul>
			</div> 
        </div>
        </div>
    );
};

export default ArticleCard;
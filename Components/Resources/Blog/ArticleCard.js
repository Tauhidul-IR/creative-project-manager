const ArticleCard = ({article}) => {
    return (
        <div>
         
		 
		 <div class="containerCard ">
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
					<li >
						<a href="">{article.description.slice(0,50)}</a>
					</li>
					
				</ul>
			</div>
        </div>
		 
	
        </div>
    );
};

export default ArticleCard;
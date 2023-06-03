import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const[page, setPage] = useState(1)
  // const [loading, setLoading] = useState(true);
  const[totalResults, setTotalResults] = useState(0);


  // const updateNews = async () => {

  //   const fetchNews = async () => {

  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db8c4aabb1b94d039712afb347d4385b&page=${page}&pageSize=${props.pageSize}`;
  //     let response = await fetch(url);
  //     let data = await response.json()
  //     // console.log(data)
  //     setArticles(data.articles);
  //     setTotalResults(data.totalResults);
  //     // console.log(data.totalResults)
  // }

  // fetchNews();
  // }


  useEffect(() => {

    const fetchNews = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db8c4aabb1b94d039712afb347d4385b&page=1&pageSize=${props.pageSize}`;
        let response = await fetch(url);
        let data = await response.json()
        console.log(data)
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        // console.log(data.totalResults)
        console.log("page when news fetch",page)
    }

    fetchNews();

  }, []); 



  // TO handle Previous Click Button

  const handlePreviousClick = () => {
     
    const fetchNews = async () => {

      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db8c4aabb1b94d039712afb347d4385b&page=${page-1}&pageSize=${props.pageSize}`;
      let response = await fetch(url);
      let data = await response.json()
      setArticles(data.articles);
      // setPage(page-1)
      console.log("previous click", page) 
  }
   fetchNews();
  }

  
  // To handle Next Click Button


  const handleNextClick = () => {
 
    if( page > Math.ceil(totalResults/props.pageSize)) {

    }
    
    else{
    const fetchNews = async () => {

      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db8c4aabb1b94d039712afb347d4385b&page=${page+1}&pageSize=${props.pageSize}`;
      let response = await fetch(url);
      let data = await response.json()
      setArticles(data.articles);
      setPage(page+1)
      console.log("Next click", page)
      
  }

  fetchNews();
  }
}




  return (

    
      <div className="container my-3">

        <h2 className='text-center my-4'>NewsBird - Top Headlines </h2>

        {articles && articles.length > 0 ? <div className='row row-cols-1  row-cols-md-3'>
          {articles.map((element) => {

            return <div className='col md-4' key={element.url}>
              <NewsItem  title={element.title} description ={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} date={element.publishedAt} author={element.author}/>
            </div>

          })}
        </div>:null}

          <div className="contianer d-flex justify-content-between my-4">
            <button disabled={page<1} type='button' className='btn btn-dark' onClick={handlePreviousClick}> &larr; Previous</button>
            <button disabled={ page > Math.ceil(totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
          </div>

      </div>
     
  )
}

export default News
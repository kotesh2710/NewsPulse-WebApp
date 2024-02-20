import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import './News.css'
import { FaSyncAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function News (props){
  
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [errorMessage,setErrorMessage] = useState("");

  const updateNews = async ()=>{
      props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57ddd0cb406e4fd18fdf74508245bf16&page=${page}&pagesize=${props.pagesize}`;
      setLoading(true)
      try {
        let data = await fetch(url);
        if (data.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        else if (!data.ok) {
          throw new Error(`HTTP error! Status: ${data.status}`);
        }
        let parseddata = await data.json();
        setArticles(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        props.setProgress(100);
      } 
      catch (error) {
        setLoading(false)
        setErrorMessage(error.message)
        console.log(error.message)
      }
  }

  useEffect (()=>{
    updateNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
    
  const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }


  const fetchMoreData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57ddd0cb406e4fd18fdf74508245bf16&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false)
  }

  document.title=`NewsPulse - ${capitalize(props.category)} news`;

  const handleReload = () => {
    setErrorMessage('')
    updateNews();
  }

  return (
    <div className='container my-4'>
      <h1 className='text-center' style={{margin:"25px 0px", marginTop:"60px"}}>News Pulse - Top Headlines{<br/>}</h1>
      <div className='error-container'>
        {errorMessage && (
          <div className='error-message'>
            {errorMessage}
            <button onClick={handleReload} className='reload-button'>
              <FaSyncAlt/>
            </button>
          </div>
        )}
      </div>
      <InfiniteScroll dataLength={articles.length} 
        next={fetchMoreData} hasMore={articles.length<=totalResults} loader={loading&&<Loading/>}
        style={{ overflow: 'hidden' }}>
      <div className='row'>
        {articles.map((element,index)=>(
          <div className='col-md-4 my-1' key={index}>
            <NewsItem title={element.title?element.title.slice(0,40):"No Title"} 
            description={element.description?element.description.slice(0,80):"No Description"} 
            imageurl={element.urlToImage} newsurl={element.url} author={element.author}
            date={element.publishedAt} source={element.source.name}/>
          </div>
            ))}
      </div>
      </InfiniteScroll>    
    </div>
    )
  }

News.defaultProps={
  country: "in",
  pagesize: 6,
  category: "general",
}

News.propTypes={
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}



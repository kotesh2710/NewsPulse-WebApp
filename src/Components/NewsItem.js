import '@fortawesome/fontawesome-free/css/all.css';
import './NewsItem.css'

export default function NewsItem(props) {
  let {title,description,imageurl,newsurl,author,date,source} = props;
  const AltImg = "altimg.png";
  return (
    <>
      <div>
        <div className="card position-relative" style={{width: "18rem"}}>
          <img src={imageurl || AltImg} className="card-img-top" alt={AltImg} style={{ maxHeight: '150px', objectFit: 'cover' }}></img>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%',zIndex:'1'}}>
            {source}
            <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-text" style={{ position: "absolute", bottom: "15px"}}><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank"  rel="noopener noreferrer" className="btn btn-sm btn-primary" style={{ position: "absolute", bottom: "3px", right: "5px" }}>Continue Reading
            <i className="fas fa-external-link-alt"style={{ marginLeft: '5px' }}></i></a>
          </div>
        </div>
      </div>
      
    </>
  )
}
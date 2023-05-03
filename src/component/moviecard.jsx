import React from "react";
import heart from '../assets/heart.png'
import veiw from '../assets/view.png'

const moviecard = ({data}) =>{
    console.log(data.reactNum)
    return(
    <div className="movie-card">
                      <img src={data.movieIMg} alt="horror img" />
                      <div className="card-movie-content">
                        <div className="top-content">
                          <p>{data.time} ago</p>
                        </div>
                        <div className="bottom-content">
                          <p>{data.videoType}</p>
                          <h3>{data.movieName}</h3>
                          <div className="like-veiws">
                            <div className="like"><img src={heart} alt="love" />{data.reactNum}</div>
                            <div className="veiws"><img src={veiw} alt="eye" />{data.views}</div>
                          </div>
                        </div>
                      </div>
    </div>
    )
}

export default moviecard
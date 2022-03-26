import React from 'react'
import articlePoster1 from '../images/article-poster-1.png'
import articlePoster2 from '../images/article-poster-2.png'
import articlePoster3 from '../images/article-poster-3.png'
import articlePoster4 from '../images/article-poster-4.jpg'
import articlePoster5 from '../images/article-poster-5.png'
import articlePoster6 from '../images/article-poster-6.jpg'
import articlePoster7 from '../images/article-poster-1.png'

export default function ArticleSlider() {
  return (
      <div className='article-slider'>
          <a href="/">
          <article> 
              <img src={articlePoster1} alt="Article Poster" /> 
              <div className="details">
                <p>OL to Ved Vyas</p>
                <small>Open Letter - Non-Tech</small>
              </div>
          </article>
          </a>

          <a href="/">
          <article>
              <img src={articlePoster2} alt="Article Poster" />  
              <div className="details">
                <p>Festivals are must!</p>
                <small>Connect-ions - Non-Tech</small>
              </div>  
          </article>
          </a>

          <a href="/">
          <article>
              <img src={articlePoster3} alt="Article Poster" /> 
              <div className="details">
                <p>Am i a thief?</p>
                <small>Writer's Lounge - Non-Tech</small>
              </div>  
          </article>
          </a>

          <a href="/">    
          <article>
              <img src={articlePoster4} alt="Article Poster" />  
              <div className="details">
                <p>A trip to economial capital</p>
                <small>Writer's Lounge - Non-Tech</small>
              </div>  
          </article>
          </a>

          <a href="/">
          <article>
              <img src={articlePoster5} alt="Article Poster" />  
              <div className="details">
                <p>Chai pe Charcha</p>
                <small>Writer's Lounge - Non-Tech</small>
              </div>  
          </article>
          </a>
          
          <a href="/">
          <article>
              <img src={articlePoster6} alt="Article Poster" />  
              <div className="details">
                <p>Old Games</p>
                <small>Writer's Lounge - Non-Tech</small>
              </div>  
          </article>
          </a>

          <a href="/">
          <article>
              <img src={articlePoster7} alt="Article Poster" />   
              <div className="details">
                <p>A Creased Piece of Advice</p>
                <small>Connect-ions - Non-Tech</small>
              </div>  
          </article>
          </a>
    </div>
  )
}

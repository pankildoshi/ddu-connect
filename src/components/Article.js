import React from 'react'
import articleBanner from '../images/article-banner.png'

export default function Article() {
    return (
        <div className='article'>
            <div className="article-header">
                <h3>Pronto the Paper</h3>
                <small>Fiction - Non-Tech</small>
                <img src={articleBanner} alt="Article banner" />
            </div>
            <div className="article-body">
                <p>
                    “It’s been 10 years. 10 freaking years it took me, to grow from a sapling to a tree and this is what I end up    becoming.”, said Pronto the sticky paper, filled with rage.

                    “Oh come on Pronto you have been going on about this since the day we became sticky papers can’t you just accept certain facts and move on you don’t know much about our owner she might be a good lady. Besides not everyone gets what they want in life so just accept certain facts and move on. And look at her daughter over there, playing with her toys, she’s such a sweet girl.” said Steve the sticky paper behind him.
                </p>
                <button class="btn">Continue Reading..</button>
            </div>
        </div>
    )
}

import React from 'react'
import Article from './Article';
import ArticleSlider from './ArticleSlider';

export default function Home() {
    return (
        <>
            {/* main banner */}
            <div className="banner">
                <h1>DDU CONNECT</h1>
                <h2>REDEFINING CONVENTIONS</h2>
            </div>
            {/* articles */}
            <div className="wrapper">
            <h2>Latest Articles</h2>
            <div className="container">  
                <Article/>
                <ArticleSlider/>
            </div>
            </div>
            {/* 10th Volume banner */}
            <div className="banner-10th-vol">
            </div>
            {/* placement banner */}
            <div className="banner-placement">
            <h1>Placement Mania</h1>
            <h4>Stay updated with the placement details of our University.</h4>
            <button>Know More</button>
            </div>
            {/* editor banner */}
            <div className="banner-editor">
                <h1>From the <span>editor's</span> desk</h1>
                <p>
                “Kintsugi or Kintsukuroi (“golden joinery”) is the centuries-old Japanese art of putting broken pottery pieces back together with golden adhesive that enhances the break lines, thus making the piece unique.” Having scars or being broken isn’t shameful. When we embrace the beauty of improving imperfections, we create an even stronger, resilient, and the most stunning version of ourselves. Acceptance and Improvisation is the art everyone must master. Life is going to be tough and you might fall, but the beauty is in standing up and never giving up.
                </p>
                <p>
                By understanding, and embracing our fellow students’ interests we aim to build stronger and lasting impressions that will multiply in terms of readers and contributors. Our writers are ready to take you on a new expedition through the Open Letter, Fiction, ‘Tech’ It Easy, Connections, and Writer’s Lounge. Get to know the various events taking place in the university through the DDU Buzz. Also for the creative minds of our university, we are soon bringing back our art-related page named ‘Artistic Visions’. We, as always, await your stories of adventures and experiences at <span>dduconnect@gmail.com.</span> 
                </p>
                <p className='writer'>
                Muskan Vora <br />
                Editor-in-Chief
                </p>
            </div>   
        </>
    )
}

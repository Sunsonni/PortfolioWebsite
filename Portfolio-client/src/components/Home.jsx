import '../App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <>
         <div className='home-content'>
            <div className='marquee-container'>
                <h1 className='marquee'>Welcome to my website : )</h1>
            </div>
            <div className='body-items'>
            <img className='sunset' src='/Sunset over water.JPG' alt='Sunset over water' title='This is a photo I took a few years back in Florida'/>
            <div className='column'>
                <p className='blurb' >
                    Hello internet!  <br />
                    My name is Sonnie (pronounced Sonny) and I am a junior software engineer based in Saint Louis. Feel free to click all the things on my site. 
                    <br/><br/>
                    <Link className='text-links' to='/Projects'>Click here if you want to hear about the projects I'm working on</Link>
                    <br/>
                    <Link to='/About' className='text-links'
                    >Click here if you want to hear more about me :)</Link>
                    <br /><br />
                    Here are some songs that have been on repeat in my brain and my car. 
                </p>
                <iframe style={{borderRadius: '0px'}} src="https://open.spotify.com/embed/playlist/35cyhs5E8yGjcI4Vua6Uiu?utm_source=generator&theme=0" width="90%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            </div>
        </div>
        </>
    );
}

export default Home;
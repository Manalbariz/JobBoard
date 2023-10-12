import BgImg from '../assets/HomeImgs/BgImg.jpeg'

const Home = () => {
    return (
   
            <div className='BgHome' style={{ backgroundImage: `url(${BgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity:1}}>
                <h1 className="bigtitle">Trouvez exactement ce que vous cherchez</h1>
                <p className="intro">Nous sommes là pour vous fournir la plus haute qualité de service</p>
                <button className="commencerBtt">Commencer</button>
            </div>
    
    )
}

export default Home
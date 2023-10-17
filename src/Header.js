import './App.css';



  function Header() {

    return (
        <div>
            <header class="container">
                <div class="content">
                    <span class="blur"></span> 
                    <span class="blur"></span>
                        <h4>CREATE YOUR SITE LIKE A PRO</h4>  
                        <h1>Hi, I'm <span>Filippi</span>, Web Developer</h1> 
                        <p id="description">
                            Passionate Frontend Developer | Carfting Exceptional User Experiences | 
                            Work with Javascript & React | Transforming Visions into Interactive Digital Solutions |
                            Let's Elevate Your Website to the Next Level!
                        </p>
                        <button class="btn" id="linkGetInTouch2">Get Stated</button>
                </div>
                    
                <div class="image">
                    <img src="Images/header.png"></img>
                </div>
            </header>
        </div>
    );
  };




export default Header;

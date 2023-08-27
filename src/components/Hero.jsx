import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center 
        w-full mb-10 pt-3">
            <img src={logo} alt="sumzlogo"
              className="w-28 object-contain"  
            />

            <button
               type="button"
               onClick={()=> window.open
               ('https://github.com/VimalChandran777')}
            className='black_btn'
            >
                Github
            </button>
        </nav>  

        <h1 className="head_text">
            Summarize Articles with
            <br className="max-md:hidden"/>
            <span className="orange_gradient">
            OpenAI Gpt-4
                
            </span>
        </h1>

        <h2 className="desc">
                Simplfy your reading with summarize,an
                open-source article summarize 
                that transform lengthy articles into
                clear and concise summarizes
        </h2>
    </header>
  )
}

export default Hero
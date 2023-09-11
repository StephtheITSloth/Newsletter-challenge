import './App.css';
import {useState} from 'react'
import {ReactComponent as SVG} from './illustration-sign-up-desktop.svg'

function App() {
  const [email, setEmail] = useState("")
  const [isError, setIsError] = useState(false)

  const handleEmail =(e) => {
    e.preventDefault()
    if(email.split("").includes('@')){

      return(
        <div>Thank You</div>
      )
    }else{
      setIsError(true)
      return(
        <div>Error</div>
      )
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="content">
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p> 
          <div className="product_selling-points">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg><h5>Product discovery and building what matters</h5></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg><h5>Measuring to ensure updates are a success</h5></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg><h5>And much more!</h5></div>
          </div>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <button type='submit' onClick={handleEmail}>Subscribe to montly newsletter</button>
          </form>
        </div>
        <div className="image-container">
        <SVG />
        </div>
  {/*
<!-- Success message start -->

Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription.

Dismiss message

<!-- Success message end -->

<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div> */}
      </div>
    </div>
  );
}

export default App;

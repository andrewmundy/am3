import React, { useState, useEffect } from 'react'
import { styles } from './helpers'

const Contact = props => {
  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setSize({
      width: vw, 
      height: window.screen.height
    })
  }, [])

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [size, setSize] = useState({
    height:0,
    width:0
  })

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: '',
    sent: null,
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
    } else {
      setStatus({
        submitted:false,
        submitting:false,
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
  const math = (coord, size) => {
    const halfWidth = (size/2)
    
    const result = coord < halfWidth ? 
      Math.floor(halfWidth-coord)/80 : 
      Math.floor(halfWidth-coord)/80 ;

    return result
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="contact">
          Contact
        </h1>
        <div className="inputs__name">
          <input
            id="name"
            type="name"
            onChange={handleOnChange}
            required
            placeholder="name"
            value={inputs.name}
            className="inputs__name--name"
          />
          <input
            id="email"
            type="email"
            onChange={handleOnChange}
            required
            placeholder="email"
            value={inputs.email}
            className="inputs__name--email"
            />
        </div>
        <textarea
          placeholder="message"
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting} 
          style={status.submitted ? {background:styles().green, color:"black"}:{background:"white"}}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Send'
              : 'Sent 🎉'
            : 'Sendeding...'}
        </button>
      </form>
      <style jsx>{`
        .container{
          height: 80vh;
          padding: 5rem; 
          background:black;
        }
        .container form{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction:column;
        }
        .container form * {
          border:none;
        }
        
        .contact {
          font-size: 100px;
          text-shadow: ${math(props.client.x, size.width)}px ${math(props.client.y, size.height)}px 0 white;
          margin: 0;
        }

        input, textarea, button{
          font-size:20px;
          color:black;
          font-family: "MintGrotesk-Medium";
          box-sizing:border-box;
          padding:10px;
          background:white;
        }

        .inputs__name, textarea, button {
          width: 500px;
        }
        input, textarea, button{
          transition:background 0.05s;
          color:black;
          
        }
        input::placeholder, textarea::placeholder{
          color:black;
          font-family: "MintGrotesk-Medium";
          opacity:1;
        }
        .inputs__name {
          display:flex;
          justify-content:space-between;
          margin-bottom:10px;
        }
        .inputs__name input {
          height:50px;
          width:245px;
        }
        input:not(output):-moz-ui-invalid {
          box-shadow: none;
        }

      
        .inputs__name--name:focus, .inputs__name--name:valid{
          background:${styles().blue};
        }

        .inputs__name--email:focus, .inputs__name--email:valid{
          background:${styles().yellow};
        }
        textarea:focus, textarea:valid{
          background:${styles().pink};
        }
        button:focus{
          background:${styles().green};
        }
        textarea {
          width: 500px;
          height: 100px;
          margin-bottom:10px
        }
        button {
          border:none;
          height: 50px;
          width: 500px;
          cursor:pointer;
        }

        @media (max-width: 700px) {
          .inputs__name, textarea, button {
            width: calc(100vw - 20px);
            font-size: 16px;
          }
          button {
            height: 40px;
          }
          .inputs__name input {
            width: calc(50% - 5px);
            height: 40px;
            font-size: 16px;
          }
          .contact {
            font-size:80px;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact;
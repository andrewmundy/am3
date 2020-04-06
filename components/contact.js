import React, { useState } from 'react'

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        name: '',
        message: ''
      })
    } else {
      setStatus({
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

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
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
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
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
        input, textarea, button{
          font-size:20px;
          color:black;
          font-family: "MintGrotesk-Medium";
          box-sizing:border-box;
          padding:10px;
          background:white;
        }
        input, textarea, button{
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
          width:500px;
        }
        .inputs__name input {
          height:50px;
          width:245px;
        }
        .inputs__name--name:hover, inputs__name--name:active{
          background:salmon;
        }
        .inputs__name--email:hover{
          background:blue;
        }
        textarea:hover{
          background:yellow;
        }
        button:hover{
          background:green;
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
      `}</style>
    </div>
  )
}

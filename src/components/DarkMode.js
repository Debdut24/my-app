import React, {useState} from 'react';


export default function DarkMode() {
    let [newStyle, setNewStyle] = useState({
      color:"black",
      backgroundColor:"white"
    });
 
    const changeMode = ()=>{
        newStyle.color ==='black'?setNewStyle({
          color:"white",
          backgroundColor:"black"
        }):
        setNewStyle({
          color:"black",
          backgroundColor:"white"
        })
      };

  return (
    <div>
      <div className="container my-3 py-3 rounded" style={newStyle}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <button type="button" className="btn btn-primary my-2" onClick={changeMode}>{newStyle.color==='black'?"Enable Dark Mode":"Disable Dark Mode"}</button>
      </div>
    </div>
  )
}

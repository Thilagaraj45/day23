import './App.css';
import React from 'react';

function App() {
  return (

    <div className="App">

      <Details
        sub="Free"
        amount="$0/month"
        det1="✔ Single User"
        det2="✔ 5GB Storage"
        det3="✔ Unlimited Public Projects"
        det4="✔ Community Access"
        det5="✔ Unlimited Private Projects"
        det6="✔ Dedicated Phone Support"
        det7="❌ Free Subdomain"
        det8="❌ Monthly Status Reports"

      />
      <Details
        sub="Plus"
        amount="$9/month"
        det1="✔ Single User"
        det2="✔ 5GB Storage"
        det3="✔ Unlimited Public Projects"
        det4="✔ Community Access"
        det5="✔ Unlimited Private Projects"
        det6="✔ Dedicated Phone Support"
        det7="✔ Free Subdomain"
        det8="❌ Monthly Status Reports"

      />
      <Details
        sub="Pro"
        amount="$99/month"
        det1="✔ Single User"
        det2="✔ 5GB Storage"
        det3="✔ Unlimited Public Projects"
        det4="✔ Community Access"
        det5="✔ Unlimited Private Projects"
        det6="✔ Dedicated Phone Support"
        det7="✔ Free Subdomain"
        det8="✔ Monthly Status Reports"

      />


    </div>

  );
}

export default App;

function Details(props) {
  return (
    <div className="card">
      <span className='Subs'>{props.sub}</span>
      <h1>{props.amount}</h1>
      <ul type="none">
        <li>{props.det1}</li>
        <li>{props.det2}</li>
        <li>{props.det3}</li>
        <li>{props.det4}</li>
        <li>{props.det5}</li>
        <li>{props.det6}</li>
        <li>{props.det7}</li>
        <li>{props.det8}</li>
      </ul>
      <span>
        <button>Buy Now</button></span>
    </div>
  );
}


  // return React.createElement("div", {id :"div-name", className:"div-class"}, 
  // React.createElement("h2", {className: "name"}, "Hello Guvi"))

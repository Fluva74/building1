import React from 'react'
import "./quote.css";

export default function Quote() {
  return (
      <div className="quote">
          <div className="quote-title">
              <h3>
              History of the Margarita
              </h3>
          </div>
          <div className="quote-container">
          <div className="quote-visual">
              <img src="https://images.unsplash.com/photo-1544145945-b4744b209fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFyZ2FyaXRhfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="quote-image" />
          </div>
          <div className="quote-content">
              <div className="quote-text">
              The first known publication of a margarita recipe was in the December 1953 issue of Esquire, with a recipe calling for an ounce of tequila, a dash of triple sec and the juice of half a lime or lemon. A recipe for a tequila-based cocktail first appeared in the 1930 book My New Cocktail Book by G. F. Steele. Without noting a specific recipe or inventor, a drink called the Tequila Daisy was mentioned in the Syracuse Herald as early as 1936. Margarita is Spanish for Daisy, which is a nickname for Margaret.
              </div>
              <button className="btn"><a className="quote-link" href="#!">Learn More</a></button>
          </div>

          </div>
       
      </div>
  )
}

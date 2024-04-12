import React from 'react'

const Footer = () => {
  let footerStyle = {
    position : "relative",
    top : "10px",
    width : "100%"
  }
  return (
    <div className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">
        Copyright &copy: TodosList
      </p>
    </div>
 
)}

export default Footer

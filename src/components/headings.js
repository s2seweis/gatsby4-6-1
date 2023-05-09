import React from "react"

const Headings = ({ title, description }) => {
  // console.log(title);
  return (
    <header style={{}} className="container mt-8">
      <h1 className="text-6xl font-bold text-neutral-700"
      style={{ textAlign:"center" }}>{title}</h1>
      {description && (
        <p className="mt-4 text-2xl text-neutral-500">{description}</p>
      )}
    </header>
  )
}

export default Headings

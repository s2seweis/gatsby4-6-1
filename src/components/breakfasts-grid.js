import React from "react"
import BreakfastCard from "./breakfast-card"

const BreakfastsGrid = ({ breakfasts }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {breakfasts.map((breakfast) => (
        <BreakfastCard breakfast={breakfast} />
      ))}
    </div>
  )
}

export default BreakfastsGrid

import React from 'react'
interface CardContent {
    title:string;
    description:string;
}
const Card = ({title,description}:CardContent) => {
  return (
    <div style={{
        flex: 1,
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(10,11,164,0.15))",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
      }}>

      <h3 style={{
          fontFamily: "var(--font-manrope)",
          fontWeight: 600,
          fontSize: "28px",
          color: "#FFFFFF",
          textTransform: "uppercase",
          lineHeight: "100%",
          textAlign: "center",
        }}>
        {title}
      </h3>
      
      <p style={{
          fontFamily: "var(--font-roboto)",
          fontWeight: 400,
          fontSize: "24px",
          color: "#D2D2D2",
          lineHeight: "144%",
        }}>
        {description}
      </p>
    </div>
  )
}

export default Card;
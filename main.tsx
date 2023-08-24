import React from "react"
import ReactDom from "react-dom/client"
import App from "@/components/App"
const baseElement = document.querySelector("#App") as HTMLDivElement
console.log("133123")
const root = ReactDom.createRoot(baseElement)
root.render(
    <App />
)

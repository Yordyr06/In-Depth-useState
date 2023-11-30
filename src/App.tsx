import React from "react"
import { UseState } from "./components/UseState"
import { ClassState } from "./components/ClassState"

export const App = (): JSX.Element => {
  return (
    <>
      <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-white">
        My App
      </h1>

      <UseState />
      <ClassState />
    </>
  )
}

export default App
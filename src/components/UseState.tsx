import React from "react";

export const UseState = (): JSX.Element => {
  return (
    <section className="flex flex-col mx-auto items-center my-8 w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2>Eliminate UseState</h2>
        <p>Please, write the correct code to continue</p>
      </article>
      <form 
        action=""
        className="flex gap-x-24"  
        >
        <input 
          placeholder="code"
          className="h-8 rounded-md text-center align-middle"
        />
        <button
          className="w-20 rounded-md align-middle text-center bg-slate-700"  
        >
          match
        </button>
      </form>
    </section>
  )
};
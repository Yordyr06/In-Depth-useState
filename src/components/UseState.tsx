import { useState } from "react";
import type { MouseEvent } from "react";

type Props = {
  name: string
};

export const UseState = ({ name }: Props ): JSX.Element => {
  const [error, setError] = useState<boolean>(false)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setError(!error)
  }

  return (
    <section className="flex flex-col mx-auto items-center my-8 h-auto w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2>Eliminate {name}</h2>
        <p>Please, write the correct code to continue</p>
        {
          error ? (
            <p className="text-lg font-bold text-red-500"> ❌ Invalid code </p>
          ) : ("")
        }
      </article>
      <form 
        action=""
        className="flex gap-x-20 text-lg"  
        >
        <input 
          placeholder="code"
          className="h-8 rounded-md text-center align-middle"
        />
        <button
          onClick={handleClick}
          className="w-20 rounded-md align-middle text-center bg-slate-700"  
        >
          match
        </button>
      </form>
    </section>
  )
};
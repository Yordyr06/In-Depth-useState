import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

type Props = {
  name: string
};

export const UseState = ({ name }: Props ): JSX.Element => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    isLoading ? (
      setTimeout(() => {
        setIsLoading(false)
        setIsError(isError => !isError)
      }, 3000)
    ) : ("")
  }, [isLoading]);

  return (
    <section className="flex flex-col mx-auto items-center my-8 h-auto w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2>Eliminate {name}</h2>
        <p>Please, write the correct code to continue</p>
        
        {isError ? (
            <span className="text-lg font-bold text-red-500"> ❌ Invalid code </span>
          ) : ("")}
        
        {isLoading ? (
            <span className="text-lg font-bold">Loading ...</span>
          ) : ("")}

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

// Sistema de recepcion hotelera con mineria de datos
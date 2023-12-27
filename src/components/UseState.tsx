import { useEffect, useState } from "react";
import type { ChangeEvent, MouseEvent, } from "react";

type Props = {
  name: string
};

const SECURITY_CODE: string = 'paradigma'

export const UseState = ({ name }: Props ): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
  }

  useEffect(() => {
    isLoading ? (
      setTimeout(() => {
        value !== SECURITY_CODE ? (
          setIsError(isError => !isError)
        ) : ("")
        setIsLoading(false)
      }, 3000)
    ) : ("")
  }, [isLoading, value]);

  return (
    <section className="flex flex-col mx-auto items-center my-8 h-auto w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2 className="text-2xl p-2 font-semibold">Eliminate {name}</h2>
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
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
          }}
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
6
// Sistema de recepcion hotelera con mineria de datos
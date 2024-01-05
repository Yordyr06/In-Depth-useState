import { useEffect, useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

type Props = {
  name: string;
};

type State = {
  value: string;
  isError: boolean;
  isLoading: boolean;
};

const SECURITY_CODE: string = 'paradigma';

export const UseState = ({ name }: Props): JSX.Element => {
  const [state, setState] = useState<State>({
    value: '',
    isError: false,
    isLoading: false
  });

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (state.isLoading) {
        await new Promise(resolve => setTimeout(resolve, 3000));

        if (state.value !== SECURITY_CODE) {
          setState({ ...state, isError: true, isLoading: false });
        } else {
          setState({ ...state, isLoading: false });
        }
      }
    };

    fetchData();
  }, [state]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setState({ ...state, isLoading: true, isError: false });
  };

  return (
    <section className="flex flex-col mx-auto items-center my-8 h-auto w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2 className="text-2xl p-2 font-semibold">Eliminate {name}</h2>
        <p>Please, write the correct code to continue</p>

        {state.isError ? (
          <span className="text-lg font-bold text-red-500"> ❌ Invalid code </span>
        ) : null}

        {/* {!state.isError ? (
          <span className="text-lg font-bold text-green-500"> ✅ Valid code </span>
        ) : null} */}

        {state.isLoading ? (
          <span className="text-lg font-bold">Loading ...</span>
        ) : null}

      </article>
      <form action="" className="flex gap-x-20 text-lg">
        <input
          value={state.value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, value: event.target.value })
          }
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
  );
};
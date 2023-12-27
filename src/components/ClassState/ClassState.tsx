import { Component } from "react";
import { IsError } from "./IsError";
import { IsLoading } from "./IsLoading";
import type { MouseEvent } from "react";

type Props = {
  name: string
}

type State = {
  isError: boolean,
  isLoading: boolean
}

export class ClassState extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isError: false,
      isLoading: false,
    };
  }

  handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.setState((prevState) => ({ 
      isError: !prevState.isError,
      isLoading: true,
    }));
  };  

  componentDidUpdate(): void {
    this.state.isLoading ? (
      setTimeout(() => {
        this.setState((prevState) => ({
          isLoading: false,
          isError: !prevState.isError,
        }));
      }, 3000)
    ) : ("");
  }

  render() {
    const { name } = this.props;
    const { isError, isLoading } = this.state;

    return (
      <section className="flex flex-col mx-auto items-center my-8 w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2>Eliminate {name}</h2>
        <p>Please, write the correct code to continue</p>
        
        {isError ? (
            <IsError />
          ) : ("")}
        
        {isLoading ? (
          <IsLoading />
        ) : ("")}
      </article>
      <form 
        action=""
        className="text-lg flex gap-x-20"  
        >
        <input 
          placeholder="code"
          className="h-8 rounded-md text-center align-middle"
        />
        <button
          onClick={this.handleClick}
          className="w-20 rounded-md align-middle text-center bg-slate-700"  
        >
          match
        </button>
      </form>
    </section>
    );
  }
}
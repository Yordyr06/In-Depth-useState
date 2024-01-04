import { Component } from "react";
import { IsError } from "./IsError";
import { IsLoading } from "./IsLoading";
import type { MouseEvent, ChangeEvent } from "react";


type Props = {
  name: string
}

type State = {
  value: string,
  isError: boolean,
  isLoading: boolean,
}

const SECURITY_CODE: string = 'paradigma'

export class ClassState extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: "",
      isError: false,
      isLoading: false,
    };
  }

  handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.setState({ 
      isError: false,
      isLoading: true,
    });
  };  

  componentDidUpdate(): void {
    this.state.isLoading ? (
      setTimeout(() => {
        this.state.value !== SECURITY_CODE ? (
          this.setState((prevState) => ({
            isError: !prevState.isError,
          }))
        ) : ("")
        this.setState({ isLoading: false })
      }, 3000)
    ) : ("");
  }

  render() {
    const { name } = this.props;
    const { value, isError, isLoading } = this.state;

    return (
      <section className="flex flex-col mx-auto items-center my-8 w-96 text-center gap-y-4">
      <article className="text-lg py-2 px-4 rounded-md bg-slate-700">
        <h2 className="text-2xl p-2 font-semibold">Eliminate {name}</h2>
        <p>Please, write the correct code to continue</p>
        
        {isLoading ? (
          <IsLoading />
        ) : ("")}

        {isError ? (
            <IsError />
          ) : ("")}
        
      </article>
      <form 
        action=""
        className="text-lg flex gap-x-20"  
        >
        <input 
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            this.setState({ value: event.target.value })
          }}
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
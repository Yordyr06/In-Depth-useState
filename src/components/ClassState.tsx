import { Component } from "react";
import type { MouseEvent } from "react";

type Props = {
  name: string
}

type State = {
  error: boolean
}

export class ClassState extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.setState((prevState) => ({ error: !prevState.error }));
  };

  render() {
    const { name } = this.props;
    const { error } = this.state;

    return (
      <section className="flex flex-col mx-auto items-center my-8 w-96 text-center gap-y-4">
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
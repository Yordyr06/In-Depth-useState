import { Component } from "react";

export class IsLoading extends Component {
  componentWillUnmount(): void {}
  
  render() {
    return (
      <span className="text-lg font-bold">Loading ...</span>
    ) 
  }
}
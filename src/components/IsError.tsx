import { Component } from "react";

export class IsError extends Component {
  componentWillUnmount(): void {}
  
  render() {
    return (
      <span className="text-lg font-bold text-red-500"> ❌ Invalid code </span>
    ) 
  }
}
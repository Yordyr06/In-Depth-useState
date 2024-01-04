import { Component } from "react";

export class IsValid extends Component {
  componentWillUnmount(): void {}
  
  render() {
    return (
      <span className="text-lg font-bold text-green-500"> ✅ Valid code </span>
    ) 
  }
}
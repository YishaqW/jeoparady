import { useState, useEffect } from "react";
import GetQuestion from "./GetQuestion";
// import react from "react";

const Get10Question = (props) => {
  let i=1;
 while (i<=10) {
	 GetQuestion()
   i++
}

export default Get10Questions;
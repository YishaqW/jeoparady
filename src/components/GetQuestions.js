import { useState, useEffect } from "react";
// import react from "react";

const GetQuestion = (props) => {
  const url = "https://jservice.io/api/random";

  //state to hold the coin data
  const [question, setQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);

  const [score, setScore] = useState(0);

  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data) {
        setQuestion(data);
      }
      setTextHidden("false");
      // showQuestion()
      console.log();
    } catch (e) {
      console.error(e);
    }
  };

  const get10Questions = async () => {
    try {
      const response = await fetch("https://jservice.io/api/random?count=10");
      const data = await response.json();
      console.log(data);

      if (data) {
        setQuestions(data);
      }

      // showQuestion()
      console.log();
    } catch (e) {
      console.error(e);
    }
  };

  const handleIncrease = () => {
    setScore(score + question[0].value);
  };

  const handleDecrease = () => {
    setScore(score - question[0].value);
  };

  const handleReset = () => {
    setScore(0);
  };

  const dailyDouble = (event) => [
    (question[0].value = +event.target.value),
    console.log(event.target.valueAsNumber),
  ];

  const [isTextHidden, setTextHidden] = useState(true);

  const onClick = () => setTextHidden(!isTextHidden);
  const onClicks= () => setTextHidden(!isTextHidden);

  const Text = () => <div>Answer: {question[0].answer}</div>;

  const targetDiv = document.querySelector("answertoggle");
  
  return (
    <div>
      <h1>Score: {score}</h1>
      <button className="increase" onClick={handleIncrease}>
        Increase
      </button>
      <button className="decrease" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <br />
      <br />
      <br />
      <button onClick={getQuestion} className="getquestion">
        Get Question
      </button>
      <br />
      <br />
      <h2 className="question">
        {question == null ? "" : question[0].question}
      </h2>
      <h2 className="category fade-in">
        Category:{" "}
        <span className="categoryTitle">
          {question == null ? "" : question[0].category.title}
        </span>
      </h2>
      <h3 className="point fade-in">
        Point Value:{" "}
        {question == null ? (
          ""
        ) : question[0].value == null ? (
          <h1 className="double fade-in">
            "Daily Double!!"
            <br />
            <input type="number" onClick={dailyDouble} />
          </h1>
        ) : (
          question[0].value
        )}
      </h3>
      <h2 className="answer fade-in">{!isTextHidden ? <Text /> : null}</h2>
      {/* <h2 className="answerTitle fade-in">Answer: </h2> */}
      <button className="showAnswer" onClick={onClick}>
        {isTextHidden ? "Show Answer" : "Hide Answer"}
      </button>
      <br />
      <br />
      <br />
      <br />

      {/* 10 questions */}
      {/* <button onClick={get10Questions}>Get 10 Questions</button> */}

      {questions == null
        ? ""
        : questions.map((q, idx) => {
            const { question, answer, value, category } = q;
            return (
              <>
              <div key={idx}>
                <h2>Question #{idx + 1}</h2>
                <h2>{question == null ? "" : question}</h2>
                <h2 className="category">
                  Category:{" "}
                  <span className="categoryTitle">
                    {question == null ? "" : category.title}
                  </span>
                </h2>
                <h3 className="point">
                  Point Value: {question == null ? "" : value}
                </h3>
                <h2 className="answer">{!isTextHidden ? answer : null}</h2>
                {question == null ? (
                  ""
                ) : (
                  <h2 className="" id="answertoggle">
                    {answer}
                  </h2>
                )}{" "}
                <br />
                <br />
                <br />
                <button className="showAnswer" id="toggle" onClick={onClicks}>
                  {isTextHidden? "Show Answer" : "Hide Answer"}
                </button>
                </div>
              </>
            );
          })}
    </div>
  );
};

export default GetQuestion;
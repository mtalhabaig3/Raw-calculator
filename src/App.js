import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Photo from "./components/Photo";

const App = () => {
  const [result, setResult] = useState(" ");

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };
  let InfixToPostFix = (infix) => {
    let ops = { "+": 1, "-": 1, "*": 2, "/": 2 };
    let ops2 = ["+", "-", "(", ")", "*", "/"];
    let peek = (a) => a[a.length - 1];
    let stack = [];

    for (var i = 0; i < ops2.length; i++) {
      var rg = new RegExp("\\" + ops2[i], "g");
      infix = infix.replace(rg, " " + ops2[i] + " ");
    }

    return infix
      .split(" ")
      .reduce((output, token) => {
        if (parseFloat(token)) {
          output.push(token);
        }

        if (token in ops) {
          while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
            output.push(stack.pop());
          stack.push(token);
        }

        if (token === "(") {
          stack.push(token);
        }

        if (token === ")") {
          while (peek(stack) !== "(") output.push(stack.pop());
          stack.pop();
        }

        return output;
      }, [])
      .concat(stack.reverse())
      .join(" ");
  };

  const postFixEval = (postfixArray) => {
    let infix_array = [];
    let count = 0;

    for (let index = 0; index < postfixArray.length; index++) {
      if (postfixArray[index] === " ") {
        infix_array.push(postfixArray.slice(count, index));
        count = index + 1;
      }
      if (index === postfixArray.length - 1) {
        infix_array.push(postfixArray.slice(count, index + 1));
      }
    }

    var stack = [];

    for (const element of infix_array) {
      if (isNaN(element)) {
        var x = stack.pop();
        var y = stack.pop();
        switch (element) {
          case "+":
            stack.push(y + x);
            break;
          case "-":
            stack.push(y - x);
            break;
          case "*":
            stack.push(y * x);
            break;
          case "/":
            stack.push(y / x);
            break;
          default:
        }
      } else {
        if (element !== " ") {
          stack.push(parseFloat(element));
        }
      }
    }
    //final check for non numbers within the stack
    var returnValue = null;
    while (stack.length > 0) {
      var element = stack.pop();
      if (isNaN(element)) {
        continue;
      } else {
        returnValue = element;
      }
    }
    return returnValue;
  };

  const equateExpression = (expression) => {
    let post_expression = InfixToPostFix(expression);
    var result = postFixEval(post_expression);
    if (result == null) {
      alert(
        "Enter a valid equation to solve! (Press: 'Ctrl + Backspace', to Delete Everything )"
      );
    }
    return result;
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult((equateExpression(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div>
      <div className="calculator-body container my-3">
        <Photo />
        <h1
          className="my - 3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Term Calculator
        </h1>
        <Calculator onClick={onClick} result={result} />
      </div>
    </div>
  );
};

export default App;

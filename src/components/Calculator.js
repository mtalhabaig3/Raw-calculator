import React from "react";

const Calculator = ({ onClick, result }) => {
  return (
    <>
      <div
        name="button"
        className="container"
        style={{
          flex: 1,
          border: "5px solid black",
          width: 288,
          borderRadius: 30,
          backgroundColor: "black",
        }}
      >
        <div className="row" style={{ height: 85 }}>
          <p
            style={{
              fontSize: 40,
              borderBottom: "5px solid black",
              borderRadius: 2,
              color: "white",
              // borderColor: "black",
            }}
          >
            {result}
          </p>
        </div>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="("
          style={{
            width: 55,
            height: 55,
            backgroundColor: "#a0a0a0",
            borderColor: "#a0a0a0",
            color: "black",
            borderRadius: 55,
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          (
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name=")"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#a0a0a0",
            borderColor: "#a0a0a0",
            color: "black",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          )
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="C"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#a0a0a0",
            borderColor: "#a0a0a0",
            color: "black",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          C
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="/"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#f69906",
            borderColor: "#f69906",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          ÷
        </button>
        <br />

        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="1"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          1
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="2"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          2
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="3"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          3
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="*"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#f69906",
            borderColor: "#f69906",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          *
        </button>
        <br />

        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="4"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          4
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="5"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          5
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="6"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          6
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="-"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#f69906",
            borderColor: "#f69906",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          -
        </button>
        <br />

        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="7"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          7
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="8"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          8
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="9"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          9
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="+"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#f69906",
            borderColor: "#f69906",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          +
        </button>
        <br />

        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="CE"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#a0a0a0",
            borderColor: "#a0a0a0",
            color: "black",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          CE
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="0"
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          0
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="."
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#313131",
            borderColor: "#313131",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          .
        </button>
        <button
          className="btn btn-dark btn-lg mx-1 my-1"
          name="="
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: "#f69906",
            borderColor: "#f69906",
          }}
          onClick={(e) => onClick(e.target.name)}
        >
          =
        </button>

        <br />
      </div>
    </>
  );
};

export default Calculator;

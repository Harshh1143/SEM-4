import { useReducer } from "react";

const initialState = {
  number1: "",
  number2: "",
  result: 0,
  operation: "Addition",
  error: "",
};

function calculatorReducer(state, action) {
  if (action.type === "changeInput") {
    return {
      ...state,
      [action.name]: action.value,
      error: "",
    };
  }

  if (action.type === "calculate") {
    const n1 = Number(state.number1);
    const n2 = Number(state.number2);

    if (state.number1 === "" || state.number2 === "") {
      return {
        ...state,
        error: "Please enter both numbers.",
      };
    }

    if (action.operation === "Division" && n2 === 0) {
      return {
        ...state,
        operation: action.operation,
        error: "Cannot divide by zero.",
      };
    }

    let result = 0;

    if (action.operation === "Addition") {
      result = n1 + n2;
    } else if (action.operation === "Subtraction") {
      result = n1 - n2;
    } else if (action.operation === "Multiplication") {
      result = n1 * n2;
    } else if (action.operation === "Division") {
      result = n1 / n2;
    }

    return {
      ...state,
      result,
      operation: action.operation,
      error: "",
    };
  }

  if (action.type === "reset") {
    return initialState;
  }

  return state;
}

const operations = ["Addition", "Subtraction", "Multiplication", "Division"];

export default function UR2() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <main style={styles.wrapper}>
      <section style={styles.card}>
        <p style={styles.eyebrow}>useReducer Task</p>
        <h1 style={styles.title}>Calculator</h1>

        <div style={styles.inputGrid}>
          <label style={styles.label}>
            Number 1
            <input
              style={styles.input}
              type="number"
              name="number1"
              value={state.number1}
              onChange={(e) =>
                dispatch({
                  type: "changeInput",
                  name: e.target.name,
                  value: e.target.value,
                })
              }
              placeholder="Enter first number"
            />
          </label>

          <label style={styles.label}>
            Number 2
            <input
              style={styles.input}
              type="number"
              name="number2"
              value={state.number2}
              onChange={(e) =>
                dispatch({
                  type: "changeInput",
                  name: e.target.name,
                  value: e.target.value,
                })
              }
              placeholder="Enter second number"
            />
          </label>
        </div>

        <div style={styles.buttonGrid}>
          {operations.map((operation) => (
            <button
              key={operation}
              type="button"
              style={{
                ...styles.button,
                ...(state.operation === operation ? styles.activeButton : {}),
              }}
              onClick={() => dispatch({ type: "calculate", operation })}
            >
              {operation}
            </button>
          ))}
        </div>

        <div style={styles.resultBox}>
          <p style={styles.resultLabel}>{state.operation} Result</p>
          <h2 style={styles.result}>{state.error ? "--" : state.result}</h2>
          {state.error && <p style={styles.error}>{state.error}</p>}
        </div>

        <button
          type="button"
          style={styles.resetButton}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </section>
    </main>
  );
}

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 96px)",
    display: "grid",
    placeItems: "center",
    padding: "42px 18px",
    color: "#f8fafc",
    boxSizing: "border-box",
  },

  card: {
    width: "min(680px, 100%)",
    padding: "28px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.11)",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxSizing: "border-box",
    textAlign: "left",
  },

  eyebrow: {
    margin: "0 0 8px",
    color: "#86efac",
    fontSize: "13px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0",
  },

  title: {
    margin: "0 0 24px",
    color: "#ffffff",
    fontSize: "38px",
    lineHeight: 1.1,
    fontWeight: "900",
    letterSpacing: "0",
  },

  inputGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "18px",
  },

  label: {
    display: "grid",
    gap: "8px",
    color: "rgba(248, 250, 252, 0.82)",
    fontSize: "14px",
    fontWeight: "800",
  },

  input: {
    width: "100%",
    minHeight: "48px",
    boxSizing: "border-box",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    padding: "12px 14px",
    background: "rgba(15, 23, 42, 0.64)",
    color: "#ffffff",
    outline: "none",
    fontSize: "16px",
    fontWeight: "700",
  },

  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
    margin: "18px 0",
  },

  button: {
    minHeight: "46px",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.12)",
    color: "#e2e8f0",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "900",
  },

  activeButton: {
    background: "linear-gradient(135deg, #22c55e, #f97316)",
    borderColor: "transparent",
    color: "#07111f",
  },

  resultBox: {
    marginTop: "18px",
    padding: "20px",
    borderRadius: "8px",
    background: "rgba(15, 23, 42, 0.58)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    textAlign: "center",
  },

  resultLabel: {
    margin: 0,
    color: "rgba(248, 250, 252, 0.7)",
    fontSize: "13px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0",
  },

  result: {
    margin: "8px 0",
    color: "#ffffff",
    fontSize: "50px",
    lineHeight: 1,
    fontWeight: "900",
    letterSpacing: "0",
  },

  error: {
    margin: "8px 0 0",
    color: "#fecaca",
    fontSize: "14px",
    fontWeight: "800",
  },

  resetButton: {
    width: "100%",
    minHeight: "44px",
    marginTop: "14px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "900",
  },
};

import React, { useEffect, useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("+");
    const [res, setRes] = useState(null);

    useEffect(() => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setRes("Enter valid numbers");
            return;
        }

        let result;
        switch (operation) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = b !== 0 ? a / b : "Cannot divide by zero"; break;
            default: result = "";
        }
        setRes(result);
    }, [num1, num2, operation]);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Simple Calculator</h2>
            <div style={styles.inputContainer}>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="First number"
                    style={styles.input}
                />
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    style={styles.select}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Second number"
                    style={styles.input}
                />
            </div>
            <div style={styles.result}>
                <strong>Result:</strong> {res}
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#f0f4f8',
        padding: '40px 20px',
        borderRadius: '12px',
        maxWidth: '400px',
        margin: '60px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    title: {
        marginBottom: '30px',
        fontSize: '28px',
        color: '#333',
    },
    inputContainer: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    input: {
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        width: '120px',
        fontSize: '16px',
    },
    select: {
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
        backgroundColor: '#fff',
    },
    result: {
        marginTop: '30px',
        fontSize: '20px',
        color: '#2c3e50',
    }
};

export default Calculator;

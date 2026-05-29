import {useState} from 'react'

const buttons = [
    {label:'Add',op:'add'},
    {label:'Sub',op:'sub'},
    {label:'Mul',op:'mul'},
    {label:'Div',op:'div'},
]

export default function Task7() {
    const [res,setRes] = useState(0)
    const [data,setData] = useState({n1:'',n2:''})

    function h1 (e) {
        const {name,value } = e.target
        setData({...data,[name]:value})
    }
    function calc(op) {
        const n1 = Number(data.n1)
        const n2 = Number(data.n2)
        if (op =='add') {
            setRes(n1+n2)
        }
        else if(op=='sub') {
            setRes(n1-n2)
        }
        else if(op=='mul') {
            setRes(n1*n2)
        }
        else if(op=='div') {
            setRes(n1/n2)
        }

    }
  return (
    <div style={styles.wrapper}>
        <form style={styles.card}>
            <div style={styles.header}>
                <p style={styles.eyebrow}>Task 7</p>
                <h1 style={styles.title}>Simple Calculator</h1>
            </div>

            <div style={styles.inputGrid}>
                <label style={styles.label}>
                    First Number
                    <input
                        style={styles.input}
                        type='number'
                        name='n1'
                        value={data.n1}
                        onChange={h1}
                        placeholder='Enter number'
                    ></input>
                </label>
                <label style={styles.label}>
                    Second Number
                    <input
                        style={styles.input}
                        type='number'
                        name='n2'
                        value={data.n2}
                        onChange={h1}
                        placeholder='Enter number'
                    ></input>
                </label>
            </div>

            <div style={styles.buttonGrid}>
                {buttons.map((button) => (
                    <button
                        key={button.op}
                        style={styles.button}
                        type='button'
                        onClick={() => calc(button.op)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>

            <div style={styles.resultBox}>
                <p style={styles.resultLabel}>Answer</p>
                <h2 style={styles.result}>{res}</h2>
                <p style={styles.expression}>
                    {data.n1 || '0'} & {data.n2 || '0'}
                </p>
            </div>
        </form>
    </div>
  )
}

const styles = {
    wrapper: {
        minHeight: 'calc(100vh - 96px)',
        display: 'grid',
        placeItems: 'center',
        padding: '42px 18px',
        color: '#f8fafc',
    },

    card: {
        width: 'min(620px, 100%)',
        padding: '28px',
        borderRadius: '22px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        boxShadow: '0 24px 70px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
    },

    header: {
        marginBottom: '24px',
    },

    eyebrow: {
        margin: '0 0 8px',
        color: '#86efac',
        fontSize: '13px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
    },

    title: {
        margin: 0,
        fontSize: '34px',
        lineHeight: 1.1,
        letterSpacing: '0',
    },

    inputGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '16px',
        marginBottom: '18px',
    },

    label: {
        display: 'grid',
        gap: '8px',
        color: 'rgba(248, 250, 252, 0.82)',
        fontSize: '14px',
        fontWeight: '700',
    },

    input: {
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '14px',
        padding: '14px 15px',
        background: 'rgba(15, 23, 42, 0.62)',
        color: '#ffffff',
        outline: 'none',
        fontSize: '18px',
        fontWeight: '700',
    },

    buttonGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '12px',
        margin: '18px 0',
    },

    button: {
        minHeight: '48px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#052e16',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '900',
        boxShadow: '0 12px 26px rgba(34, 197, 94, 0.22)',
    },

    resultBox: {
        marginTop: '18px',
        padding: '20px',
        borderRadius: '18px',
        background: 'rgba(15, 23, 42, 0.58)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        textAlign: 'center',
    },

    resultLabel: {
        margin: 0,
        color: 'rgba(248, 250, 252, 0.68)',
        fontSize: '14px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
    },

    result: {
        margin: '8px 0',
        color: '#ffffff',
        fontSize: '52px',
        lineHeight: 1,
        letterSpacing: '0',
    },

    expression: {
        margin: 0,
        color: '#bbf7d0',
        fontSize: '16px',
        fontWeight: '700',
    },
}

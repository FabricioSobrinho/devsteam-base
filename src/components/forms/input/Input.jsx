import styles from './Input.module.css'
import { useRef } from 'react'

function Input() {
    const input = useRef()
  return (
    <div className={styles.inputContainer}>
        <input type="text" placeholder="&#xF002;" ref={input} onClick={() => {
            input.current.style.borderBottom = 'solid 2px #1f1554'
        }}/>
    </div>
  )
}

export default Input
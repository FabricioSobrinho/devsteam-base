import styles from './Subtitle.module.css'

function Subtitle({children}) {
  return (
    <div className={styles.subtitle}>
        <h2>{children}</h2>
    </div>
  )
}

export default Subtitle
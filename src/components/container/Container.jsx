import styles from './Container.module.css'

function Container( {children, fullWidth} ) {
  return (
    <div  className={styles.container}>
        {children}
    </div>
  )
}

export default Container
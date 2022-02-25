import styles from './Submit.module.css'

const Submit = ({ text }) => {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default Submit
import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <img className={styles.loader} src={loading} alt='Loading' />
        </div>
    )
}

export default Loading
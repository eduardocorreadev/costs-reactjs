import {BsFillTrashFill} from 'react-icons/bs'

import styles from '../projects/ProjectCard.module.css'

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {

    function remove(e) {
        e.preventDefault()

        handleRemove(id, cost)
    }

    return (
        <div className={styles.projectCard}>  
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R$ {cost}
            </p>
            <p>{description}</p>
            <div className={styles.projectsCardActions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
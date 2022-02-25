import { useState } from 'react'

import Input from '../form/Input'
import Submit from '../form/Submit'

import styles from '../projects/ProjectForm.module.css'

const ServiceFrom = ({ handleSubmit, btnText, projectData }) => {

    const [service, setService] = useState({})


    function onSubmit(e) {
        e.preventDefault()

        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService( {...service, [e.target.name]: e.target.value} )
    }


    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />

            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira custo do serviço'
                handleOnChange={handleChange}
            />

            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />

            <Submit text={btnText} />
        </form>
    )
}

export default ServiceFrom
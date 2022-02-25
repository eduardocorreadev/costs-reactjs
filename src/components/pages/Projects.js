import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import Container  from '../layout/Container'
import LinkButton  from '../layout/LinkButton'
import ProjectCard from '../projects/ProjectCard'
import Loading from '../layout/Loading'

import styles from './Projects.module.css'

const Projects = () => {

    const location = useLocation()
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 500)    
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(() => {
            setProjects(projects.filter(project => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.projects_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}

            <Container customClass="start">
                {
                    projects.length > 0 && (
                        projects.map(project => (
                            <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProject} />
                        ))
                    )
                }

                {!removeLoading && <Loading />}
                {
                    removeLoading && projects.length === 0 && (
                        <>
                            <p>Não há projetos cadastrados</p>
                            <LinkButton to="/newproject" text="Criar Projeto" />
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default Projects
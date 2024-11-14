import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import style from './NewProject.module.css'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        
        // initialize cost and service  
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost}/>
        </div>
    )
}

export default NewProject
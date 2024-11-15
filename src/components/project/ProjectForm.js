import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'

function ProjectForm({handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e) {
        setProject({...project, 
        category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name"
            placeholder="Insira o nome do projeto."
            handleOnChange={handleChange}
            />
            <Input 
            type="number" 
            text="Orçamento do projeto" 
            name="budget"
            placeholder="Insira o orçamento total."
            handleOnChange={handleChange}
            />
            <Select 
            text="Selecione uma categoria" 
            name="category" 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <SubmitButton text="Criar"/>
        </form>
    )
}

export default ProjectForm
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={style.form}>
            <Input type="text" text="Nome do projeto" name="Nome do projeto"
            placeholder="Insira o nome do projeto."/>
            <Input type="number" text="Orçamento do projeto" name="Orçamento do projeto"
            placeholder="Insira o orçamento total."/>
            <Select text="Selecione uma categoria" name="category_id"/>
            <SubmitButton text="Criar"/>
        </form>
    )
}

export default ProjectForm
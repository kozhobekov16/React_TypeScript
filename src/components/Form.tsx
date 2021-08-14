import React, {useState} from 'react'

interface todoProps {
    addPost(title: string): void
}

export const Form: React.FC<todoProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const keyHandle = (e: React.KeyboardEvent) =>{
        if(e.key === 'Enter'){
            props.addPost(title)
            setTitle('')
        }
    }
    return (
        <div className="input-field col s6">
            <input onChange={changeHandler} value={title} onKeyPress={keyHandle} type="text" placeholder="Введите название дел" id="title" className="validate"/>
        </div>
    )
}

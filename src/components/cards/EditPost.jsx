import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useState } from "react";

import ControlledTextarea from '../inputs/ControlledTextearea'
import { createPostSchema } from '../../../modules/post/post.schema'
import Button from "../inputs/Button";

const EditPost = ({ id, text, onSave}) => {
    const { control, handleSubmit, formState: { isValid } } = useForm({
        resolver: joiResolver(createPostSchema),
        mode: 'all'
    })

const handleSaveEdit = (data) => {

}

    return (
        <form onSubmit={handleSubmit(handleSaveEdit)}>
            <ControlledTextearea
                placeholder="Digite sua mensagem"
                rows="4"
                control={control}
                name="text"
                maxlength="256"
                defaultValue={text}
            />
            <Button disabled={!isValid}>Salvar Alterações</Button>
        </form>
    )
}

export default EditPost
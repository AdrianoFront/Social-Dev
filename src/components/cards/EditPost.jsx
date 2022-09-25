import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import ControlledTextarea from '../inputs/ControlledTextearea'
import { createPostSchema } from '../../../modules/post/post.schema'

const EditPost = ({ id, text}) => {
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
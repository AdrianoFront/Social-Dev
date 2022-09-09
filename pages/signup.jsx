import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { userForm} from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from '../modules/user/user.schema'

import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typography/H1'
import H2 from '../src/components/typography/H2'
import H4 from '../src/components/typography/H4'
import Button from '../src/components/inputs/Button'
import Input from '../src/components/inputs/Input'


const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function SignupPage () {
  const { register, handleSubmit, formState: { errors} } = useForm({ 
    resolver: joiresolver(signupSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, acontece aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input label="Nome" {...register('firstName')} error={errors.firstName}/>
          <Input label="Sobrenome" {...register('LastName')} error={errors.lastName}/>
          <Input label="Usuário" {...register('user')} error={errors.user}/>
          <Input Label="Email" type="email" {...register('email')} error={errors.email}/>
          <Input Label="Senha" type="password" {...register('password')} error={errors.password}/>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/signup">Faça seu login</Link> </Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage
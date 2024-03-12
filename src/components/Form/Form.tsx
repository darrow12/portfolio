import { z } from 'zod'
import Button from '../Button/Button'
import { ErrorMessage, FormContainer, FormName, Input, InputContainer, StyledAlert, TextArea } from './Form.style'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react'

interface AlertState {
  type: 'success' | 'error' | 'info';
  message: string | null;
  active: boolean;
}

interface DataObject {
  name: string;
  email: string;
  message: string;
}

const messageSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  message: z.string()
    .min(1, 'A mensagem é obrigatória')
})

type MessageSchema = z.infer<typeof messageSchema>

export default function Form() {
  const [alert, setAlert] = useState<AlertState>({ type: 'info', message: null, active: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema)
  })

  const sendMessage = (data: DataObject) => {
    setIsSubmitting(true)

    const serviceId = 'service_krca5js'
    const templateId = 'template_szleugj'
    const publicKey = 'BaxZbPWBmBu7LgHZF'

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setAlert({type: 'success', message: 'E-mail enviado com sucesso!', active: true})
      })
      .catch(error => {
        console.error(error)
        setAlert({type: 'error', message: 'Erro ao enviar o e-mail. Tente novamente mais tarde.', active: true})
      })
      .finally(() => {
        setIsSubmitting(false)
      })

    reset()
  }

  useEffect(() => {
    if(alert.active) {
      setTimeout(() => {
        setAlert({type: 'info', message: null, active: false})
      }, 5000)
    }
  }, [alert.active])

  return (
    <FormContainer onSubmit={handleSubmit(sendMessage)} noValidate>
      {alert.active &&
        <StyledAlert severity={alert.type} variant='filled'>{alert.message}</StyledAlert>
      }
      <FormName>Enviar e-mail</FormName>
      <InputContainer>
        <Input autoComplete='off' {...register('name')} placeholder='Nome' type='text' $error={errors.name ? true : false} />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <Input autoComplete='off' {...register('email')} placeholder='E-mail' type='email' $error={errors.email ? true : false} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <TextArea autoComplete='off' {...register('message')} placeholder='Sua mensagem...' rows={6} $error={errors.message ? true : false} />
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
      </InputContainer>
      <Button submit={true} disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</Button>
    </FormContainer>
  )
}
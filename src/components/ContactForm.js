import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

const ContactForm = () => {
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { t } = useTranslation()

  const handleFormSubmit = async (data, e) => {
    e.preventDefault()
    const { email, phone, subject, message } = data
    setSendingEmail(true)

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        phone,
        subject,
        message,
      }),
    })

    if (res.ok) {
      setSendingEmail(false)
      setEmailSent(true)
      e.target.reset() // reset after form submit
    }
  }

return (
  <Form onSubmit={handleSubmit(handleFormSubmit)}>
    {/* Email */}
    <FormGroup>
      <Label><Trans>Email</Trans>:</Label>
      <Input
        type='text'
        {...register('email', {
          required: t('emailRequired'),
          pattern: {
            value:
              /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: t('emailInvalid')
          }
        })}
      />
      {errors.email && <Error>{errors.email.message}</Error>}
    </FormGroup>

    {/* Phone */}
    <FormGroup>
      <Label><Trans>Phone</Trans>:</Label>
      <Input
        type='tel'
        {...register('phone', {
          required: t('phoneRequired')
        })}
      />
      {errors.phone && <Error>{errors.phone.message}</Error>}
    </FormGroup>

    {/* Subject */}
    <FormGroup>
      <Label><Trans>Subject</Trans>:</Label>
      <Input
        type='text'
        {...register('subject', {
          required: t('subjectRequired')
        })}
      />
      {errors.subject && <Error>{errors.subject.message}</Error>}
    </FormGroup>

    {/* Message */}
    <FormGroup>
      <Label>Message:</Label>
      <Textarea
        {...register('message', {
          required: t('messageRequired')
        })}
        rows="10"
      ></Textarea>
      {errors.message && <Error>{errors.message.message}</Error>}
    </FormGroup>

    <Button type="submit">
      <Trans>Submit</Trans>
    </Button>

    <Disclaimer>
      * {t('disclaimer')}
    </Disclaimer>
  </Form >
)
}

export default ContactForm

//CSS
const Form = styled.form`
  background-color: var(--color-grey-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-m);
  border-radius: 10px;

  & > *:not(:last-child) {
    margin-bottom: var(--spacing-m);
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 600px;
`

const Label = styled.label`
  font-family: var(--font);
  font-weight: bold;
  color: var(--color-heading);
`

const baseInputs = css`
  outline: none;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  width: 100%;
  color: var(--color-text);
  padding: 0.5rem;
`

const Input = styled.input`
  ${baseInputs}
  height: 50px;
  position: relative;
  font-family: var(--font);
  font-size: 1rem;
`

const Textarea = styled.textarea`
  ${baseInputs}
`

const Error = styled.small`
  color: var(--color-error);
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--color-primary);
  text-transform: uppercase;
  color: var(--color-white);
  width: 100%;
  max-width: 600px;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  height: 50px;
  box-shadow: var(--box-shadow-btn);
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--color-primary-darker);
  }
`

const Disclaimer = styled.small`
  width: 100%;
  max-width: 600px;
  text-align: justify;
`
import { Button, FormGroup, InputGroup, Intent } from '@blueprintjs/core'
import React, { FC, useState } from 'react'

interface Props {
  onRegister: (email, password, confirmPassword) => void
}

export const RegisterForm: FC<Props> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    props.onRegister(email, password, confirmPassword)
  }

  const isValid = () => email.length > 4 && password.length > 4 && confirmPassword.length > 4

  return (
    <form onSubmit={onSubmit}>
      <FormGroup label="E-mail">
        <InputGroup
          tabIndex={1}
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          id="email"
          autoFocus={true}
        />
      </FormGroup>

      <FormGroup label="Password">
        <InputGroup
          tabIndex={2}
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </FormGroup>

      <FormGroup label="Confirm Password">
        <InputGroup
          tabIndex={3}
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </FormGroup>

      <Button
        tabIndex={4}
        type="submit"
        id="btn-register"
        text="Create Account"
        disabled={!isValid()}
        intent={Intent.PRIMARY}
      />
    </form>
  )
}

import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycles } = useContext(CyclesContext)
  const { register } = useFormContext()

  const isInputDisabled = !!activeCycles

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={isInputDisabled}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto engBOX" />
        <option value="Almoço" />
        <option value="Estudar" />
      </datalist>

      <label htmlFor="minutesAmout">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmout"
        placeholder="00"
        step={5}
        disabled={isInputDisabled}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

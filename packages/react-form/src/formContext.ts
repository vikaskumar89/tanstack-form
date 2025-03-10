import type { FormApi } from '@tanstack/form-core'
import * as React from 'react'

export const formContext = React.createContext<{
  formApi: FormApi<any, unknown>
  parentFieldName?: string
} | null>(null!)

export function useFormContext() {
  const formApi = React.useContext(formContext)

  if (!formApi) {
    throw new Error(`You are trying to use the form API outside of a form!`)
  }

  return formApi
}

import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome são obrigatórios.')
      .min(3, 'Nome e sobrenome muito curto.'),
    email: yup.string().email().required(),
    mobile: yup.string().required(),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
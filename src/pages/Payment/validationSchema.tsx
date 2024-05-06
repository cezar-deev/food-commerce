import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import isValidCreditCard from 'card-validator'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('O nome é obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('O celular é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'O celular inválido.', (value) => isValidPhone(value)),
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateMobile', 
        'O CPF/CNPJ é inválido.', 
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    zipCode: yup
      .string()
      .required('O CEP é obrigatório.')
      .transform((val) => val.replace(/[^\d]/g, '')),
    street : yup.string().required('O endereço é obrigatório.'),
    number : yup.string().required('O número é obrigatório.'),
    complement : yup.string(),
    neighborhood : yup.string().required('O bairro é obrigatório.'),
    city : yup.string().required('A cidade é obrigatória.'),
    state : yup.string().required('O estadoé obrigatório.'),
    creditCardNumber : yup
    .string()
    .required('O número do cartão é obrigatório.')
    .transform((val) => val.replace(/[^\d]/g, ''))
    .test(
      'validateCreditCardNumber',
      'O número do cartão é Inválido.', 
      (value) => isValidCreditCard.number(value).isValid
    ) 
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
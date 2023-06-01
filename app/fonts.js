import { Fira_Code, Lato } from 'next/font/google';

export const firaCode = Fira_Code({
  weight: ['400', '300'],
  subsets: ['cyrillic'],
  variable: '--fira-header'
})
export const lato = Lato({
    weight: '900',
    subsets: ['latin'],
    style: 'normal',
    variable: '--lato'
})

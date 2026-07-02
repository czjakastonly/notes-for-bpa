declare module '@stonly/design-system' {
  import * as React from 'react'

  export const theme: Record<string, unknown>
  export const color: Record<string, string>
  export const typography: Record<string, unknown>

  export const ThemeProvider: React.ComponentType<{ theme: unknown; children?: React.ReactNode }>
  export const Provider: React.ComponentType<{ children?: React.ReactNode }>

  export const RowFlex: React.ComponentType<React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>>
  export const ColumnFlex: React.ComponentType<React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>>
  export const IconSvg: React.ComponentType<{ as?: unknown; color?: string; [key: string]: unknown }>
  export const ButtonMinimal: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement> & Record<string, unknown>>
  export const ButtonPrimary: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement> & Record<string, unknown>>
  export const ButtonSplit: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement> & Record<string, unknown>>
  export const FieldCheck: React.ComponentType<Record<string, unknown>>
  export const FieldToggle: React.ComponentType<Record<string, unknown>>
}

declare module '@stonly/design-system/providers' {
  import * as React from 'react'
  const Provider: React.ComponentType<{ children?: React.ReactNode }>
  export default Provider
}

declare module '@stonly/design-system/icons/*' {
  const Icon: unknown
  export default Icon
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

import { InjectionToken, Injector } from '@angular/core'
import { ReactNode } from './react-node'

export interface ReactRootProps {
  children: ReactNode[]
  injector: Injector
}

export interface AngularReactRendererConfig {
  reactRoot: (props: ReactRootProps) => JSX.Element
  container: HTMLElement
  injector: Injector
}

export const angularReactRendererConfig = new InjectionToken<AngularReactRendererConfig>('')

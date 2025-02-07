import type { RouteLocationRaw, RouteLocationNormalizedLoaded } from 'vue-router'
import type { Command } from '@histoire/shared'

export type {
  StoryFile,
  StoryLayout,
  Story,
  Variant,
} from '@histoire/shared'

export type TreeLeaf = {
  title: string
  index: number
}

export type TreeFolder = {
  title: string
  children: (TreeFolder | TreeLeaf)[]
}

export interface TreeGroup {
  group: true
  id: string
  title: string
  children: (TreeFolder | TreeLeaf)[]
}

export type Tree = (TreeGroup | TreeFolder | TreeLeaf)[]

export type SearchResultType = 'title' | 'docs'

export interface SearchResultBase {
  kind: 'story' | 'variant' | 'command'
  rank: number
  id: string
  title: string
  path?: string[]
  icon?: string
  iconColor?: string
  type?: SearchResultType
}

export type SearchResult = SearchResultBase & ({
  route: RouteLocationRaw
} | {
  onActivate: () => unknown
})

export interface PreviewSettings {
  responsiveWidth: number
  responsiveHeight: number
  rotate: boolean
  backgroundColor: string
  checkerboard: boolean
  textDirection: 'ltr' | 'rtl'
}

export interface SearchCommand extends Command {
  icon?: string
  showIf?: (ctx: SearchCommandContext) => boolean
  getParams?: (ctx: SearchCommandContext) => Record<string, any>
  clientAction?: (params: Record<string, any>) => unknown
}

export interface SearchCommandContext {
  route: RouteLocationNormalizedLoaded
}

declare module 'vue' {
  interface ComponentCustomProperties {
    __HISTOIRE_DEV__: boolean
  }
}

declare global {
  const __HISTOIRE_DEV__: boolean
}

import type { PluginTarget, UIPlugin, UIPluginOptions } from '@uppy/core'
import type { PublicProviderOptions, TokenStorage } from '@uppy/companion-client'

export interface InstagramOptions extends UIPluginOptions, PublicProviderOptions {
    target?: PluginTarget
    title?: string
    storage?: TokenStorage
}

declare class Instagram extends UIPlugin<InstagramOptions> {}

export default Instagram

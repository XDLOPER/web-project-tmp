import path from 'path'

// GLOBAL CONSTANTS

export const __SOURCE__:string = 'src'
export const __INDEXJS__:string = 'index.js'
export const __PUBLIC__:string = 'public'
export const __DIST__:string = 'dist'

export const __MAIN__:string = path.resolve()
export const __MAIN_SOURCE__:string = path.resolve(__SOURCE__)
export const __WEB_FILE_PATH__:string = path.resolve(__SOURCE__,__PUBLIC__)


export const __ENV_PATH__:string = path.resolve('.env') || path.resolve('__X-APP-Q__','config','dotenv', '.env') || null
export const __SUPPORT_EXT_ARR__:Array<string> = [
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.ttf',
    '.eot',
    '.otf',
    '.svg',
    '.png',
    '.woff',
    '.woff2',
    '.css',
    '.scss',
    '.sass',
]

export const __INPUT_PATH__:string = path.resolve(__SOURCE__,__INDEXJS__)
export const __INPUT_SEC_PATH__:string = path.resolve( __INDEXJS__)
export const __OUTPUT_DIST_DEV__:string = path.resolve(__DIST__,'assets')
export const __OUTPUT_DIST_PROD__:string = path.resolve(__DIST__,__PUBLIC__)

export const __WEB_PLUGIN_FAVICON__:string = path.resolve(__WEB_FILE_PATH__,'icons/favicon.ico')
export const __WEB_PLUGIN_TEMPALTE_DATA__:string = path.resolve('template-engine-data.json') || path.resolve('__X-APP-Q__','config','webpack','constants','data','template-engine-data.json') || null 




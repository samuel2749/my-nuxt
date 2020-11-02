import Vuex from 'vuex'

interface Map {
    // eslint-disable-next-line
    [key: string]: any;
    // eslint-disable-next-line
    [index: number]: any;
}
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.ts$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules: Map = modulesFiles
    .keys()
    .reduce((modules: Map, modulePath: string) => {
        // set './app.js' => 'app'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
        const value = modulesFiles(modulePath)
        modules[moduleName] = value.default
        return modules
    }, {})
const createStore = () => {
    return new Vuex.Store({
        modules,
    })
}
export default createStore

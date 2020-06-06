import List from '../component/list'
import Welcome from '../component/Welcome'

const ROUTERCONFIG = [
    { title: "Welcome", src: "/Welcome/", exact: true, component: Welcome },
    { title: "列表", src: "/", exact: true, component: List }
]
export default ROUTERCONFIG

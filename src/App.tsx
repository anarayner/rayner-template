import './styles/index.scss'
import { classNames } from "./helpers/classNames/classNames";

const App = () =>{

    return(
        <div className={classNames('app', {}, [])}>
            hello
        </div>
    )
}

export default App
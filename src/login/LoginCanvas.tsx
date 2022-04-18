import React,{Component} from 'react';
import { useNavigate,HashRouter } from 'react-router-dom';
import './login.css';
import LoginInput from './LoginInput';
import { Route, Routes } from 'react-router';
import { RegisterView } from './Register';
import { IndexCVView } from '../indexCV/ui';
import { message } from 'antd';


function LoginCanvas() {
    
    const navigate = useNavigate();  //v6改版之后弃用history.push()，改用navigate

    function onlogin(){
        navigate('/index');
        message.success('登录成功',1);
    }
    function onRegister(){
        navigate('/Register');
    }
        return(
            <div className='loginCanvasStyle'>
                <div className='loginPosition'>
                     <LoginInput onRegister={onRegister} onlogin={onlogin}></LoginInput>
                </div>                                                           
            </div>
        )

    
}

export  class RouterTest extends Component<any,any>{
    render(){
        return(
            <HashRouter>
            <Routes>
                <Route path='/' element={<LoginCanvas/>} />
                <Route path='/index' element={<IndexCVView/>}/>
                <Route path='/Register' element={<RegisterView /> }/>
            </Routes>
            </HashRouter>
            
        );
    }
}

export default RouterTest;
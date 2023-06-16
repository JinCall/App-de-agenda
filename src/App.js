import logo from './logo.svg';
import './App.css';
import TaskListComponent from "./components/container/task_list"
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo4 from './hooks/ejemplo4';
// import GreetingStyled from './pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './pure/forms/optionalRender';
import LoginFormik from './pure/forms/loginFormik';
import RegisterFormik from './pure/forms/registerFormik';
// import Greeting from './pure/greeting';
// import GreetingF from './pure/greetingF';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Santiago"></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}
        {/* Componente de listado de tareas */}
        
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martin">
        {/* todo lo de aqui dentro es elemnto de props.children */}
          {/* <h3>
              Contenido de props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Santiago"></GreetingStyled> */}
      {/* </header> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de formik y yup */}
      {/* <LoginFormik></LoginFormik> */}

      {/* <RegisterFormik></RegisterFormik> */}

      {/* Proyecto final */}
      <TaskListComponent></TaskListComponent>

      {/* Gestion de Eventos */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;

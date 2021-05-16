/* 

    GOALS

    Admin can can only see this
    ->  Function that if the user.property is admin or admin set to true then the sidebar
        will display the dashboard


        TABLE IS CREATED WHEN A USER IS FETCH FOR EACH USER
    ->  Add, Remove and Update tasks for employees

    Example Table

    USER 
    |____SHOW TASK____EDIT TASK____REMOVE TASK____TASK__STATUS

    For right now, we don't need to worry about redux/react-redux
    It doesn't matter exactly what the user's data is... what matters is how the user's data is handled



*/

import './DashBoard.css';

import Sidebar from '../../Components/Sidebar/Sidebar';

const DashBoard = () => {
    return (

        <div>
            
            <Sidebar />

        </div>

    )
}

export default DashBoard;
import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailedPage = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Detailed Task {id}</h1>
        </div>
    );
}

export default TaskDetailedPage;

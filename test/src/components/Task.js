import React, {Component} from  'react';
import Tasks from "./Tasks";

class Task extends Component{
    render() {
        return <div>
            {this.props.task.title}-
            {this.props.task.description}
        </div>
    }
}

export default Task;
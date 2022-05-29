import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) { // конструктор со свойствами
        super(props); // вызываем супер со свойствами
        this.state = { // создаем состояние (объект)
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => { // создаем метод, который принимает событие
        this.setState({ // меняем сотсояние
            [e.target.name] : e.target.value // принимаем событие
        })

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary} = this.state; // создаем переменные и вытаскиваем их из state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name" /* назначаем атрибут для принятия сотояния */
                        value={name}
                        onChange={this.onValueChange}/> {/* обработчик событий с методом */}
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/> {/* обработчик событий с методом */}
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;


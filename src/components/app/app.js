import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Вася Пупкин', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Пупок Васин', salary: 13000, increase: true, rise: false, id: 2},
                {name: 'Петя Камушкин', salary: 5000, increase: false, rise: false, id: 3}
            ] 
        }
        this.maxId = 4; // устанвавливаем id от 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => { // создаем метод с аргументами
        const newItem = { // создаем новую переменную в виде объекта
            name, 
            salary,
            increase: false, // инкрис устанавливаем в фолс
            rise: false,
            id: this.maxId++ // присваиваем id на единицу больше
        }
        

        this.setState(({data}) => { // создаем состояние
            const newArr = [...data, newItem]; // новый массив
            return {
                data: newArr // возращаем новый массив
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length; // переменная с кол-ом элементов в массиве
        const increased = this.state.data.filter(item => item.increase).length // перебераем массив
        
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/> {/* передаем данные в компонент */}
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                /* onToggleRise={this.onToggleRise} *//>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;

// пересмотреть последнии 10 минут урока, сделать домашку - исправить баг с пустыми пользователяями.
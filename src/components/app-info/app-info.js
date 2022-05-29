import './app-info.css';

const AppInfo = ({increased, employees}) => { // вытаскиваем пропсы
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Novkros</h1>
            <h2>общее число сотруников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;
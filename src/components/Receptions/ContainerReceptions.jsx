import React from 'react'

class Receptions extends  React.Component{
  constructor(props){
    super(props);
    this.state={surname:'',name:'',year:'',specialist:''}

    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeSpecialist = this.onChangeSpecialist.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeSurname(event){
    this.setState({surname: event.target.value})
  }
  onChangeName(event){
    this.setState({name: event.target.value})
  }

  onChangeYear(event){
    this.setState({year: event.target.value})
  }

  onChangeSpecialist(event){
    this.setState({specialist: event.target.value})
  }


  onSubmit(event) {
    alert(`Вы ввели Фамилию: ${this.state.surname} 
    Вы ввели имя: ${this.state.name}
    Вы ввели год: ${this.state.year}
    Вы выбрали направление ${this.state.specialist}`);

    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <label><input type="text" placeholder="Введите Фамилию" value={this.state.surname} onChange={this.onChangeSurname}/></label>
        <label><input type="text" placeholder="Введите имя" value={this.state.name} onChange={this.onChangeName}/></label>
        <label><input type="text" placeholder="Введите год рождения" value={this.state.year} onChange={this.onChangeYear}/></label>

        <label>
          Выберите направление:
          <select value={this.state.specialist} onChange={this.onChangeSpecialist}>
            <option value="Хирургия">Хирургия</option>
            <option value="Офтальмология">Офтальмология</option>
            <option value="Стоматология">Стоматология</option>
            <option value="Онкология">Онкология</option>
            <option value="Гинекология">Гинекология</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Receptions;
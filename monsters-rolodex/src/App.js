import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }
    async componentDidMount() {
        let response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        let data = await response.json();
        this.setState({ monsters: data });
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className='App'>
                <h1> Monsters Rolodex </h1>
                <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;

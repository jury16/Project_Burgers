import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';

class App extends React.Component{
    state = {
        burgers : {},
        orders: {},
    }
    addBurger = burger =>{

        //1. Create copy of state obj:
        const burgers ={...this.state.burgers};
        //2. Add new burger to burgers:
        burgers[`burger${Date.now()}`] = burger;
        //3. Update state with new burger:
        this.setState({burgers: burgers});
        

    }
    loadSampleBurgers = () =>{
        this.setState({burgers: sampleBurgers});
    }

    addToOrder = key => {
        //1. Create copy of state obj:
        const order = {...this.state.order};
        // 2. Add or inceese count of ordered burgers:
        order[key] = order[key] + 1 || 1;
        //3. Update state with new order:
        this.setState({order});
    }
    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title='Very Hot Burger'/>
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger 
                            key={key} //for React
                            index={key} //to orders
                            addToOrder = {this.addToOrder}

                            details={this.state.burgers[key]}
                            />;
                        })}
                    </ul>
                </div>
                <Order/>
                <MenuAdmin 
                addBurger = {this.addBurger}
                
                loadSampleBurgers = {this.loadSampleBurgers}
                />
            </div>
        )
    }
}
export default App;
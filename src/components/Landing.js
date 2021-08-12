import React from 'react';
import restaurants from '../list-restaurants';


class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: '',
    }
    displayList = () => {
        const {display} = this.state; // const display = this.state.display;
        this.setState({display: !display});
    }
    getTitle = restaurant => {
        const {title, url} = restaurant; 
        this.setState({title,url, display: false});
    }
    goToRestaurant = () =>{
        const {url} = this.state;
        this.props.history.push(`/restaurant/${url}`);

    }
    render() {
        return ( 

            <div className='restaurant_select'> 
                <div className='restaurant_select_top'>
                    <div className='restaurant_select_top-header font-effect-outline' onClick={this.displayList}> 
                    {this.state.title? this.state.title:'Select Restorant'}
                    </div>
                    <div className='arrow_picker'>
                        <div className='arrow_picker-up'></div>
                        <div className='arrow_picker-down'></div>
                    </div>  
                </div>
                {this.state.display?
                    <div className='restaurant_select_bottom'>
                    <ul>
                        {
                            restaurants.map(restaurant => {
                                return <li onClick = {() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
                            })
                        }
                    </ul>

                </div>: null
                }
                
                {this.state.title && !this.state.display?(
                    <button onClick={this.goToRestaurant}>Go to restaurant</button>  
                ): null}
                
             </div>       

        );
    }
}



export default Landing;
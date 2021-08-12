import React from 'react';

class AddBurgerForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createBurger =(event) =>{
        event.preventDefault();
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,            
        };
        this.props.addBurger(burger);
        // Reset form
        event.currentTarget.reset();
        
    };
    render(){
        return <form className='burger-edit' onSubmit= {this.createBurger}>
            <input ref= {this.nameRef} name='name' type='text' placeholder='Name' autoComplete='off'/>
            <input ref= {this.priceRef} name='price' type='text' placeholder='Price' autoComplete='off'/>
            <select ref= {this.statusRef} name='staus' className='status'>
                <option value='avalibale'>Availibale</option>
                <option value='unavalibale'>Remove from menu</option>
            </select>
            <textarea ref= {this.descRef} name='desc' placeholder='Description'/>
            <input ref= {this.imageRef} name='image' type='text' placeholder='/img' autoComplete='off'/>
            <button type='submit'>Submit to Menu</button>
        </form>
    };
}
export default AddBurgerForm;
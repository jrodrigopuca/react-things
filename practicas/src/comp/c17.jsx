// c7-2
import React, {Component} from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';

const levels = new Array(10)
    .fill(null)
    .map((v,i)=>i+1);

class User{
    constructor(name, surname){
        this.id=cuid();
        this.name=name;
        this.surname=surname;
    }

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Container extends Component{
    render(){
        const {lastRecord, levelAuth, users, idGroup} = this.props;

        return(
            <React.Fragment>
                <p> Last Activity: {lastRecord.toLocaleString()}</p>
                <p> Group #{idGroup}</p>
                <p> Level Auth: {levelAuth}</p>
                <ul>
                    {users.map(i=>(<li key={i.id}>{i.fullName}</li>))}
                </ul>
            </React.Fragment>
        )
    }
}

Container.propTypes={
    lastRecord: PropTypes.instanceOf(Date),
    levelAuth: PropTypes.oneOf(levels),
    users: PropTypes.arrayOf(PropTypes.instanceOf(User)),
    idGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

class c17 extends Component{
    render(){
        let u1= new User('Elliot', 'Alderson');
        let u2 = new User('Tyrell', 'Wellick');
        const data={
            lastRecord: new Date('12/31/2019 7:22:14 PM'),
            users:[u1,u2],
            idGroup:cuid(),
            levelAuth: 5
        }
        return(
            <Container {...data} />
        )
    }

}

export default c17;
import React, {Fragment} from 'react';
import {Card, Button} from 'antd';
import {connect} from 'dva';
import myStyle from './One.less';
const namespace = 'addCard';

const mapStateToProps = (state)=>{
    const cardList = state[namespace];
    return cardList;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (newCard)=>{
            const action = {
                type: `${namespace}/addCard`,
                payload: newCard,
            };
            dispatch(action)
        }
    }
}

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        const count = 1000;
    }

    addCard = () => {
        this.count = this.count + 1;
        const addContent = {
            id: this.count,
            name: 'add',
            age: 21,
            city: '陕西西安'
        };
        this.setState(({cardList})=>({
            cardList: cardList.concat(addContent)
        }))
    }

    handleClick = () => {
        this.props.dispatch({
            type: `${namespace}/addCard`,
            payload: {name: 'add', age: 21, city: '陕西西安'}
        })
    }

    render() {
        return (
            <Fragment>
                <div className={myStyle.wrapper}>
                    {this.props.cardList.map(item => <Card title="Card title" key={item.id} bordered={false} style={{flex: '0 0 22%', margin: 8}}>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <p>{item.city}</p>
                        </Card>
                    )}
                </div>
                <div className={myStyle.myBtn}>
                <Button onClick={this.handleClick} type={'primary'}>
                    添加选项卡
                </Button>
                </div>
            </Fragment>
            )

    }

}
export default connect(mapStateToProps)(AddCard)

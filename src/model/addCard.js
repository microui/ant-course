export default {
    namespace: 'addCard',
    state: {
        cardList: [
            {
                id: 1,
                name: 'lily',
                age: 18,
                city: '四川成都'
            },
            {
                id: 2,
                name: 'jack',
                age: 20,
                city: '湖北武汉'
            },
        ],
        count: 100
    },
    reducers: {
        addCard(state, {payload: newCard}){
            const newCardList = state.cardList.concat([{...newCard, id: state.count + 1}]);
            return {
                cardList: newCardList,
                count: state.count + 1
            }
        }
    }
}
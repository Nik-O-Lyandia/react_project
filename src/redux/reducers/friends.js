const initState = [
    {
        id: 1,
        userId: 2,
        name: 'Dima',
        surname: 'Dimov',
        description: "It's me... Friend",
        email: 'testFriend1@gmail.com',
        imgAddress:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    },
    {
        id: 2,
        userId: 3,
        name: 'Yaroslav', 
        surname: 'Koval',
        description: "It's me... Friend",
        email: 'testFriend2@gmail.com',
        imgAddress:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    },
    {
        id: 3,
        userId: 4,
        name: 'Dima', 
        surname: 'Smirnov',
        description: "It's me... Friend",
        email: 'testFriend3@gmail.com',
        imgAddress:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    },
    {
        id: 4,
        userId: 5,
        name: 'Uliya', 
        surname: 'Timoshenko',
        description: "It's me... Friend",
        email: 'testFriend4@gmail.com',
        imgAddress:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    },
    {
        id: 5,
        userId: 6,
        name: 'Yelena', 
        surname: 'Karpova',
        description: "It's me... Friend",
        email: 'testFriend5@gmail.com',
        imgAddress:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    }
];

export const friendsReducer = (state = initState, action) => {
    return state;
};
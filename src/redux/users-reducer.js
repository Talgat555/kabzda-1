const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';




let initialState = {
    users: [
        // {id:1,
        // photoUrl:'https://static1.vigbo.com/u20004/23148/blog/2195888/3800994/48514262/1000-sokolovskaya-5bc85340ac0ec65ebf7e21994466ef44.jpg',
        // followed:false,
        // fullName:'Dmitry',
        // status:'I am a boss',
        // location:{city:'Minsk', country:'Belarus'}},
        // {id: 2,
        // photoUrl:'https://static1.vigbo.com/u20004/23148/blog/2195888/3800994/48514262/1000-sokolovskaya-5bc85340ac0ec65ebf7e21994466ef44.jpg',
        // followed:true,
        // fullName:'Sasha',
        // status:'I am a boss too',
        // location:{city:'Moskow', country:'Russia'}},
        // {id:3,
        // photoUrl:'https://static1.vigbo.com/u20004/23148/blog/2195888/3800994/48514262/1000-sokolovskaya-5bc85340ac0ec65ebf7e21994466ef44.jpg',
        // followed:false,
        // fullName: 'Andrew',
        // status: 'I am a boss too',
        // location:{city:'Kiev', country:'Ukraine'}}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
                return {...state,
                    users: state.users.map(u=> {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                };
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state;
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;
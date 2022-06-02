import {rerenderEntireTree} from "../render";

const state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Lina"},
            {id: 2, name: "Vova"},
            {id: 3, name: "Egor"},
            {id: 4, name: "Lena"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Where are you?"},
            {id: 3, message: "What are you doing"},
            {id: 4, message: "Nice"},
        ],
    },
    profile: {
        posts: [
            {id: 1, likes: 10, message: "Hiiiiiiiiiiiiiiii"},
            {id: 2, likes: 99, message: "Hey, what are you doing here?"},
            {id: 3, likes: 16, message: "What are you doing"},
            {id: 4, likes: 1, message: "Nice"},
        ],
        postText: 'interesting text'
    },
}


export let addPost = () => {
    state.profile.posts.push({
        id: 5,
        likes: 0,
        message: state.profile.postText
    })
    state.profile.postText = ''
    rerenderEntireTree(state, addPost, updatePostText)
}

export let updatePostText = (text) => {
    state.profile.postText = text
    rerenderEntireTree(state, addPost, updatePostText)
}
export default state
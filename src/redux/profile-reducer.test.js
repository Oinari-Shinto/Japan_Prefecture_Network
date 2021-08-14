import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/120px-Flag_of_Tokyo_Metropolis.svg.png'/>},
        {id :2, message : 'First publication release Post Chiba', likeCount : 25, img : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Chiba%2C_Chiba.svg/100px-Flag_of_Chiba%2C_Chiba.svg.png'></img>}
      ],
    newPostText: 'Samurai',
};

test('new post should be added', () => {
    //1.test data
    let action = addPostCreator ("Tokyo prefecture");
    
    //2. action
    let newState = profileReducer(state, action );

    //3.expectation
    expect(newState.posts.length).toBe(3);
  });

  test('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost (1);
    
    //2. action
    let newState = profileReducer(state, action );

    //3.expectation
    expect(newState.posts.length).toBe(1);
  });
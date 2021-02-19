import { LIKE, DISLIKE } from '../types';

function reducer(state, action) {
  let sections;

  switch (action.type) {
    case LIKE:
      sections = [...state.sections];
      sections[action.payload.index] = {
        ...sections[action.payload.index],
        participants: [
          ...sections[action.payload.index].participants.map((participant) => {
            return {
              ...participant,
              likes:
                participant.id === action.payload.id
                  ? participant.likes + 1
                  : participant.likes,
            };
          }),
        ],
      };

      return { ...state, sections: sections };
    case DISLIKE:
      sections = [...state.sections];
      sections[action.payload.index] = {
        ...sections[action.payload.index],
        participants: [
          ...sections[action.payload.index].participants.map((participant) => {
            return {
              ...participant,
              dislikes:
                participant.id === action.payload.id
                  ? participant.dislikes + 1
                  : participant.dislikes,
            };
          }),
        ],
      };

      return { ...state, sections: sections };
    default:
      return state;
  }
}

export default reducer;

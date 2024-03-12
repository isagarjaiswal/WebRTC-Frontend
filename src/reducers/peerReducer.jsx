import {
  ADD_PEER_STREAM,
  ADD_PEER_NAME,
  REMOVE_PEER_STREAM,
  ADD_ALL_PEERS,
} from "./peerAction";

export const peersReducer = (state, action) => {
  switch (action.type) {
    case ADD_PEER_STREAM:
      return {
        ...state,
        [action.payload.peerId]: {
          ...state[action.payload.peerId],
          stream: action.payload.stream,
          peerId: action.payload.peerId,
        },
      };
    case ADD_PEER_NAME:
      return {
        ...state,
        [action.payload.peerId]: {
          ...state[action.payload.peerId],
          userName: action.payload.userName,
          peerId: action.payload.peerId,
        },
      };
    case REMOVE_PEER_STREAM:
      return {
        ...state,
        [action.payload.peerId]: {
          ...state[action.payload.peerId],
          stream: undefined,
        },
      };
    case ADD_ALL_PEERS:
      return { ...state, ...action.payload.peers };
    default:
      return { ...state };
  }
};

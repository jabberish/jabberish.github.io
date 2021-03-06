import {
  GET_CHANNELS,
  GET_CHANNELS_LOADING,
  GET_CHANNELS_ERROR,
  SELECT_CHANNEL,
  LOAD_HISTORY,
  CLEAR_HISTORY,
  RECEIVE_MESSAGE,
  CLEAR_CHANNELS
} from '../actions/channelActions';

const initialState = {
  list: [],
  loading: false,
  error: null,
  currentChannel: '',
  messages: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_CHANNELS_LOADING:
      return { ...state, loading: true };
    case GET_CHANNELS:
      return { ...state, loading: false, list: action.payload };
    case GET_CHANNELS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_CHANNELS:
      return { ...state, list: [] };
    case SELECT_CHANNEL:
      return { ...state, currentChannel: action.payload };
    case LOAD_HISTORY:
      return { ...state, messages: action.payload };
    case CLEAR_HISTORY:
      return { ...state, messages: [] };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
}

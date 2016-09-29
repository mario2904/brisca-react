// Action types received from the WebSocketServer

// My Info Reducer
export const MY_INFO_PLAYER = 'MY_INFO_PLAYER';
export const MY_INFO_GAME = 'MY_INFO_GAME';

// Available Games Reducer
export const INIT_AVAILABLE_GAMES = 'INIT_AVAILABLE_GAMES';
export const NEW_AVAILABLE_GAME = 'NEW_AVAILABLE_GAME';

// Online Players Reducer
export const INIT_PLAYERS = 'INIT_PLAYERS';
export const NEW_PLAYER = 'NEW_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER'

// Game Reducer
export const START_GAME = 'START_GAME';
export const PLAYED_CARD = 'PLAYED_CARD';
export const END_ROUND = 'END_ROUND';
export const END_GAME = 'END_GAME';

export function selectCard (card) {
  console.log(`Card Selected-> name: ${card.name} pos: ${card.pos}`);
  return {
    type: PLAYED_CARD,
    payload: {
      name: card.name,
      pos: card.pos
    }
  };
}

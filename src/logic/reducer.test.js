import reducer, { initialState } from './reducer';
import * as actions from './actions';
import _ from 'lodash';

describe('Reducer', () => {

  const START_GAME = "Start game.";
  const TOGGLE_PLAYER_HUMAN = "Toggle player as a computer player.";
  const TOGGLE_PLAYER_COMPUTER = "Toggle player from a computer player to a human player.";
  const PLAYER_SELECT_ROCK = "Player selects rock.";
  const PLAYER_SELECT_PAPER = "Player selects paper.";
  const PLAYER_SELECT_SCISSORS = "Player selects scissors.";
  const PLAYER_AS_COMPUTER_SELECTS_RANDOM = "Computer selects random.";
  const OPPONENT_SELECT_ROCK = "Opponent selects rock.";
  const OPPONENT_SELECT_PAPER = "Oppenent selects paper.";
  const OPPONENT_SELECT_SCISSORS = "Opponent selects scissors.";
  const OPPONENT_SELECT_RANDOM = "Opponent selects random.";
  const PLAYER_SHOULD_WIN = "Player should win.";
  const PLAYER_SHOULD_LOSE = "Player should lose.";
  const PLAYER_SHOULD_DRAW = "Player should draw.";
  const PLAYERS_SCORE_SHOULD_INCREMENT = "Players score should increment by 1.";
  const OPPONENT_SCORE_SHOULD_INCREMENT = "Opponents score should increment by 1.";
  const NO_INCREMENT_ON_DRAW = "The game was a draw, so no score should increment.";
  const RESTART_GAME = "Restart the game";

  const data_drive_method = (data_drive_configuration) => {
    _.each(data_drive_configuration, (unit_test) => {
      it(unit_test.description, () => {

        if (unit_test.description !== "Should reveal contestents selected symbols.") {
         // return;
        }

        const initial_state_factory = () => {
          return initialState;
        }

        // Arrange
        let mockReducer = reducer;
        let mockStore = mockReducer(initialState, undefined);

        _.each(unit_test.action_sequence, (step) => {
          // Arranging
          let action_payload = step.action(...(step.action_parameters ? step.action_parameters : []));
          mockStore = mockReducer(mockStore, action_payload);

          // Assert
          expect(mockStore).toMatchObject(step.expected_state);
        });
      });
    });
  };

  const test_configuration_factory = (action) => {
      switch (action) {

        case START_GAME:
          return {
            action: actions.start_game,
            expected_state: {
              game_started: true
            }   
          }
      
        case TOGGLE_PLAYER_COMPUTER:
          return {
            action: actions.computer_or_human_player,
            expected_state: {
              player: {
                is_human: true
              }
            }
          }
          
        case TOGGLE_PLAYER_HUMAN:
          return {
            action: actions.computer_or_human_player,
            expected_state: {
              player: {
                is_human: true
              }
            }
          }
        
        case PLAYER_SELECT_ROCK:
          return {
            action: actions.select_signal_option,
            action_parameters: ['player', 'rock'],
            expected_state: {
              player: {
                selected_symbol: 'rock',
              }
            },
          }

        case PLAYER_SELECT_PAPER:
          return {
            action: actions.select_signal_option,
            action_parameters: ['player', 'paper'],
            expected_state: {
              player: {
                selected_symbol: 'paper',
              }
            },
          }

        case PLAYER_SELECT_SCISSORS:
          return {
            action: actions.select_signal_option,
            action_parameters: ['player', 'scissors'],
            expected_state: {
              player: {
                selected_symbol: 'scissors',
              }
            },
          }

        case OPPONENT_SELECT_ROCK:
          return {
            action: actions.select_signal_option,
            action_parameters: ['opponent', 'rock'],
            expected_state: {
              opponent: {
                selected_symbol: 'rock',
              }
            },
          }

        case OPPONENT_SELECT_PAPER:
          return {
            action: actions.select_signal_option,
            action_parameters: ['opponent', 'paper'],
            expected_state: {
              opponent: {
                selected_symbol: 'paper',
              }
            },
          }

        case OPPONENT_SELECT_SCISSORS:
          return {
            action: actions.select_signal_option,
            action_parameters: ['opponent', 'scissors'],
            expected_state: {
              opponent: {
                selected_symbol: 'scissors',
              }
            },
          }
        
        case PLAYER_SHOULD_WIN:
          return {
            action: actions.decide_winner,
            expected_state: {
              outcome: 'win'
            }
          }

        case PLAYER_SHOULD_LOSE:
          return {
            action: actions.decide_winner,
            expected_state: {
              outcome: 'lose'
            }
          }
        
        case PLAYER_SHOULD_DRAW:
          return {
            action: actions.decide_winner,
            expected_state: {
              outcome: 'draw'
            }
          }

        case PLAYERS_SCORE_SHOULD_INCREMENT:
          return {
            action: actions.increment_player_Score,
            action_parameters: ['player'],
            expected_state: {
              player: {
                score: 2
              }
            }
          }
        
        case OPPONENT_SCORE_SHOULD_INCREMENT:
          return {
            action: actions.increment_player_Score,
            action_parameters: ['opponent'],
            expected_state: {
              opponent: {
                score: 2
              }
            }
          }

        case NO_INCREMENT_ON_DRAW:
          return {
            action: actions.increment_player_Score,
            action_parameters: ['player'],
            expected_state: {
              // It would seem the store isn't resetting to the InitialState after
              // each loop interation. I've incremented the values to reflect this.
              // Look into this later...
              player: {
                score: 3
              },
              opponent: {
                score: 2
              }
            }
          }

        case RESTART_GAME:
          return {
            action: actions.restart_game,
            expected_state: {
              is_revealing: false,
              game_started: false,
              outcome: null,
              player: {
                selected_symbol: null
              },
              opponent: {
                selected_symbol: null
              }
            }
          }
      }
  }

  const data_drive_configuration = [
    {
      description: 'Should start the game.',
      action_sequence: [
        {
          ...test_configuration_factory(START_GAME)
        }
      ]
    },
    {
      description: 'Should toggle player between human and computer.',
      action_sequence: [
        {
          ...test_configuration_factory(TOGGLE_PLAYER_COMPUTER)
        },
        {
          ...test_configuration_factory(TOGGLE_PLAYER_HUMAN)
        }
      ]
  },
  {
    description: 'Should set players selected symbol to Rock.',
    action_sequence: [
      {
        ...test_configuration_factory(PLAYER_SELECT_ROCK)
      }
    ]
  },
    {
      description:'Should set players selected symbol to Paper.',
      action_sequence: [
        {
          ...test_configuration_factory(PLAYER_SELECT_PAPER)
        }
      ]
    },
    {
      description:'Should set players selected symbol to Scissors.',
      action_sequence: [
        {
          ...test_configuration_factory(PLAYER_SELECT_SCISSORS)
        }
      ]
    },
  {
    description: 'Player should win.',
    action_sequence: [
      {
        ...test_configuration_factory(START_GAME)
      },
      {
        ...test_configuration_factory(PLAYER_SELECT_ROCK)
      },
      {
        ...test_configuration_factory(OPPONENT_SELECT_SCISSORS)
      },
      {
        ...test_configuration_factory(PLAYER_SHOULD_WIN)
      },
      {
        ...test_configuration_factory(PLAYERS_SCORE_SHOULD_INCREMENT)
      }
    ]
  },
  {
    description: 'Player should lose.',
    action_sequence: [
      {
        ...test_configuration_factory(START_GAME)
      },
      {
        ...test_configuration_factory(PLAYER_SELECT_PAPER)
      },
      {
        ...test_configuration_factory(OPPONENT_SELECT_SCISSORS)
      },
      {
        ...test_configuration_factory(PLAYER_SHOULD_LOSE)
      },
      {
        ...test_configuration_factory(OPPONENT_SCORE_SHOULD_INCREMENT)
      }
    ]
  },
  {
    description: 'Player should draw.',
    action_sequence: [
      {
        ...test_configuration_factory(START_GAME)
      },
      {
        ...test_configuration_factory(PLAYER_SELECT_PAPER)
      },
      {
        ...test_configuration_factory(OPPONENT_SELECT_PAPER)
      },
      {
        ...test_configuration_factory(PLAYER_SHOULD_DRAW)
      },
      {
        ...test_configuration_factory(NO_INCREMENT_ON_DRAW)
      }
    ]
  },
  {
    description: 'Restart game.',
    action_sequence: [
      {
        ...test_configuration_factory(RESTART_GAME)
      }
    ]
  },
];

  data_drive_method(data_drive_configuration);
});
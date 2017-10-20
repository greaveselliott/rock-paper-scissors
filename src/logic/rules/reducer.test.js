import rules, { initialState } from './reducer';
import * as action from './actions';
import * as configuration from './configuration';
import _ from 'lodash';

const data_drive_ruleset = (ruleset, action) => {
  _.each(ruleset, (unit_test) => {
    it(unit_test.description, () => {
      // Set
      const mockState = initialState;
      const mockAction = action;
      const mockReducer = rules;

      // Act
      const result = mockReducer(mockState, mockAction);
      
      // Assert
      expect(_.get(result,unit_test.key,null)).toEqual(unit_test.expect);
    });
  });
};

describe('Rock paper scissors rules reducer', () => {

  const data_drive_rock_paper_scissors = [
    {
      description: 'Should bootstrap game with default rules.',
      key: 'ruleset',
      expect: configuration.rock_paper_scissors
    },
    {
      description: 'Rock should crush Scissors.',
      key: 'ruleset.rock',
      expect: ['scissors']
    },
    {
      description: 'Paper should wrap Rock.',
      key: 'ruleset.paper',
      expect: ['rock']
    },
    {
      description: 'Scissors should cut Paper.',
      key: 'ruleset.scissors',
      expect: ['paper']
    }
  ];

  data_drive_ruleset(data_drive_rock_paper_scissors);
});


describe('Rock paper scissors lizard spock rules reducer', () => {
  
  const data_drive_rock_paper_scissors_lizard_spock = [
    {
      description: 'Should set rules to new game mode.',
      key: 'ruleset',
      expect: configuration.rock_paper_scissors_lizard_spock
    },
    {
      description: 'Rock should crush Scissors and Lizards.',
      key: 'ruleset.rock',
      expect: ['scissors','lizard']
    },
    {
      description: 'Paper should cover Rock and disprove Spock.',
      key: 'ruleset.paper',
      expect: ['rock', 'spock']
    },
    {
      description: 'Scissors should cut Paper and decapitate Lizard.',
      key: 'ruleset.scissors',
      expect: ['paper','lizard']
    },
    {
      description: 'Lizard should poison Spock and eat Paper.',
      key: 'ruleset.lizard',
      expect: ['spock','paper']
    },
    {
      description: 'Spock should smash Scissors and vaporize Rock.',
      key: 'ruleset.spock',
      expect: ['rock','scissors']
    },
  ];

  data_drive_ruleset(
    data_drive_rock_paper_scissors_lizard_spock, 
    action.rock_paper_scissors_lizard_spock()
  );
});

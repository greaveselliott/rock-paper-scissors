import { initialState } from './reducer';
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
import reducer, { initial_state } from './reducer';
import * as action from './actions';
import * as configuration from './configuration';
import _ from 'lodash';

const data_drive_method = (configuration, action) => {
  _.each(configuration, (unit_test) => {
    it(unit_test.description, () => {
      // Set
      const mockState = initial_state;
      const mockAction = action;
      const mockReducer = reducer;

      // Act
      const result = mockReducer(mockState, mockAction);
      
      // Assert
      expect(_.get(result,unit_test.key,null)).toEqual(unit_test.expect);
    });
  });
};

describe('Configuration', () => {

  const data_drive_configuration = [
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

  data_drive_method(data_drive_configuration);
});
import reducer, { initialState } from './reducer';
import * as CONSTANTS from './constants';


describe('Rock paper scissors rules reducer', () => {
  it('Should bootstrap game with default rules.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result).toEqual(mockState);
  });

  it('Rock should crush Scissors.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.rock).toEqual(['scissors']);
  });

  it('Paper should cover Rock.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.paper).toEqual(['rock']);
  });

  it('Scissors should cut Paper.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.scissors).toEqual(['paper']);
  });
});


describe('Rock paper scissors lizard spock rules reducer', () => {
  
  it('Should set rules to new game mode.', () => {
    const mockState = initialState;
    const mockAction = CONSTANTS.ROCK_PAPER_SCISSORS_LIZARD_SPOCK;
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('Rock should crush Scissors and Lizards.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.rock).toEqual(['scissors','lizard']);
  });

  it('Paper should cover Rock and disprove Spock.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.paper).toEqual(['rock', 'spock']);
  });

  it('Scissors should cut Paper and decapitate Lizard.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.scissors).toEqual(['paper','lizard']);
  });

  it('Lizard should poison Spock and eat Paper.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.lizard).toEqual(['spock','paper']);
  });
  
  it('Spock should smash Scissors and vaporize Rock.', () => {
    const mockState = initialState;
    const result = reducer(mockState, null);
    expect(result.ruleset.rock).toEqual(['scissors','rock']);
  });
});

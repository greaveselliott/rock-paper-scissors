export const rock_paper_scissors = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
};

export const rock_paper_scissors_lizard_spock = {
    rock: ['scissors','lizard'],
    paper: ['rock','spock'],
    scissors: ['paper','lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
};

export const computer_difficulties = [
    {
        rating: 400,
        name: 'Beginner',
        description: 'Favours moves your recent play can beat.'
    },
    {
        rating: 800,
        name: 'Learner',
        description: 'Predictable, with frequent mistakes.'
    },
    {
        rating: 1200,
        name: 'Club',
        description: 'Mostly balanced with light pattern reading.'
    },
    {
        rating: 1600,
        name: 'Challenger',
        description: 'Tracks your recurring choices.'
    },
    {
        rating: 2000,
        name: 'Expert',
        description: 'Learns recent sequences quickly.'
    },
    {
        rating: 2400,
        name: 'Master',
        description: 'Rarely ignores a pattern.'
    },
    {
        rating: 2800,
        name: 'Grandmaster',
        description: 'Uses near-perfect pattern recognition.'
    }
];

export const default_computer_rating = 1200;

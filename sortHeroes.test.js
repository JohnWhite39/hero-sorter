import { sortHeroesByHealth } from './sortHeroes';

test('should sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
});

test('should handle empty array', () => {
  expect(sortHeroesByHealth([])).toEqual([]);
});

test('should handle array with one hero', () => {
  const heroes = [{ name: 'маг', health: 100 }];
  expect(sortHeroesByHealth(heroes)).toEqual(heroes);
});

test('should handle array with heroes having the same health', () => {
  const heroes = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  const sortedHeroes = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
});

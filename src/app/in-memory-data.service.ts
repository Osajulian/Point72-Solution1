import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { name: 'Luke Skywalker', birthYear: '19BBY' },
      { name: 'C-3PO', birthYear: '112BBY' },
      { name: 'R2-D2', birthYear: '33BBY' },
      { name: 'Darth Vader', birthYear: '41.9BBY' },
      { name: 'Leia Organa', birthYear: '19BBY' },
      { name: 'Owen Lars', birthYear: '52BBY' },
      { name: 'Beru Whitesun Lars', birthYear: '47BBY' },
      { name: 'R5-D4', birthYear: 'unknown' },
      { name: 'Biggs Darklighter', birthYear: '24BBY' },
      { name: 'Obi-Wan Kenobi', birthYear: '57BBY' }

    ];
    return { characters };
  }
}

import { CharacterStats } from '../../../domain/snw/CharacterStats'
import { getCharArmorClass, getDescArmorClass } from '../armorClass'

describe('armorClass utils', () => {
  describe('getDescArmorClass', () => {
    it.each([
      [11, 8],
      [12, 7],
      [13, 6],
      [14, 5],
      [15, 4],
      [16, 3],
      [17, 2],
      [18, 1],
      [19, 0],
    ])('should return valid desc AC [%d]', (ascArmorClass, expectedDescArmorClass) => {
      expect(getDescArmorClass(ascArmorClass)).toEqual(expectedDescArmorClass)
    })
  })

  describe('getCharArmorClass', () => {
    describe('No DEX bonus', () => {
      it('should calc AC / Leather', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 2,
              cost: 5,
              name: 'Leather',
              weight: 25,
            },
          ]),
        ).toEqual({ aac: 12, armor: 'Leather', dac: 7 })
      })

      it('should calc AC / Ring mail', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 3,
              cost: 30,
              name: 'Ring',
              weight: 40,
            },
          ]),
        ).toEqual({ aac: 13, armor: 'Ring', dac: 6 })
      })

      it('should calc AC / Plate', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 6,
              cost: 100,
              name: 'Plate',
              weight: 70,
            },
          ]),
        ).toEqual({ aac: 16, armor: 'Plate', dac: 3 })
      })

      it('should calc AC / Chain', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 4,
              cost: 75,
              name: 'Chain',
              weight: 50,
            },
          ]),
        ).toEqual({ aac: 14, armor: 'Chain', dac: 5 })
      })

      it('should calc AC / shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 11, armor: 'Shield', dac: 8 })
      })

      it('should calc AC / Chain + shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 4,
              cost: 75,
              name: 'Chain',
              weight: 50,
            },
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 15, armor: 'Chain, shield', dac: 4 })
      })

      it('should calc AC / Plate, shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 0 } } as CharacterStats, [
            {
              ascArmorClass: 6,
              cost: 100,
              name: 'Plate',
              weight: 70,
            },
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 17, armor: 'Plate, shield', dac: 2 })
      })
    })

    describe('DEX bonus', () => {
      it('should calc AC / Leather', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 1 } } as CharacterStats, [
            {
              ascArmorClass: 2,
              cost: 5,
              name: 'Leather',
              weight: 25,
            },
          ]),
        ).toEqual({ aac: 13, armor: 'Leather', dac: 6 })
      })

      it('should calc AC / Plate', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: -1 } } as CharacterStats, [
            {
              ascArmorClass: 6,
              cost: 100,
              name: 'Plate',
              weight: 70,
            },
          ]),
        ).toEqual({ aac: 15, armor: 'Plate', dac: 4 })
      })

      it('should calc AC / shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: -1 } } as CharacterStats, [
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 10, armor: 'Shield', dac: 9 })
      })

      it('should calc AC / Chain + shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: 1 } } as CharacterStats, [
            {
              ascArmorClass: 4,
              cost: 75,
              name: 'Chain',
              weight: 50,
            },
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 16, armor: 'Chain, shield', dac: 3 })
      })

      it('should calc AC / Plate, shield', () => {
        expect(
          getCharArmorClass({ Dexterity: { ArmorClass: -1 } } as CharacterStats, [
            {
              ascArmorClass: 6,
              cost: 100,
              name: 'Plate',
              weight: 70,
            },
            { ascArmorClass: 1, cost: 15, name: 'Shield', weight: 10 },
          ]),
        ).toEqual({ aac: 16, armor: 'Plate, shield', dac: 3 })
      })
    })
  })
})

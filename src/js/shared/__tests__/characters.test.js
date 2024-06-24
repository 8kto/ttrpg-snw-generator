import { characterClasses, PRIME_ATTR_MIN } from '../../data/classes'
import { strengthModifiers } from '../../data/modifiers'
import { getBestClass, getClassSuggestions, getMatchingScore, getValidAttributes } from '../character.js'

describe('character utils', () => {
  describe('getMatchingScore', () => {
    it.each([
      [3, 4],
      [4, 4],
      [5, 6],
      [6, 6],
      [7, 8],
      [8, 8],
      [9, 12],
      [10, 12],
      [11, 12],
      [12, 12],
      [13, 15],
      [14, 15],
      [15, 15],
      [16, 16],
      [17, 17],
      [18, 18],
    ])('should match the expected scores %d => %d', (score, expected) => {
      expect(getMatchingScore(strengthModifiers, score)).toEqual(expected)
    })
  })

  describe('getClassSuggestions', () => {
    const getStatsWithScores = (scores) => ({
      Charisma: { Score: scores.Charisma || 0 },
      Constitution: { Score: scores.Constitution || 0 },
      Dexterity: { Score: scores.Dexterity || 0 },
      Gold: 0,
      Intelligence: { Score: scores.Intelligence || 0 },
      Strength: { Score: scores.Strength || 0 },
      Wisdom: { Score: scores.Wisdom || 0 },
    })

    it('should match Assassin with Strength, Dexterity, and Intelligence 13+', () => {
      const stats = getStatsWithScores({ Dexterity: 13, Intelligence: 13, Strength: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Assassin')
    })

    it('should match Cleric with Wisdom 13+', () => {
      const stats = getStatsWithScores({ Wisdom: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Cleric')
    })

    it('should match Druid with Wisdom and Charisma 13+', () => {
      const stats = getStatsWithScores({ Charisma: 13, Wisdom: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Druid')
    })

    it('should match Fighter with Strength 13+', () => {
      const stats = getStatsWithScores({ Strength: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Fighter')
    })

    it('should match MagicUser with Intelligence 13+', () => {
      const stats = getStatsWithScores({ Intelligence: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('MagicUser')
    })

    it('should match Monk with Wisdom 13+', () => {
      const stats = getStatsWithScores({ Wisdom: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Monk')
    })

    it('should match Paladin with Strength 13+', () => {
      const stats = getStatsWithScores({ Strength: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Paladin')
    })

    it('should match Ranger with Strength 13+', () => {
      const stats = getStatsWithScores({ Strength: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Ranger')
    })

    it('should match Thief with Dexterity 13+', () => {
      const stats = getStatsWithScores({ Dexterity: 13 })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toContain('Thief')
    })

    it('should match all classes with all attributes 13+', () => {
      const stats = getStatsWithScores({
        Charisma: 13,
        Constitution: 13,
        Dexterity: 13,
        Intelligence: 13,
        Strength: 13,
        Wisdom: 13,
      })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toEqual(Object.keys(characterClasses))
    })

    // Edge case: Only one attribute meets the minimum
    it('should match only classes with Dexterity 13+', () => {
      const stats = getStatsWithScores({ Dexterity: 13 })
      const expectedClasses = ['Thief']
      expect(getClassSuggestions(stats, 'PrimeAttr')).toEqual(expect.arrayContaining(expectedClasses))
    })

    // Edge case: No attributes meet the minimum
    it('should return an empty array if no attributes meet the minimum', () => {
      const stats = getStatsWithScores({
        Charisma: 10,
        Constitution: 10,
        Dexterity: 10,
        Intelligence: 10,
        Strength: 10,
        Wisdom: 10,
      })
      expect(getClassSuggestions(stats, 'PrimeAttr')).toEqual([])
    })

    // Edge case: Mix of attributes meeting and not meeting the minimum
    it('should match appropriate classes with mixed attribute scores', () => {
      const stats = getStatsWithScores({ Strength: 13, Wisdom: 14 })
      const expectedClasses = ['Cleric', 'Paladin']
      expect(getClassSuggestions(stats, 'PrimeAttr')).toEqual(expect.arrayContaining(expectedClasses))
    })
  })

  describe('getValidAttributes', () => {
    it('should return only valid attrs', () => {
      expect(
        getValidAttributes(
          {
            Charisma: { Score: 5 },
            Constitution: { Score: 13 },
            Dexterity: { Score: 4 },
            Intelligence: { Score: 13 },
            Strength: { Score: 8 },
            Wisdom: { Score: 13 },
          },
          PRIME_ATTR_MIN,
        ),
      ).toEqual(['Constitution', 'Intelligence', 'Wisdom'])
    })

    it('should return sorted valid attrs', () => {
      expect(
        getValidAttributes(
          {
            Charisma: { Score: 5 },
            Constitution: { Score: 15 },
            Dexterity: { Score: 4 },
            Intelligence: { Score: 13 },
            Strength: { Score: 8 },
            Wisdom: { Score: 18 },
          },
          PRIME_ATTR_MIN,
        ),
      ).toEqual(['Wisdom', 'Constitution', 'Intelligence'])
    })

    it('should return an empty array if no attributes meet the minimum score', () => {
      expect(
        getValidAttributes(
          {
            Charisma: { Score: 5 },
            Constitution: { Score: 12 },
            Dexterity: { Score: 4 },
            Intelligence: { Score: 10 },
            Strength: { Score: 8 },
            Wisdom: { Score: 11 },
          },
          PRIME_ATTR_MIN,
        ),
      ).toEqual([])
    })

    it('should handle empty stats object', () => {
      expect(getValidAttributes({}, PRIME_ATTR_MIN)).toEqual([])
    })

    it('should handle missing scores in stats', () => {
      expect(
        getValidAttributes(
          {
            Charisma: {},
            Constitution: { Score: 15 },
            Dexterity: { Score: null },
            Intelligence: { Score: 13 },
            // eslint-disable-next-line no-undefined
            Strength: { Score: undefined },
            Wisdom: { Score: 18 },
          },
          PRIME_ATTR_MIN,
        ),
      ).toEqual(['Wisdom', 'Constitution', 'Intelligence'])
    })

    it('should return correct attributes when all scores are equal and above min score', () => {
      expect(
        getValidAttributes(
          {
            Charisma: { Score: 14 },
            Constitution: { Score: 14 },
            Dexterity: { Score: 14 },
            Intelligence: { Score: 14 },
            Strength: { Score: 14 },
            Wisdom: { Score: 14 },
          },
          PRIME_ATTR_MIN,
        ),
      ).toEqual(['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Strength', 'Wisdom'])
    })
  })

  describe('getBestClass', () => {
    const data = [
      [
        'Fighter',
        [['Strength', 13]],
        {
          Intelligence: 14,
          Strength: 13,
        },
      ],
      [
        'MagicUser',
        [['Intelligence', 13]],
        {
          Intelligence: 14,
          Strength: 13,
        },
      ],
      [
        'Paladin',
        [['Strength', 13]],
        {
          Intelligence: 14,
          Strength: 13,
        },
      ],
      [
        'Ranger',
        [['Strength', 13]],
        {
          Intelligence: 14,
          Strength: 13,
        },
      ],
      [
        'Assassin',
        [
          ['Strength', 13],
          ['Dexterity', 13],
          ['Intelligence', 13],
        ],
        {
          Dexterity: 15,
          Intelligence: 14,
          Strength: 13,
        },
      ],
    ]

    it('should return the best matching class based on the longest classPrimeAttrs and highest characterAttrScores', () => {
      const result = getBestClass(data)
      expect(result).toBe('Assassin')
    })

    it('should handle data with multiple records with same max length and score, returning a random one', () => {
      const similarData = [
        [
          'Warrior',
          [
            ['Strength', 13],
            ['Dexterity', 13],
          ],
          {
            Dexterity: 15,
            Intelligence: 14,
            Strength: 13,
          },
        ],
        [
          'Knight',
          [
            ['Strength', 13],
            ['Dexterity', 13],
          ],
          {
            Dexterity: 15,
            Intelligence: 14,
            Strength: 13,
          },
        ],
      ]

      const result = getBestClass(similarData)
      expect(result).toBe('Warrior')
    })

    it('should return null for an empty data array', () => {
      const result = getBestClass([])
      expect(result).toBeNull()
    })

    it('should prioritize longer classPrimeAttrs even if scores are higher in shorter one', () => {
      const mixedData = [
        [
          'Mage',
          [['Intelligence', 13]],
          {
            Intelligence: 18,
            Strength: 10,
          },
        ],
        [
          'Sorcerer',
          [
            ['Intelligence', 13],
            ['Wisdom', 13],
          ],
          {
            Intelligence: 16,
            Wisdom: 14,
          },
        ],
      ]

      const result = getBestClass(mixedData)
      expect(result).toBe('Sorcerer')
    })

    it('should handle single entry data array', () => {
      const singleData = [
        [
          'Barbarian',
          [
            ['Strength', 13],
            ['Constitution', 13],
          ],
          {
            Constitution: 14,
            Strength: 15,
          },
        ],
      ]

      const result = getBestClass(singleData)
      expect(result).toBe('Barbarian')
    })
  })
})

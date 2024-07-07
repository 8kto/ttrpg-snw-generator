module.exports = async (page) => {
  // Listen for console errors and log them
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.error(`Browser console error: ${msg.text()}`)
    }
  })

  // Restore all 9 classes from serialized string
  await page.evaluateOnNewDocument(() => {
    localStorage.setItem(
      's&w-generator',
      JSON.stringify({
        MainCharacter: {
          character: {
            characterClass: 'Cleric',
            prepared: ['Cure Light Wounds', 'Detect Magic', 'Light'],
            spells: 'All',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 3, Score: 8 },
              Constitution: { HitPoints: 0, RaiseDeadSurvivalChance: '75%', Score: 11 },
              Dexterity: { ArmorClass: 0, MissilesToHit: 0, Score: 9 },
              Gold: 110,
              HitPoints: 6,
              Intelligence: {
                MaxAdditionalLanguages: 0,
                MaxSpellLevel: 4,
                NewSpellUnderstandingChance: 30,
                Score: 6,
                SpellsPerLevel: '2/4',
              },
              Strength: { Carry: 5, Damage: 0, Doors: '1-2', Score: 11, ToHit: 0 },
              Wisdom: { Score: 17 },
            },
          },
          id: 'MainCharacter',
          items: {
            'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 },
            Leather: { ascArmorClass: 2, cost: 5, name: 'Leather', quantity: 1, weight: 25 },
            Mace: { cost: 10, damage: 'd6', name: 'Mace', quantity: 1, weight: 10 },
          },
          name: 'Cleric',
        },
        'character-name1720287035476': {
          character: {
            characterClass: 'Thief',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 5, Score: 13 },
              Constitution: { HitPoints: -1, RaiseDeadSurvivalChance: '50%', Score: 7 },
              Dexterity: { ArmorClass: 1, MissilesToHit: 1, Score: 16 },
              Gold: 100,
              HitPoints: 1,
              Intelligence: {
                MaxAdditionalLanguages: 2,
                MaxSpellLevel: 5,
                NewSpellUnderstandingChance: 50,
                Score: 10,
                SpellsPerLevel: '4/6',
              },
              Strength: { Carry: 5, Damage: 0, Doors: '1-2', Score: 11, ToHit: 0 },
              Wisdom: { Score: 11 },
            },
          },
          id: 'character-name1720287035476',
          items: {
            'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 },
            Dagger: { cost: 2, damage: 'd4', flags: 4, name: 'Dagger', quantity: 1, weight: 2 },
            Shield: { ascArmorClass: 1, cost: 15, name: 'Shield', quantity: 1, weight: 10 },
          },
          name: 'Thief',
        },
        'character-name1720287039511': {
          character: {
            characterClass: 'Druid',
            prepared: ['Detect Magic'],
            spells: 'All',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 3, Score: 8 },
              Constitution: { HitPoints: 0, RaiseDeadSurvivalChance: '75%', Score: 9 },
              Dexterity: { ArmorClass: -1, MissilesToHit: -1, Score: 7 },
              Gold: 120,
              HitPoints: 1,
              Intelligence: {
                MaxAdditionalLanguages: 0,
                MaxSpellLevel: 4,
                NewSpellUnderstandingChance: 30,
                Score: 6,
                SpellsPerLevel: '2/4',
              },
              Strength: { Carry: 5, Damage: 0, Doors: '1-2', Score: 11, ToHit: 0 },
              Wisdom: { Score: 9 },
            },
          },
          id: 'character-name1720287039511',
          items: {
            'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 },
            Leather: { ascArmorClass: 2, cost: 5, name: 'Leather', quantity: 1, weight: 25 },
          },
          name: 'Druid',
        },
        'character-name1720287043434': {
          character: {
            characterClass: 'Monk',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 2, Score: 6 },
              Constitution: { HitPoints: 1, RaiseDeadSurvivalChance: '100%', Score: 15 },
              Dexterity: { ArmorClass: 0, MissilesToHit: 0, Score: 12 },
              Gold: 80,
              HitPoints: 3,
              Intelligence: {
                MaxAdditionalLanguages: 2,
                MaxSpellLevel: 5,
                NewSpellUnderstandingChance: 50,
                Score: 10,
                SpellsPerLevel: '4/6',
              },
              Strength: { Carry: 10, Damage: 0, Doors: '1-2', Score: 13, ToHit: 1 },
              Wisdom: { Score: 16 },
            },
          },
          id: 'character-name1720287043434',
          items: {
            'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 },
            Leather: { ascArmorClass: 2, cost: 5, name: 'Leather', quantity: 1, weight: 25 },
          },
          name: 'Monk',
        },
        'character-name1720287049959': {
          character: {
            characterClass: 'MagicUser',
            spells: {
              'Charm Person': { level: 1, name: 'Charm Person' },
              'Detect Magic': { level: 1, name: 'Detect Magic' },
              'Magic Missile': { level: 1, name: 'Magic Missile' },
              'Protection from Evil': { level: 1, name: 'Protection from Evil' },
              'Read Magic': { level: 1, name: 'Read Magic' },
              Shield: { level: 1, name: 'Shield' },
            },
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 2, Score: 6 },
              Constitution: { HitPoints: 0, RaiseDeadSurvivalChance: '75%', Score: 12 },
              Dexterity: { ArmorClass: 0, MissilesToHit: 0, Score: 9 },
              Gold: 120,
              HitPoints: 2,
              Intelligence: {
                MaxAdditionalLanguages: 3,
                MaxSpellLevel: 6,
                NewSpellUnderstandingChance: 55,
                Score: 12,
                SpellsPerLevel: '4/6',
              },
              Strength: { Carry: 0, Damage: 0, Doors: '1-2', Score: 8, ToHit: 0 },
              Wisdom: { Score: 10 },
            },
          },
          id: 'character-name1720287049959',
          items: { 'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 } },
          name: 'Magic user',
        },
        'character-name1720287054445': {
          character: {
            characterClass: 'Ranger',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 3, Score: 8 },
              Constitution: { HitPoints: 1, RaiseDeadSurvivalChance: '100%', Score: 13 },
              Dexterity: { ArmorClass: 0, MissilesToHit: 0, Score: 11 },
              Gold: 60,
              HitPoints: 3,
              Intelligence: {
                MaxAdditionalLanguages: 1,
                MaxSpellLevel: 5,
                NewSpellUnderstandingChance: 45,
                Score: 9,
                SpellsPerLevel: '3/5',
              },
              Strength: { Carry: 5, Damage: 0, Doors: '1-2', Score: 9, ToHit: 0 },
              Wisdom: { Score: 11 },
            },
          },
          id: 'character-name1720287054445',
          items: { 'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 } },
          name: 'Ranger',
        },
        'character-name1720287067510': {
          character: {
            characterClass: 'Assassin',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 3, Score: 8 },
              Constitution: { HitPoints: 0, RaiseDeadSurvivalChance: '75%', Score: 12 },
              Dexterity: { ArmorClass: 1, MissilesToHit: 1, Score: 14 },
              Gold: 110,
              HitPoints: 5,
              Intelligence: {
                MaxAdditionalLanguages: 4,
                MaxSpellLevel: 8,
                NewSpellUnderstandingChance: 75,
                Score: 15,
                SpellsPerLevel: '6/10',
              },
              Strength: { Carry: 10, Damage: 0, Doors: '1-2', Score: 13, ToHit: 1 },
              Wisdom: { Score: 12 },
            },
          },
          id: 'character-name1720287067510',
          items: { 'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 } },
          name: 'Assassin',
        },
        'character-name1720287080808': {
          character: {
            characterClass: 'Fighter',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 3, Score: 7 },
              Constitution: { HitPoints: -1, RaiseDeadSurvivalChance: '50%', Score: 7 },
              Dexterity: { ArmorClass: -1, MissilesToHit: -1, Score: 8 },
              Gold: 100,
              HitPoints: 1,
              Intelligence: {
                MaxAdditionalLanguages: 3,
                MaxSpellLevel: 6,
                NewSpellUnderstandingChance: 55,
                Score: 12,
                SpellsPerLevel: '4/6',
              },
              Strength: { Carry: 10, Damage: 0, Doors: '1-2', Score: 15, ToHit: 1 },
              Wisdom: { Score: 15 },
            },
          },
          id: 'character-name1720287080808',
          items: {
            'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 },
            Plate: { ascArmorClass: 6, cost: 100, name: 'Plate', quantity: 1, weight: 70 },
            Shield: { ascArmorClass: 1, cost: 15, name: 'Shield', quantity: 1, weight: 10 },
            'Sword, Bastard': { cost: 20, damage: 'd8', flags: 3, name: 'Sword, Bastard', quantity: 1, weight: 10 },
          },
          name: 'Fighter',
        },
        'character-name1720287096634': {
          character: {
            characterClass: 'Paladin',
            stats: {
              Charisma: { MaxNumberOfSpecialHirelings: 5, Score: 14 },
              Constitution: { HitPoints: 0, RaiseDeadSurvivalChance: '75%', Score: 11 },
              Dexterity: { ArmorClass: 0, MissilesToHit: 0, Score: 11 },
              Gold: 100,
              HitPoints: 6,
              Intelligence: {
                MaxAdditionalLanguages: 0,
                MaxSpellLevel: 4,
                NewSpellUnderstandingChance: 30,
                Score: 4,
                SpellsPerLevel: '2/4',
              },
              Strength: { Carry: 5, Damage: 0, Doors: '1-2', Score: 9, ToHit: 0 },
              Wisdom: { Score: 10 },
            },
          },
          id: 'character-name1720287096634',
          items: { 'Basic accessories': { cost: 0, name: 'Basic accessories', quantity: 1, weight: 8 } },
          name: 'Paladin',
        },
      }),
    )
  })

  await page.goto('http://localhost:3000', { waitUntil: 'load' })
}

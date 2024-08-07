import { Dice } from '../Dice'
import { SavingThrow } from './SavingThrow'

export enum CharacterClass {
  Assassin = 'Assassin',
  Cleric = 'Cleric',
  Druid = 'Druid',
  Fighter = 'Fighter',
  MagicUser = 'MagicUser',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Ranger = 'Ranger',
  Thief = 'Thief',
}

export enum CharacterRace {
  Human = 'Human',
  Dwarf = 'Dwarf',
  Elf = 'Elf',
  HalfElf = 'HalfElf',
  Hobbit = 'Hobbit',
}

export enum AttrScore {
  Strength = 'Strength',
  Dexterity = 'Dexterity',
  Constitution = 'Constitution',
  Intelligence = 'Intelligence',
  Wisdom = 'Wisdom',
  Charisma = 'Charisma',
}

export enum Alignment {
  Chaotic = 'Chaotic',
  Neutral = 'Neutral',
  Lawful = 'Lawful',
}

export type PrimeAttribute = [AttrScore, number]

export interface CharacterClassDef {
  name: CharacterClass
  PrimeAttr: PrimeAttribute[]
  StrictAttr?: PrimeAttribute[]
  HitDice: Dice
  ArmorPermitted: string
  WeaponsPermitted: string
  Race: CharacterRace[]
  Alignment: Alignment[]
  SavingThrow: SavingThrow
  $isCaster?: boolean
  $spellsAtTheFirstLevel?: number
  $meta?: string
}

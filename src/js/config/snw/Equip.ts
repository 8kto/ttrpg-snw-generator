import { EquipItem, InventoryItemFlag } from '../../domain/Equipment'

export const Armor: Array<EquipItem> = [
  { cost: 15, name: 'Shield', weight: 10, ascArmorClass: 1 },
  { cost: 5, name: 'Leather', weight: 25, ascArmorClass: 2 },
  { cost: 30, name: 'Ring', weight: 40, ascArmorClass: 3 },
  { cost: 75, name: 'Chain', weight: 50, ascArmorClass: 4 },
  { cost: 100, name: 'Plate', weight: 70, ascArmorClass: 6 },
]

export const Weapons: Array<EquipItem> = [
  { cost: 2, name: 'Arrows (20)', weight: 1, damage: 'd6', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 2, name: 'Bolts, heavy (20)', weight: 1, damage: 'd6+1', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 2, name: 'Bolts, light (20)', weight: 1, damage: 'd4+1', flags: InventoryItemFlag.TYPE_MISSILE },
  {
    cost: 5,
    name: 'Axe, Battle',
    weight: 15,
    flags: InventoryItemFlag.VAR_HANDED | InventoryItemFlag.TWO_HANDED | InventoryItemFlag.TYPE_MELEE,
    damage: 'd8',
  },
  {
    cost: 1,
    name: 'Axe, Hand',
    weight: 5,
    flags: InventoryItemFlag.MELEE_AND_MISSILE | InventoryItemFlag.TYPE_MELEE,
    damage: 'd6',
  },
  { cost: 60, name: 'Bow, Long', weight: 5, damage: '', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 15, name: 'Bow, Short', weight: 5, damage: '', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 0, name: 'Club', weight: 10, damage: 'd4', flags: InventoryItemFlag.TYPE_MELEE },
  { cost: 20, name: 'Crossbow, Heavy', weight: 5, damage: '', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 12, name: 'Crossbow, Light', weight: 5, damage: '', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 2, name: 'Dagger', weight: 2, flags: InventoryItemFlag.MELEE_AND_MISSILE, damage: 'd4' },
  { cost: 0.2, name: 'Dart', weight: 1, damage: 'd3', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 0.5, name: 'Javelin', weight: 5, damage: 'd6', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 10, name: 'Mace', weight: 10, damage: 'd6', flags: InventoryItemFlag.TYPE_MELEE },
  { cost: 1, name: 'Sling', weight: 0, damage: 'd4', flags: InventoryItemFlag.TYPE_MISSILE },
  { cost: 0, name: 'Sling Stones (20)', weight: 5, damage: 'd4', flags: InventoryItemFlag.TYPE_MISSILE },
  {
    cost: 1,
    name: 'Spear',
    weight: 10,
    flags: InventoryItemFlag.VAR_HANDED | InventoryItemFlag.MELEE_AND_MISSILE | InventoryItemFlag.TWO_HANDED,
    damage: 'd6',
  },
  { cost: 0, name: 'Staff', weight: 10, damage: 'd6', flags: InventoryItemFlag.TYPE_MELEE },
  { cost: 8, name: 'Sword, Short', weight: 5, damage: 'd6', flags: InventoryItemFlag.TYPE_MELEE },
  {
    cost: 20,
    name: 'Sword, Bastard',
    weight: 10,
    flags: InventoryItemFlag.VAR_HANDED | InventoryItemFlag.TWO_HANDED | InventoryItemFlag.TYPE_MELEE,
    damage: 'd8',
  },
  { cost: 15, name: 'Sword, Long', weight: 10, damage: 'd8', flags: InventoryItemFlag.TYPE_MELEE },
  { cost: 30, name: 'Sword, Two-Handed', weight: 15, damage: 'd10', flags: InventoryItemFlag.TYPE_MELEE },
  { cost: 1, name: 'Hammer, war', weight: 10, damage: 'd4+1', flags: InventoryItemFlag.TYPE_MELEE },
]

export const Equip: Array<EquipItem> = [
  { cost: 0, name: 'Basic accessories', weight: 8 },
  { cost: 5, name: 'Backpack', weight: 2 },
  { cost: 2, name: 'Barrel', weight: 25 },
  { cost: 1, name: 'Bedroll', weight: 5 },
  { cost: 1, name: 'Bell', weight: 0 },
  { cost: 5, name: 'Block and tackle', weight: 2 },
  { cost: 2, name: 'Bottle of wine, glass', weight: 6 },
  { cost: 0.01, name: 'Candle', weight: 0.5 },
  { cost: 0.1, name: 'Canvas (per square yard)', weight: 0.5 },
  { cost: 1, name: 'Case (map or scroll)', weight: 1 },
  { cost: 30, name: 'Chain (10 feet)', weight: 50 },
  { cost: 0.05, name: 'Chalk, 1 piece', weight: 0 },
  { cost: 2, name: 'Chest', weight: 25 },
  { cost: 0.2, name: 'Crowbar', weight: 10 },
  { cost: 4, name: 'Fishing net (25 square feet)', weight: 5 },
  { cost: 0.03, name: 'Flask, leather', weight: 0.5 },
  { cost: 1, name: 'Flint & steel', weight: 1 },
  { cost: 10, name: 'Garlic, charmed', weight: 0 },
  { cost: 1, name: 'Grappling Hook', weight: 4 },
  { cost: 0.5, name: 'Hammer', weight: 2 },
  { cost: 1, name: 'Holy symbol, wooden', weight: 0 },
  { cost: 25, name: 'Holy symbol, silver', weight: 0.5 },
  { cost: 25, name: 'Holy water (flask)', weight: 1 },
  { cost: 1, name: 'Ink (1-ounce bottle)', weight: 0.1 },
  { cost: 0.05, name: 'Ladder (10 foot)', weight: 20 },
  { cost: 0.1, name: 'Lamp, bronze', weight: 2 },
  { cost: 12, name: 'Lantern, bullseye', weight: 3 },
  { cost: 7, name: 'Lantern, hooded', weight: 2 },
  { cost: 20, name: 'Lock', weight: 1 },
  { cost: 15, name: 'Manacles', weight: 5 },
  { cost: 20, name: 'Mirror', weight: 0.5 },
  { cost: 5, name: 'Musical instrument', weight: 3 },
  { cost: 0.1, name: 'Oil, lamp (1 pint)', weight: 1 },
  { cost: 0.2, name: 'Parchment (sheet)', weight: 0.5 },
  { cost: 0.2, name: 'Pole (10 foot)', weight: 10 },
  { cost: 0.5, name: 'Pot, iron', weight: 5 },
  { cost: 1, name: 'Rations, trail', weight: 2 },
  { cost: 0.5, name: 'Rations, dried', weight: 2 },
  { cost: 1, name: 'Rope, hemp (50 feet)', weight: 5 },
  { cost: 10, name: 'Rope, silk (50 feet)', weight: 2 },
  { cost: 1, name: 'Sack (15 pounds capacity)', weight: 1 },
  { cost: 2, name: 'Sack, (30 pounds capacity)', weight: 2 },
  { cost: 2, name: 'Shovel', weight: 5 },
  { cost: 0.5, name: 'Signal whistle', weight: 0 },
  { cost: 25, name: 'Spellbook, blank', weight: 1 },
  { cost: 0.05, name: 'Spike, iron', weight: 2 },
  { cost: 10, name: 'Tent', weight: 20 },
  { cost: 0.01, name: 'Torch', weight: 1 },
  { cost: 1, name: 'Waterskin', weight: 2 },
  { cost: 0.1, name: 'Wolfsbane', weight: 0.5 },
]

export const AllEquipment: Array<EquipItem> = [...Armor, ...Weapons, ...Equip]

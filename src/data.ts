function perc(p: number): number {
  return Math.floor(p * 1000) / 10
}

export enum Rarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Legendary = 'legendary',
  Boss = 'boss',
  Lunar = 'lunar',
  Equipment = 'equipment',
}
export enum StackType {
  Linear = 'linear',
  Exponential = 'exponential',
  Hyperbolic = 'hyperbolic',
  Special = 'special',
  Lunar = 'lunar',
}

export interface Item {
  name: string
  class: string
  rarity: Rarity
  amount: number
  stack: StackType[]
  effect: (amount?: number, equipment?: Equipment) => string
}

export const items: Item[] = [
  {
    name: 'Armor-Piercing Rounds',
    class: 'armor-piercing-rounds',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Deal an additional <span class="number">${20 * amount}%</span> damage <small>(20 +20% per stack)</small> to bosses.`
  },
  {
    name: 'Backup Magazine',
    class: 'backup-magazine',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Add <span class="number">+${1 + amount}</span> <small>(1 +1 per stack)</small> charge of your Secondary skill.`
  },
  {
    name: 'Bundle of Fireworks',
    class: 'bundle-of-fireworks',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Activating an interactable launches <span class="number">${8 + 4 * (amount - 1)}</span> <small>(8 +4 per stack)</small> fireworks that deal 300% base damage.`
  },
  {
    name: 'Bustling Fungus',
    class: 'bustling-fungus',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `After standing still for 2 seconds, create a zone that heals for <span class="number">${4.5 + amount * 2.25}%</span> <small>(4.5 +2.25% per stack)</small> of your health every second to all allies within <span class="number">${4.5 + amount * 1.5}m</span> <small>(3 +1.5m per stack)</small>.`
  },
  {
    name: 'Cautious Slug',
    class: 'cautious-slug',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases passive health regeneration by <span class="number">${3 + amount * 3} hp/s</span> <small>(3 +3 hp/s per stack)</small> while outside of combat.`
  },
  {
    name: 'Crowbar',
    class: 'crowbar',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Deal <span class="number">${150 + 50 * amount}%</span> <small>(150% +50% per stack)</small> damage to enemies above 90% health.`
  },
  {
    name: 'Energy Drink',
    class: 'energy-drink',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Sprint speed is improved by <span class="number">${30 + 20 * amount}%</span> <small>(30 +20% per stack)</small>.`
  },
  {
    name: 'Focus Crystal',
    class: 'focus-crystal',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increase damage to enemies within 13m by <span class="number">${15 + 15 * amount}%</span> <small>(15 +15% per stack)</small>.`
  },
  {
    name: 'Fresh Meat',
    class: 'fresh-meat',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases base health regeneration by +2 hp/s for <span class="number">${3 + 3 * amount}s</span> <small>(3 +3s per stack)</small> after killing an enemy.`
  },
  {
    name: 'Gasoline',
    class: 'gasoline',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gasoline Killing an enemy ignites all enemies within <span class="number">${12 + 4 * amount}m</span> <small>(12 +4m per stack)</small>. Enemies burn for <span class="number">${150 + 75 * amount}%</span> <small>(150 +75% per stack)</small> base damage.`
  },
  {
    name: 'Item Scrap, White',
    class: 'item-scrap-white',
    rarity: Rarity.Common,
    amount: 1,
    stack: [],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Does nothing. Prioritized when used with 3D Printers.`
  },
  {
    name: "Lens-Maker's Glasses",
    class: 'lens-makers-glasses',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Your attacks have a <span class="number">${10 + 10 * amount}%</span> <small>(10 +10% per stack)</small> chance to 'Critically Strike', dealing double damage.`
  },
  {
    name: 'Medkit',
    class: 'medkit',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Heal for <span class="number">${10 + 10 * amount}</span> <small>(10 +10 per stack)</small> health 1.1 seconds after getting hurt.`
  },
  {
    name: 'Monster Tooth',
    class: 'monster-tooth',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing an enemy spawns a healing orb that heals for <span class="number">${8 + 8 * amount}</span> <small>(8 +8 per stack)</small> health.`
  },
  {
    name: "Paul's Goat Hoof",
    class: 'pauls-goat-hoof',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases movement speed by <span class="number">${14 + 14 * amount}%</span> <small>(14 +14% per stack)</small>.`
  },
  {
    name: 'Personal Shield Generator',
    class: 'personal-shield-generator',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain a shield equal to <span class="number">${8 + 8 * amount}%</span> <small>(8 +8% per stack)</small> of your maximum health. Recharges outside of danger.`
  },
  {
    name: 'Repulsion Armor Plate',
    class: 'repulsion-armor-plate',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Reduce all incoming damage by <span class="number">${5 + 5 * amount}</span> <small>(5 +5 per stack)</small>. Cannot be reduced below 1.`
  },
  {
    name: 'Rusted Key',
    class: 'rusted-key',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Special],
    // prettier-ignore
    effect: () => `A hidden cache containing an item will appear in a random location on each stage. <small>(Increases rarity of the item per stack)</small>.`
  },
  {
    name: "Soldier's Syringe",
    class: 'soldiers-syringe',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases attack speed by <span class="number">${15 + 15 * amount}%</span> <small>(15 +15% per stack)</small>.`
  },
  {
    name: 'Sticky Bomb',
    class: 'sticky-bomb',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${5 + 5 * amount}%</span> <small>(5 +5% per stack)</small> chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.`
  },
  {
    name: 'Stun Grenade',
    class: 'stun-grenade',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Hyperbolic],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${perc(1 - 1 / (1 + 0.05 * amount))}%</span> <small>(5 +5% on stack)</small> chance on hit to stun enemies for 2 seconds.`
  },
  {
    name: 'Topaz Brooch',
    class: 'topaz-brooch',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain a temporary barrier on kill for <span class="number">${15 + 15 * amount}</span> health <small>(15 +15 per stack)</small>.`
  },
  {
    name: 'Tougher Times',
    class: 'tougher-times',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Hyperbolic],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${perc(1 - 1 / (1 + 0.15 * amount))}%</span> <small>(15 +15% per stack)</small> chance to block incoming damage. Unaffected by luck.`
  },
  {
    name: 'Tri-Tip Dagger',
    class: 'tri-tip-dagger',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${15 + 15 * amount}%</span> <small>(15 +15% per stack)</small> chance to bleed an enemy for 240% base damage.`
  },
  {
    name: 'Warbanner',
    class: 'warbanner',
    rarity: Rarity.Common,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `On level up drop a banner that strengthens all allies within <span class="number">${16 + 8 * amount}m</span> <small>(16 +8m per stack)</small>. Raise attack and movement speed by 30%.`
  },
  {
    name: 'AtG Missile Mk. 1',
    class: 'atg-missile-mk-1',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `10% chance to fire a missile that deals <span class="number">${300 + 300 * amount}%</span> <small>(300% +300% per stack)</small> TOTAL damage.`
  },
  {
    name: 'Bandolier',
    class: 'bandolier',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Special],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${1 - 1 / (1 + amount) ^ 0.33}%</span> <small>(18 +10% per stack)</small> chance on kill to drop an ammo pack that resets all skill cooldowns.`
  },
  {
    name: "Berzerker's Pauldron",
    class: 'berzerkers-pauldron',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing 3 enemies within 1 second sends you into a frenzy for <span class="number">${6 + 4 * amount}s</span> <small>(6 +4s per stack)</small>. Increases movement speed by 50% and attack speed by 100%.`
  },
  {
    name: 'Chronobauble',
    class: 'chronobauble',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Slow enemies on hit for -60% movement speed for <span class="number">${2 + 2 * amount}s</span> <small>(2 +2s per stack)</small>.`
  },
  {
    name: 'Fuel Cell',
    class: 'fuel-cell',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear, StackType.Exponential],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Hold an additional equipment charge ${1 + 1 * amount} (1 +1 per stack). Reduce equipment to <span class="number">${(equipment ? equipment.cooldown : 0) * (1 - 0.15) ^ amount}s</span> <small>(+15% per stack)</small>.`
  },
  {
    name: "Ghor's Tome",
    class: 'ghors-tome',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${4 + 4 * amount}%</span> <small>(4 +4% on stack)</small> chance on kill to drop a treasure worth $25. Scales over time.`
  },
  {
    name: "Harvester's Scythe",
    class: 'harvesters-scythe',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain 5% critical chance (+0% per stack). Critical strikes heal for <span class="number">${8 + 4 * amount}</span> <small>(8 +4 per stack)</small> health.`
  },
  {
    name: 'Hopoo Feather',
    class: 'hopoo-feather',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain <span class="number">+${1 + 1 * amount}</span> <small>(1 +1 per stack)</small> maximum jump amount.`
  },
  {
    name: 'Infusion',
    class: 'infusion',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing an enemy increases your health permanently by 1, up to a maximum of <span class="number">${100 + 100 * amount}</span> <small>(100 +100 per stack)</small> health.`
  },
  {
    name: 'Item Scrap, Green',
    class: 'item-scrap-green',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Does nothing. Prioritized when used with 3D Printers.`
  },
  {
    name: "Kjaro's Band",
    class: 'kjaros-band',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `8% chance on hit to strike an enemy with a runic flame tornado, dealing <span class="number">${500 + 250 * amount}%</span> <small>(500 +250% per stack)</small> TOTAL damage.`
  },
  {
    name: 'Leeching Seed',
    class: 'leeching-seed',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Dealing damage heals you for <span class="number">${1 + 1 * amount}</span> <small>(1 +1 per stack)</small> health.`
  },
  {
    name: 'Lepton Daisy',
    class: 'lepton-daisy',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs <span class="number">${1 + 1 * amount}</span> <small>(! +1 per stack)</small> times.`
  },
  {
    name: 'Old Guillotine',
    class: 'old-guillotine',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Hyperbolic],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Instantly kill Elite monsters below <span class="number">${perc(1 - 1 / (1 + 0.13 * amount))}%</span> <small>(20 +20% per stack)</small> health.`
  },
  {
    name: 'Old War Stealthkit',
    class: 'old-war-stealthkit',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Chance on taking damage to gain 40% movement speed and invisibility for <span class="number">${3 + 1.5 * amount}s</span> <small>(3 +1.5s per stack)</small>. Chance increases the more damage you take.`
  },
  {
    name: 'Predatory Instincts',
    class: 'predatory-instincts',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of <span class="number">${36 + 24 * amount}%</span> <small>(36 +24% per stack)</small> attack speed.`
  },
  {
    name: 'Razorwire',
    class: 'razorwire',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to <span class="number">${5 + 2 * amount}</span> (5 +2 per stack) targets in a <span class="number">${25 + 10 * amount}m</span> <small>(25 +10m per stack)</small> radius`
  },
  {
    name: 'Red Whip',
    class: 'red-whip',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Leaving combat boosts your movement speed by <span class="number">${30 + 30 * amount}%</span> <small>(30 +30% per stack)</small>.`
  },
  {
    name: 'Rose Buckler',
    class: 'rose-buckler',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increase armor by <span class="number">${30 + 30 * amount}</span> <small>(30 +30 per stack)</small> while sprinting.`
  },
  {
    name: "Runald's Band",
    class: 'runalds-band',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `8% chance on hit to strike an enemy with a runic ice blast, slowing them by 80% and dealing <span class="number">${250 + 125 * amount}%</span> <small>(250 +125% per stack)</small> TOTAL damage.`
  },
  {
    name: 'Ukulele',
    class: 'ukulele',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `25% chance to fire chain lighting for 80% TOTAL damage on up to ${3 + 2 * amount} (3 +2 per stack) targets within <span class="number">${20 + 2 * amount}m</span> <small>(20 +2m per stack)</small>.`
  },
  {
    name: 'War Horn',
    class: 'war-horn',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Activating your Equipment gives you +70% attack speed for <span class="number">${8 + 4 * amount}s</span> <small>(8 +4s per stack)</small>.`
  },
  {
    name: 'Wax Quail',
    class: 'wax-quail',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Jumping while sprinting boosts you forward by <span class="number">${10 + 10 * amount}m</span> <small>(10 +10m per stack)</small>.`
  },
  {
    name: "Will-o'-the-wisp",
    class: 'will-o-the-wisp',
    rarity: Rarity.Uncommon,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `On killing an enemy, spawn a lava pillar in a <span class="number">${12 + 2.4 * amount}m</span> (12 +2.4m per stack) radius for <span class="number">${350 + 280 * amount}%</span> <small>(350 +280% per stack)</small> base damage.`
  },
  {
    name: '57 Leaf Clover',
    class: 'leaf-clover',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `All random effects are rolled <span class="number">+${1 + 1 * amount}</span> <small>(1 +1 per stack)</small> times for a favorable outcome.`
  },
  {
    name: 'Aegis',
    class: 'aegis',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Healing past full grants you a temporary barrier for <span class="number">${50 + 50 * amount}%</span> <small>(50 +50% per stack)</small> of the amount you healed.`
  },
  {
    name: 'Alien Head',
    class: 'alien-head',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Exponential],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Reduce skill cooldowns to <span class="number">${(equipment ? equipment.cooldown : 0) * 0.75 ^ amount}s</span> <small>(25 +25% per stack)</small>.`
  },
  {
    name: 'Brainstalks',
    class: 'brainstalks',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Upon killing an elite monster, enter a frenzy for <span class="number">${4 + 4 * amount}s</span> <small>(4 +4s per stack)</small> where skills have no cooldowns.`
  },
  {
    name: 'Brilliant Behemoth',
    class: 'brilliant-behemoth',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `All your attacks explode in a <span class="number">${4 + 2.5 * amount}m</span> <small>(4 +2.5m per stack)</small> radius for a bonus 60% TOTAL damage to nearby enemies.`
  },
  {
    name: 'Ceremonial Dagger',
    class: 'ceremonial-dagger',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing an enemy fires out 3 homing daggers that deal <span class="number">${150 + 150 * amount}%</span> <small>(150 +150% per stack)</small> base damage.`
  },
  {
    name: "Dio's Best Friend",
    class: 'dios-best-friend',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.`
  },
  {
    name: 'Frost Relic',
    class: 'frost-relic',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to <span class="number">${6 + 6 * amount}m</span> <small>(6 +6m per stack)</small>.`
  },
  {
    name: 'H3AD-5T v2',
    class: 'h3ad-5t-v2',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Exponential],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increase jump height. Creates a 10m radius kinetic explosion on hitting the ground, dealing 2300% base damage that scales up with speed. Recharges in <span class="number">${perc(10 * 0.5 ^ (amount - 1))}</span> <small>(10 -50% per stack)</small> seconds.`
  },
  {
    name: 'Happiest Mask',
    class: 'happiest-mask',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts <span class="number">${30 + 30 * amount}s</span> <small>(30 +30s per stack)</small>.`
  },
  {
    name: 'Hardlight Afterburner',
    class: 'hardlight-afterburner',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Add <span class="number">+${2 + 2 * amount}</span> <small>(2 +2 per stack)</small> charges of your Utility skill. Reduces Utility skill cooldown by 33%.`
  },
  {
    name: 'Interstellar Desk Plant',
    class: 'interstellar-desk-plant',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 10% of maximum health every second to all allies within <span class="number">${5 + 5 * amount}m</span> <small>(5 +5m per stack)</small>. Lasts 10 seconds.`
  },
  {
    name: 'Item Scrap, Red',
    class: 'item-scrap-red',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Does nothing. Prioritized when used with 3D Printers.`
  },
  {
    name: "N'kuhana's Opinion",
    class: 'nkuhanas-opinion',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Store <span class="number">${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.`
  },
  {
    name: 'Rejuvenation Rack',
    class: 'rejuvenation-rack',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Heal <span class="number">+${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> more.`
  },
  {
    name: 'Resonance Disc',
    class: 'resonance-disc',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Killing enemies charges the Resonance Disc. The disc launches itself toward a target for <span class="number">${300 + 300 * amount}%</span> base damage <small>(300 +300% per stack)</small>, piercing all enemies it doesn't kill, and then explodes for <span class="number">${1000 + 1000 * amount}%</span> base damage <small>(1000 +1000% per stack)</small>. Returns to the user, striking all enemies along the way for <span class="number">${300 + 300 * amount}%</span> base damage <small>(300 +300% per stack)</small>.`
  },
  {
    name: 'Sentient Meat Hook',
    class: 'sentient-meat-hook',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear, StackType.Hyperbolic],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `<span class="number">${perc(1 - 1 / (1 + 0.2 * amount))}%</span> <small>(20 +20% per stack)</small> chance on hit to fire homing hooks at up to <span class="number">${10 + 5 * amount}</span> <small>(10 +5 per stack)</small> enemies for 100% TOTAL damage.`
  },
  {
    name: 'Shattering Justice',
    class: 'shattering-justice',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `After hitting an enemy 5 times, reduce their armor by 60 for <span class="number">${8 + 8 * amount}</span> <small>(8 +8 per stack)</small> seconds.`
  },
  {
    name: 'Soulbound Catalyst',
    class: 'soulbound-catalyst',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Kills reduce equipment cooldown by <span class="number">${4 + 2 * amount}s</span> <small>(4 +2s per stack)</small>.`
  },
  {
    name: 'Unstable Tesla Coil',
    class: 'unstable-tesla-coil',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Fire out lightning that hits <span class="number">${3 + 2 * amount}</span> <small>(3 +2 per stack)</small> enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.`
  },
  {
    name: 'Wake of Vultures',
    class: 'wake-of-vultures',
    rarity: Rarity.Legendary,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Gain the power of any killed elite monster for <span class="number">${8 + 5 * amount}s</span> <small>(8 +5s per stack)</small>.`
  },
  {
    name: 'Genesis Loop',
    class: 'genesis-loop',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every <span class="number">${30 / (amount + 1)}</span> seconds <small>(30 -50% per stack)</small>.`
  },
  {
    name: 'Halcyon Seed',
    class: 'halcyon-seed',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Summon Aurelionite during the teleporter event. It has <span class="number">${100 + 50 * amount}%</span> <small>(100 +50% per stack)</small> damage and <span class="number">${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> health.`
  },
  {
    name: 'Irradiant Pearl',
    class: 'irradiant-pearl',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases ALL stats by <span class="number">${10 + 10 * amount}%</span> <small>(10 +10% per stack)</small>.`
  },
  {
    name: 'Item Scrap, Yellow',
    class: 'item-scrap-yellow',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Does nothing. Prioritized when used with 3D Printers.`
  },
  {
    name: 'Little Disciple',
    class: 'little-disciple',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Fire a tracking wisp for <span class="number">${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> damage. Fires every 0.5 seconds while sprinting.`
  },
  {
    name: 'Pearl',
    class: 'pearl',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increases maximum health by <span class="number">${10 + 10 * amount}%</span> <small>(10 +10% per stack)</small>.`
  },
  {
    name: "Queen's Gland",
    class: 'queens-gland',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to <span class="number">${1 + 1 * amount}</span> <small>(1 +1 per stack)</small> Guards at a time.`
  },
  {
    name: 'Titanic Knurl',
    class: 'titanic-knurl',
    rarity: Rarity.Boss,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increase maximum health by <span class="number">${40 + 40 * amount}</span> <small>(40 +40 per stack)</small> and health regeneration by <span class="number">${1.6 + 1.6 * amount}</span> <small>(1.6 +1.6 per stack)</small> health / second.`
  },
  {
    name: 'Beads of Fealty',
    class: 'beads-of-fealty',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Seems to do nothing... but...`
  },
  {
    name: 'Brittle Crown',
    class: 'brittle-crown',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `30% chance on hit to gain <span class="number">${2 + 2 * amount}</span> gold <small>(2 +2 per stack)</small>. Scales over time. Lose gold on taking damage equal to <span class="number">${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> of the maximum health percentage you lost.`
  },
  {
    name: 'Corpsebloom',
    class: 'corpsebloom',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Heal <span class="number">+${100 + 100 * amount}%</span> <small>(100 +100% per stack)</small> more. All healing is applied over time. Can heal for a maximum of <span class="number">${perc(0.1 * 0.5 ^ (amount - 1))}%</span> <small>(reduced by 50% per stack)</small> of your health per second.`
  },
  {
    name: 'Defiant Gouge',
    class: 'defiant-gouge',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: () => `Using a Shrine summons enemies <small>(stronger per stack)</small> nearby. Scales over time.`
  },
  {
    name: 'Focused Convergence',
    class: 'focused-convergence',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1 ) => `Teleporters charge <span class="number">${30 + 30 * amount}%</span> <small>(30 +30% per stack)</small> faster, but the size of the Teleporter zone is <span class="number">${perc(90 / (1 + 0.3 * amount))}%</span> <small>(50 -50% per stack)</small> smaller.`
  },
  {
    name: 'Gesture of the Drowned',
    class: 'gesture-of-the-drowned',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Reduce Equipment cooldown to <span class="number">${(equipment ? equipment.cooldown : 0) * 0.5 * (1 - 0.15) ^ (amount - 1)}s</span> <small>(50 +15% per stack)</small>. Forces your Equipment to activate whenever it is off cooldown.`
  },
  {
    name: 'Shaped Glass',
    class: 'shaped-glass',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Increase base damage by <span class="number">(damage * ${perc(2 ^ amount)}%)</span> <small>(100 +100% per stack)</small>. Reduce maximum health by <span class="number">health *${ 0.5 ^ amount}%</span> <small>(50 +50% per stack)</small>.`
  },
  {
    name: 'Strides of Heresy',
    class: 'strides-of-heresy',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for <span class="number">${25 + 25 * amount}%</span> <small>(25 +25% per stack)</small> of your maximum health. Lasts <span class="number">${3 + 3 * amount}</span> <small>(3 +3 per stack)</small> seconds.`
  },
  {
    name: 'Transcendence',
    class: 'transcendence',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Convert all but 1 health into regenerating shields. Gain <span class="number">${50 + 25 * amount}%</span> <small>(50 +25% per stack)</small> maximum health.`
  },
  {
    name: 'Visions of Heresy',
    class: 'visions-of-heresy',
    rarity: Rarity.Lunar,
    amount: 1,
    stack: [StackType.Linear],
    // prettier-ignore
    effect: (amount = 1, equipment?: Equipment) => `Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to <span class="number">${12 + 12 * amount}</span> charges (12 +12 per stack) that reload after <span class="number">${2 + 2 * amount}</span> seconds <small>(2 +2 per stack)</small>.`
  },
]

export interface Equipment {
  name: string
  class: string
  rarity: Rarity
  cooldown: number
  effect: string
}

export const equipment: Equipment[] = [
  {
    name: 'Blast Shower',
    class: 'blast-shower',
    effect: `Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.`,
    cooldown: 20,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Disposable Missile Launcher',
    class: 'disposable-missile-launcher',
    effect: `Fire a swarm of 12 missiles that deal 12x300% damage.`,
    cooldown: 45,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Eccentric Vase',
    class: 'eccentric-vase',
    effect: `Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.`,
    cooldown: 45,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Foreign Fruit',
    class: 'foreign-fruit',
    effect: `Instantly heal for 50% of your maximum health.`,
    cooldown: 45,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Fuel Array',
    class: 'fuel-array',
    effect: `Looks like it could power something. EXTREMELY unstable...`,
    cooldown: 0,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Gnarled Woodsprite',
    class: 'gnarled-woodsprite',
    effect: `Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.`,
    cooldown: 15,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Jade Elephant',
    class: 'jade-elephant',
    effect: `Gain 500 armor for 5 seconds.`,
    cooldown: 45,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Milky Chrysalis',
    class: 'milky-chrysalis',
    effect: `Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.`,
    cooldown: 60,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Ocular HUD',
    class: 'ocular-hud',
    effect: `Gain +100% Critical Strike Chance for 8 seconds.`,
    cooldown: 60,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Preon Accumulator',
    class: 'preon-accumulator',
    effect: `Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.`,
    cooldown: 140,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Primordial Cube',
    class: 'primordial-cube',
    effect: `Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds`,
    cooldown: 60,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Radar Scanner',
    class: 'radar-scanner',
    effect: `Reveal all interactables within 500m for 10 seconds.`,
    cooldown: 45,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Royal Capacitor',
    class: 'royal-capacitor',
    effect: `Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.`,
    cooldown: 20,
    rarity: Rarity.Equipment,
  },
  {
    name: 'The Back-up',
    class: 'the-back-up',
    effect: `Call 4 Strike Drones to fight for you. Lasts 25 seconds.`,
    cooldown: 100,
    rarity: Rarity.Equipment,
  },
  {
    name: 'The Crowdfunder',
    class: 'the-crowdfunder',
    effect: `Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.`,
    cooldown: 0,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Volcanic Egg',
    class: 'volcanic-egg',
    effect: `Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.`,
    cooldown: 30,
    rarity: Rarity.Equipment,
  },
  {
    name: 'Effigy of Grief',
    class: 'effigy-of-grief',
    effect: `ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.`,
    cooldown: 45,
    rarity: Rarity.Lunar,
  },
  {
    name: 'Glowing Meteorite',
    class: 'glowing-meteorite',
    effect: `Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.`,
    cooldown: 140,
    rarity: Rarity.Lunar,
  },
  {
    name: 'Helfire Tincture',
    class: 'helfire-tincture',
    effect: `Ignite ALL characters within 15m for 12s. Deal 5% of your maximum health/second as burning to yourself. The burn is 0.5x stronger on allies, and 24x stronger on enemies.`,
    cooldown: 45,
    rarity: Rarity.Lunar,
  },
  {
    name: 'Spinel Tonic',
    class: 'spinel-tonic',
    effect: `Spinel Tonic	Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%. When the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).`,
    cooldown: 60,
    rarity: Rarity.Lunar,
  },
]

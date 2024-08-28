const Character = require('./Character')

const Thief = require('./Thief')

const Mage = require('./Mage')

const Warrior = require('./Warrior')

const Samuel = new Warrior('Samuel', 20, 70, 100, 90, 'attack')

const Jovencio = new Mage('Jovencio', 90, 10, 75, 100)

const Venicio = new Thief('Venicio', 10, 12, 18)

Samuel.attack_warrior(Samuel) 

Samuel.changeStance()

Samuel.attack_warrior(Samuel)  

// Os dois tentando roubar o cargo do saruel ksksksk

Jovencio.heal_mage(Samuel)

Venicio.attack_thief(Samuel) 
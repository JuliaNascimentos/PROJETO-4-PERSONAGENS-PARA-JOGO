const Character = require('./Character')

class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts, position) {
      super(name, lifepoints, attackPts, defensePts)
      this.shieldPts = shieldPts
      this.position = position
    }
  
    attack_warrior(target) {
        if (this.position === 'attack') {
            const damage = this.attackPts - target.defensePts
            if (damage > 0) {
                target.lifepoints -= damage
                console.log(`${this.name} atacou ${target.name} causando ${damage} de dano!`)
            } else {
                console.log(`${this.name} atacou ${target.name}, mas o ataque foi ineficaz!`)
            }
        } else {
            console.log(`${this.name} está em posição defensiva e não pode atacar.`)
        }
    }
  
    changeStance() {
        if (this.position === 'attack') {
            this.position = 'defense'
            this.defensePts += this.shieldPts
            console.log(`${this.name} mudou para a posição defensiva.`)
        } else {
            this.position = 'attack'
            this.defensePts -= this.shieldPts
            console.log(`${this.name} mudou para a posição ofensiva.`)
        }
    }
}

module.exports = Warrior
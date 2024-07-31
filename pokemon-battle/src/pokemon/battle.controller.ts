import { Controller, Post, Body } from '@nestjs/common';
import { BattleService } from './battle.service';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('battle')
export class BattleController {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly battleService: BattleService,
  ) { }

  @Post()
  async battle(@Body() { pokemon1Id, pokemon2Id }: { pokemon1Id: number; pokemon2Id: number }) {
    const [pokemon1, pokemon2] = await Promise.all([
      this.pokemonService.findOne(pokemon1Id),
      this.pokemonService.findOne(pokemon2Id),
    ]);

    let winner = this.calculateBattle(pokemon1, pokemon2);
    await this.battleService.logBattle(pokemon1.id, pokemon2.id, winner.id);
    return { winner };
  }

  calculateBattle(pokemon1: Pokemon, pokemon2: Pokemon) {
    let turn = 1;
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      if (turn % 2 !== 0) {
        let damage = Math.max(1, pokemon1.attack - pokemon2.defense);
        pokemon2.hp -= damage;
      } else {
        let damage = Math.max(1, pokemon2.attack - pokemon1.defense);
        pokemon1.hp -= damage;
      }
      turn++;
    }
    return pokemon1.hp > 0 ? pokemon1 : pokemon2;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { Battle } from './battle.entity';
import { PokemonService } from './pokemon.service';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
    private pokemonService: PokemonService,
  ) {}

  async logBattle(pokemon1Id: number, pokemon2Id: number, winnerId: number) {
    const battle = this.battleRepository.create({
      pokemon1: await this.pokemonService.findOne(pokemon1Id),
      pokemon2: await this.pokemonService.findOne(pokemon2Id),
      winner: await this.pokemonService.findOne(winnerId),
      timestamp: new Date(),
    });
    return this.battleRepository.save(battle);
  }
}

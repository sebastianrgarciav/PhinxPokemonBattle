import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './pokemon.entity';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { Battle } from './battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Battle])],
  providers: [PokemonService, BattleService],
  controllers: [PokemonController, BattleController],
})
export class PokemonModule {}

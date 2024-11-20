import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import { AdditionService } from './addition.service';
import { SubtractionService } from './subtraction.service';
import { MultiplicationService } from './multiplication.service';

@Module({
  controllers: [CalculatorController],
  providers: [
    CalculatorService,
    AdditionService,
    SubtractionService,
    MultiplicationService,
  ], // Register services
})
export class CalculatorModule {}

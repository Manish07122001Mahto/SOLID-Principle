import { Injectable } from '@nestjs/common';
import { AdditionService } from './addition.service';
import { SubtractionService } from './subtraction.service';
import { MultiplicationService } from './multiplication.service';

@Injectable()
export class CalculatorService {
  constructor(
    private readonly additionService: AdditionService,
    private readonly subtractionService: SubtractionService,
    private readonly multiplicationService: MultiplicationService,
  ) {}

  // Performs the required operation based on the input 'operation'parameter
  calculate(a: number, b: number, operation: string): number {
    switch (operation) {
      case 'add':
        return this.additionService.add(a, b);
      case 'subtract':
        return this.subtractionService.subtract(a, b);
      case 'multiply':
        return this.multiplicationService.multiply(a, b);
      default:
        throw new Error('Invalid operation');
    }
  }
}

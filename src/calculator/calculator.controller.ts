import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator') // Base route for this controller
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  // Endpoint to perform calculations
  @Get()
  calculate(
    @Query('a') a: string, // Query parameters are strings by default
    @Query('b') b: string,
    @Query('operation') operation: string,
  ): string {
    const numA = parseFloat(a); // Convert the string to a number
    const numB = parseFloat(b); // Convert the string to a number

    //NaN = Not a Number
    if (isNaN(numA) || isNaN(numB)) {
      return `Invalid input: a and b must be numbers.`;
    }

    //calling the calculate function present in the CalculatorService
    const result = this.calculatorService.calculate(numA, numB, operation);
    return `The result of ${operation} is: ${result}`;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class SubtractionService {
  subtract(a: number, b: number): number {
    return a - b; // Simply returns the difference of a and b
  }
}

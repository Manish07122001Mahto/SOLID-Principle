import { Injectable } from '@nestjs/common';

@Injectable()
export class MultiplicationService {
  multiply(a: number, b: number): number {
    return a * b; // Simply returns the product of a and b
  }
}

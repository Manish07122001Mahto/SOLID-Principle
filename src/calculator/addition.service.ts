import { Injectable } from '@nestjs/common';

@Injectable()
export class AdditionService {
  add(a: number, b: number): number {
    return a + b; // Simply returns the sum of a and b
  }
}

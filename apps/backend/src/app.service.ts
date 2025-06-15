import { Injectable } from '@nestjs/common';
import { HelloResponseDto } from './dto/hello.dto';

@Injectable()
export class AppService {
  async getHello(): Promise<HelloResponseDto> {
    // Simulate 1 second of processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { msg: 'Hello World!' };
  }
}

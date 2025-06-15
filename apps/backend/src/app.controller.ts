import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HelloResponseDto } from './dto/hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: 200,
    description: 'Returns a greeting message',
    type: HelloResponseDto,
  })
  async getHello(): Promise<HelloResponseDto> {
    return await this.appService.getHello();
  }
}

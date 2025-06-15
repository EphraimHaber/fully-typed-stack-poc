import { ApiProperty } from '@nestjs/swagger';

export class HelloResponseDto {
  @ApiProperty({
    description: 'The greeting message',
    example: 'Hello World!',
    type: () => String,
  })
  msg: string;
}

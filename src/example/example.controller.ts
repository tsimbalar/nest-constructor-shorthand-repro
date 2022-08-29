import { Controller, Get } from '@nestjs/common';
import { FindAllExampleDto } from './dto/findall-example.dto';
import { FindAllShorthandExampleDto } from './dto/findall-shorthand-example.dto';

@Controller('example')
export class ExampleController {
  @Get()
  findAll(): FindAllExampleDto {
    return new FindAllExampleDto();
  }

  @Get('shorthand')
  findAllShorthand(): FindAllShorthandExampleDto {
    return new FindAllShorthandExampleDto([]);
  }
}

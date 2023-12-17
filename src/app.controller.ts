import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TextConvertDto } from './dto/textConvert.dto';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  getHome() {
    return 'API/V1';
  }

  @Post('/text/convertPdf')
  async receiveText(@Body() textConvertDto: TextConvertDto): Promise<void> {
    return this.appService.convertTextToPdf(textConvertDto);
  }
}

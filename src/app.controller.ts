import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TextConvertDto } from './dto/textConvert.dto';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/text/convertPdf')
  async receiveText(@Body() textConvertDto: TextConvertDto): Promise<void> {
    return this.appService.convertTextToPdf(textConvertDto);
  }
}

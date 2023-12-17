import { Injectable } from '@nestjs/common';
import { TextConvertDto } from './dto/textConvert.dto';
import * as PDFKit from 'pdfkit';
import { createWriteStream, promises } from 'fs';

@Injectable()
export class AppService {
  async convertTextToPdf(data: TextConvertDto | TextConvertDto[]): Promise<void> {
    const doc = new PDFKit();
    doc.pipe(createWriteStream('./output.pdf'));
    const dataArray = Array.isArray(data) ? data : [data];
    dataArray.forEach(item => {
      doc.fontSize(18).text(item.title, { align: 'center' }).moveDown();

      const textLines = item.text.split('\n');
      doc.fontSize(12).text(textLines, { align: 'justify' });
      doc.moveDown();
    });

    doc.end();
  }
}

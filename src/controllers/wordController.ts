import { Response, Request } from 'express';
import converter from 'number-to-words';

class WordController {
  static convertNumberToWord(req: Request, res: Response) {
    const { number } = req.body;
    if (!parseInt(number)) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'Please enter an integer'
      })
    }
    const numberInWords = converter.toWords(number);
    return res.status(200).json({
      status: res.statusCode,
      result: numberInWords
    });
  }
};

export default WordController;

import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { validate, SchemaLike } from 'joi';

@Injectable()
export class JoiValidatorPipe implements PipeTransform {
  constructor(
    private readonly schema: SchemaLike,
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    const { error } = validate(value, this.schema);

    if (error) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
}

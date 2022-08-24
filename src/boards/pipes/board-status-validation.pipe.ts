import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status-enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }
  /**
   *
   * @param status private 또는 public
   * @returns index의 값이 -1이 아닐때 true ( StatusOptions의 값에 포함이 안되면 -1 반환 )
   */
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

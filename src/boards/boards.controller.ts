import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './DTO/create-board-dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  /**
   *
   * @param createBoardDto title과 decription 만약 입력쪽 수정사항이 있으면 DTO만 변경
   * @returns 생성된 Board정보 출력
   */
  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardBy(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  /** 리턴값이 없으므로 void */
  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}

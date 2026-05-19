import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { DepartmentsResponseDto } from 'src/departments/departments.dto';
import { DepartmentsService } from 'src/departments/departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private departmentsService: DepartmentsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [DepartmentsResponseDto] })
  findAll(): Promise<DepartmentsResponseDto[]> {
    return this.departmentsService.findAll();
  }
}

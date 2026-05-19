import { Injectable, Logger } from '@nestjs/common';
import { Department } from '@prisma/client';
import { DepartmentsResponseDto } from 'src/departments/departments.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  private readonly logger = new Logger(DepartmentsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<DepartmentsResponseDto[]> {
    this.logger.log(`Fetching departments`);

    const departments = await this.prisma.department.findMany();

    return departments.map((department) => this.mapDepartmentToDto(department));
  }

  private mapDepartmentToDto(department: Department): DepartmentsResponseDto {
    const { id, name, description } = department;

    return {
      id,
      name,
      description,
      created_at: department.createdAt,
      updated_at: department.updatedAt,
    };
  }
}

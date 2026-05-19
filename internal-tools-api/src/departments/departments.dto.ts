import { ApiProperty } from '@nestjs/swagger';

export class DepartmentsResponseDto {
  @ApiProperty({
    type: Number,
    description: 'Tool id',
    example: 1,
    required: true,
  })
  id!: number;

  @ApiProperty({
    type: String,
    description: 'Tool name',
    example: 'Canva',
    required: true,
  })
  name!: string;

  @ApiProperty({
    type: String,
    description: 'Tool description',
    example: 'Graphic design and visual content',
    required: true,
  })
  description!: string | null;

  @ApiProperty({
    type: Date,
    description: 'Creation date',
    example: '2023-12-04T16:30:00Z',
    required: true,
  })
  created_at!: Date | null;

  @ApiProperty({
    type: Date,
    description: 'Update date',
    example: '2023-12-04T16:30:00Z',
    required: true,
  })
  updated_at!: Date | null;
}

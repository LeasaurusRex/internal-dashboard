import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateToolDto {
  @ApiProperty({ type: String, example: 'Canva' })
  @IsString()
  name!: string;

  @ApiProperty({
    type: String,
    example: 'Graphic design tool',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: String, example: 'Canva Pty Ltd', required: false })
  @IsOptional()
  @IsString()
  vendor?: string;

  @ApiProperty({ type: String, example: 'Design' })
  @IsString()
  category!: string;

  @ApiProperty({ type: Number, example: 29.99 })
  @IsNumber()
  monthly_cost!: number;

  @ApiProperty({ type: String, example: 'active' })
  @IsString()
  status!: string;

  @ApiProperty({ type: String, example: 'https://canva.com', required: false })
  @IsOptional()
  @IsUrl()
  website_url?: string;

  @ApiProperty({
    type: String,
    example: 'https://canva.com/icon.png',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  icon_url?: string;

  @ApiProperty({ type: Number, example: 1 })
  @IsNumber()
  owner_department_id!: number;
}

export class ToolResponseDto {
  @ApiProperty({ type: Number, example: 1 })
  id!: number;

  @ApiProperty({ type: String, example: 'Canva' })
  name!: string;

  @ApiProperty({ type: String, example: 'Graphic design tool', nullable: true })
  description!: string | null;

  @ApiProperty({ type: String, example: 'Canva Pty Ltd', nullable: true })
  vendor!: string | null;

  @ApiProperty({ type: String, example: 'Design' })
  category!: string;

  @ApiProperty({ type: Number, example: 29.99 })
  monthly_cost!: number;

  @ApiProperty({ type: Number, example: 25.99, nullable: true })
  previous_month_cost!: number | null;

  @ApiProperty({ type: String, example: 'active' })
  status!: string;

  @ApiProperty({ type: String, example: 'https://canva.com', nullable: true })
  website_url!: string | null;

  @ApiProperty({
    type: String,
    example: 'https://canva.com/icon.png',
    nullable: true,
  })
  icon_url!: string | null;

  @ApiProperty({ type: Number, example: 42 })
  active_users_count!: number;

  @ApiProperty({ type: Number, example: 1 })
  owner_department_id!: number;

  @ApiProperty({ type: Date, example: '2023-12-04T16:30:00Z' })
  created_at!: Date;

  @ApiProperty({ type: Date, example: '2023-12-04T16:30:00Z' })
  updated_at!: Date;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentsModule } from './departments/departments.module';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [PrismaModule, DepartmentsModule, ToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

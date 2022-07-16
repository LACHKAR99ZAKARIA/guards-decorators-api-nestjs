import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { EcoloGuard } from './ecolo.guard';
import { GreenVehicules } from './green-vehicules.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('destination')
  @UseGuards(EcoloGuard)
  @GreenVehicules('legs','bick','horse','hands')
  //@SetMetadata('grenVehicules', ['legs','bick','horse'])
  travelTo(@Body('vehicule') vehicule: string){
    return `Have a good trip with you'r vehicule ${vehicule}`;
  }
}

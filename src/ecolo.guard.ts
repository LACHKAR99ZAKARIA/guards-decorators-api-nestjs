import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class EcoloGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const grenVehicules = this.reflector.get<string[]>('grenVehicules', context.getHandler(),);
    const req = context.switchToHttp().getRequest();
    const isGreenVehicule = grenVehicules.includes(req.body.vehicule);
    console.log(grenVehicules);
    if(!isGreenVehicule)
    {
      console.log('inside EcoloGuard| body: ',req.body);
      return false;
    }else
    {
      console.log('inside EcoloGuard| body: ',req.body);
      return true;
    }
  }
}

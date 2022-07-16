import { SetMetadata } from '@nestjs/common';

export const GreenVehicules = (...args: string[]) => SetMetadata('grenVehicules', args);

import { Controller } from '@nestjs/common';
// import { User } 	  from 'prisma';

@Controller('users')
export class UsersController {
 @Post()
 register(): string {
	return 'new user';
 }

}

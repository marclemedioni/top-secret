import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import { environment } from '../environments/environment';
import { AuthModule } from './auth';
import { ConfigModule, ConfigService } from './config';
import { ToolsController } from './controllers';
import { GraphQLModule } from './graphql';
import { JwtModule } from './jwt';
import { MailModule } from './mail';
import { PrismaModule } from './prisma';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    AuthModule,
    ConfigModule,
    GraphQLModule,
    JwtModule,
    MailModule,
    PrismaModule,
  ],
  controllers: [ToolsController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress(environment.graphql.uploads)).forRoutes('graphql');
  }
}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { PostsModule } from './posts/posts.module'
import { CommentsModule } from './comments/comments.module'
import { AuthModule } from './auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres', // type of the database
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true, // models will be loaded automatically
        /**
         * (recommended: disable synchronize in prod)
         */
        synchronize: process.env.IS_LOCAL_DEV === 'true' ? true : false, // your entities will be synced with the database
      }),
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

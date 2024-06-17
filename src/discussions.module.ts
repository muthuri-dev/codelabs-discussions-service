import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismadbService } from './prismadb/prismadb.service';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { DiscussionsResolver } from './discussions.resolver';
import { DiscussionsService } from './discussions.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [
    DiscussionsResolver,
    DiscussionsService,
    PrismadbService,
    ConfigService,
  ],
})
export class DiscussionsModule {}

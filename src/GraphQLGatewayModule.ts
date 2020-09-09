import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TestModule } from './TestModule'

@Module({
  imports: [
    TestModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      subscriptions: '/graphql-ws'
    }),
  ],
})
export class GraphQLGatewayModule {}

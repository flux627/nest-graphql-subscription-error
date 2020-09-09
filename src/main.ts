import { NestFactory } from '@nestjs/core'
import { GraphQLGatewayModule } from './GraphQLGatewayModule'

async function bootstrap() {
  const app = await NestFactory.create(GraphQLGatewayModule)
  await app.listen(4000)
}

bootstrap()

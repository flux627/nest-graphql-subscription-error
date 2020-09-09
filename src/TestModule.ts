import { Module } from '@nestjs/common'
import { Resolver, Subscription } from '@nestjs/graphql'
import { createTestIterator } from './createTestIterator'

@Resolver()
class TestResolver {
  @Subscription('test', { resolve: (value) => value })
  test(): AsyncIterable<number> {
    return createTestIterator()
  }

  @Subscription('test2', { resolve: () => {
      throw Error('Thrown from resolve!')
    } })
  test2(): AsyncIterable<number> {
    return createTestIterator()
  }
}

@Module({
  providers: [TestResolver],
})
export class TestModule {}

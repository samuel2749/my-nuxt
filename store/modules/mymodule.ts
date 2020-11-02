import { Module, VuexModule } from 'nuxt-property-decorator'

@Module
export default class MyModule extends VuexModule {
    someField = 'somedata'
    wheels = 2
    get axles(): number {
        return this.wheels / 2
    }

    get msg(): string {
        return 'Hello Samuel'
    }
}

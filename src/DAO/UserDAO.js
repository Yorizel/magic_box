import { AbstractDAO } from './AbstractDAO'

export class UserDAO extends AbstractDAO {
  async create({ data }) {
    try {
      const response = await this.api.post(`/public/users/signUp`, { ...data })

      return { error: false, ...response }
    } catch (e) {
      return { error: true, ...e }
    }
  }

  async find({ data }) {
    try {
      const response = await this.api.post(`/public/users/signIn`, { ...data })

      return { error: false, ...response }
    } catch (e) {
      return { error: true, ...e }
    }
  }
}

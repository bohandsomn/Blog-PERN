import { Sequelize } from 'sequelize'
import config from 'config'
import type { PoolConfig } from 'pg'

const { user, password, host, port, database } = config.get<Required<PoolConfig>>('pool-config')

const DIALECT = 'postgres'
const PROTOCOL = 'postgres'

const URI = `${PROTOCOL}://${user}:${password}@${host}:${port}/${database}`

const sequelize = new Sequelize(URI, {
    dialect: DIALECT
})

export default sequelize

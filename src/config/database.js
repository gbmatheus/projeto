module.exports =  {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'senha123',
  database: 'schedule_service',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  }
}
module.exports = {
    apps : [{
      name: 'api-gateway',
      script: './packages/api-gateway/dist/main.js',
    //   args: 'start',
    //   cwd: "./packages/api-gateway",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
        name: 'order-service',
        script: './packages/order-service/dist/main.js',
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
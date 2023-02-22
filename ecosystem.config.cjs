module.exports = {
  apps: [
    {
      name: '@jwt-authentication',
      script: 'src/server.js',
      instances: 5,
      autorestart: true,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/authentication/error.log',
      watch: '.',
      increment_var: 'PORT',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
    },
  ],
  deploy: {
    production: {
      user: '',
      host: '',
      ref: 'origin/main',
      repo: 'git@https://github.com/b3lf3g0r/jwt-authentication.git',
      path: '/home/b3lf3g0r/jwt-authentication',
      'post-deploy': 'npm i && pm2 reload ecosystem.config.cjs',
    },
  },
};

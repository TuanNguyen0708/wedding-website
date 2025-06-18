module.exports = {
  apps: [
    {
      name: 'wedding-website',
      script: 'npx',
      args: 'serve out -l 3000',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};

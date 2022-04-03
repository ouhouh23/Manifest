const mix = require('laravel-mix')

require('laravel-mix-twig');

mix.sass('src/assets/scss/main.scss', 'css')
  .twig({
    root: 'src/templates/pages', 
    output: '.',
  })
  .setPublicPath('public')
  .copy('src/assets/img', 'public/img')
  .browserSync({
    server: './public',
    files: './src',
  })

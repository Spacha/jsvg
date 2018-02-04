let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const pathToAssets = 'src/'

mix.webpackConfig({
  resolve: {
    alias: {
        components: path.resolve(__dirname, pathToAssets + 'js/components'),
        containers: path.resolve(__dirname, pathToAssets + 'js/containers'),
        actions: path.resolve(__dirname, pathToAssets + 'js/actions'),
        images: path.resolve(__dirname, pathToAssets + 'js/images'),
        utils: path.resolve(__dirname, pathToAssets + 'js/utils')
      }
    }
  })

mix.react(pathToAssets + 'js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

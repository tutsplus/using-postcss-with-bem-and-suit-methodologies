module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('postcss-bem')(),
          require('postcss-nested')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};
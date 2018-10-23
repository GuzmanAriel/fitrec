
module.exports = function(grunt){

  grunt.initConfig({
    sass: {
      dist: {
        files:{
          'wp-content/themes/fitrec/style.css': 'wp-content/themes/fitrec/assets/scss/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
};

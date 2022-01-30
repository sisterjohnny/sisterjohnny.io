const sass = require("node-sass");

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '%= pkg.name %&gt; &lt;%= grunt.template.today("yyyy-mm-dd") %&gt;'
      },
      build: {
        files: {
          'dist/js/script.js': 'src/js/magic.js'
        }
      }
    },
    sass: {
      dist: {
        options: {
          implementation: sass,
          sourcemap: true, 
          style: 'expanded',
          debugInfo: true
        },
        files: {
            'dist/style.css': 'dist/main.scss'
        }
      }
    },
    watch: {
      html: {
        files: "index.html"
      },
      css: {
        files: 'dist/*.scss',
        tasks: ['sass']
      },
      js: {
        files: 'src/js/*.js'
      },
      options: {
        livereload: true
      },
    }
  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['jshint']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-cdn-switch');

};

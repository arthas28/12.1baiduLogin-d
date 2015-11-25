module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 压缩js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'javascript/baiduLogin.js',
        dest: 'javascript/baiduLogin.min.js'
      }
    },
    // 压缩css
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/baiduLogin.css',
        dest: 'css/baiduLogin.min.css'
      }
    },
    //监测less文件改动
    watch: {
        files: ['javascript/baiduLogin.js','css/baiduLogin.css'],
        tasks: ['uglify','cssmin']
    }
  });

  // 加载包含 'uglify',cssmin','watch' 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','cssmin','watch']);

};
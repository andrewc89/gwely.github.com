
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    "build/css/site.css": "src/less/site.less",
                    "build/css/index.css": "src/less/index.less",
                    "build/css/resume.css": "src/less/resume.less"
                }
            }
        },
        watch: {
            css: {
                files: "src/less/*.less",
                tasks: ["less"]
            }
        }
    });

    //grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less"]);
};
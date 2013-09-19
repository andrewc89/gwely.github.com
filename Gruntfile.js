
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
                    "build/css/index.css": "src/less/index.less"
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
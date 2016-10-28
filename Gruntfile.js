module.exports=function(grunt){
    grunt.initConfig({
        //配置
        pkg:grunt.file.readJSON('package.json'),
        //检查Style css语法
        csslint:{
            src:['public/stylesheets/*.css']
        },
        //合并css文件
        concat:{
            css:{
                src:['public/stylesheets/*.css'],
                //    根据目录下的文件情况配置
                dest:'public/stylesheets/dist/<%= pkg.name %>.css'
            }
        },
        //    压缩style css文件为  .min.css
        cssmin:{
            options:{
                //移除css文件中的所有注释
                keepSpecialComments:0
            },
            minify:{
                expand:true,
                cwd:'public/stylesheets/dist/',
                src:['<%= pkg.name %>.css'],
                dest:'public/stylesheets/dist',
                ext:'.min.css'
            }
        },
        //压缩优化图片大小
        imagemin:{
            dist:{
                options:{
                    optimizationLevel:3
                },
                files:[
                    {
                        expand:true,
                        //目标目录
                        cwd:'public/images/',
                        //优化images目录下所有png/jpg/jpeg图片 **：任何子目录/*:下面的文件名
                        src:['**/*.{png,jpg,jpeg}'],
                        //优化后的图片保存位置,默认覆盖
                        dest:'public/images/'

                    }
                ]
            }
        },
        //检查JavaScript语法
        jshint:{
            all:['Gruntfile.js',
                'public/javascripts/event.js',
                'public/javascripts/back.js',
                'public/javascripts/backtop.js',
                'public/javascripts/style.js',
                'public/javascripts/jq1.js',
                'public/javascripts/time.js'
            ]
        },
        //合并，最小化，混淆JavaScript文件
        uglify:{
            build:{
                src:'public/javascripts/*.js',
                dest:'public/build/javascripts/<%= pkg.name %>.min.js'
            }
        },
        //监控
        watch:{
            css:{
                files:'public/stylesheets/*.css',
                tasks:['csslint'],
                options:{
                    spawn:false,
                }

            },
            scripts:{
                files:'public/javascripts/*.js',
                tasks:['jshint'],
                options:{
                    spawn:false,
                }
            },
        }
    });

    //加载插件
    //grunt.loadNpmTasks('grunt-contrib-csslint');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    [
        'grunt-contrib-csslint',
        'grunt-contrib-concat',
        'grunt-contrib-cssmin',
        'grunt-contrib-imagemin',
        'grunt-contrib-jshint',
        'grunt-contrib-uglify',
        'grunt-contrib-watch'

    ].forEach(function (task){
        grunt.loadNpmTasks(task);
    });


    //默认任务
    //grunt.registerTask('default',['csslint']);
    //grunt.registerTask('default',['csslint','concat']);
    //grunt.registerTask('default',['csslint','concat','cssmin']);

    //默认任务用于后端（服务器）
    //grunt.registerTask('default',['jshint']);
    //静态任务用于前端静态资源
    //grunt.registerTask('static',['csslint','concat','cssmin','imagemin','jshint','uglify','watch']);
    grunt.registerTask('static',['concat','cssmin','imagemin','uglify','watch']);
    //监控
    grunt.registerTask('watch',['watch',]);

};
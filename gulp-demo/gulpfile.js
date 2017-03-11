/**
 * Created by Happy Life on 2017/2/14.
 */
var gulp = require('gulp');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    gulp.src('js/index.js')
        .pipe(gulp.dest('dist/js'));
//最终生成的文件路径为 dist/foo.js/jquery.js,而不是dist/foo.js
});
gulp.task('one',function(){
    // 第一个参数是任务名
    //one是一个异步执行的任务,第二个参数['任务名']伊朗的任务等依赖的任务完成之后再执行当前任务,第三个参数是回调函数
    setTimeout(function(){
        console.log('one is done')
    },5000);
});
//1. 加载一个重命名的包
var rename = require('gulp-rename');
//2. 加载一个压缩js的包
var uglify = require("gulp-uglify");
//3. 创建一个重命名的任务
gulp.task('rename', function () {
    //4. 读取js/index.js文件
    gulp.src('js/index.js')
    //5.执行压缩JS方法
        .pipe(uglify())  //压缩
        //6.执行重命名方法(重命名后的名字)
        .pipe(rename('index.min.js')) //会将jquery.js重命名为jquery.min.js
        //7. 最后压缩并且重命名完成后输出到dist/js目录
        .pipe(gulp.dest('dist/js'));
    //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
});

var  minifyCss = require("gulp-minify-css");

    gulp.task('minify-css', function () {
        gulp.src('css/*.css') // 要压缩的css文件
            .pipe(minifyCss()) //压缩css
            .pipe(gulp.dest('dist/css'));
    });
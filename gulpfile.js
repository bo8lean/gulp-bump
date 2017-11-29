
const gulp = require('gulp'),
    bump = require('gulp-bump')
    ;


function inc(importance) {
// get the files to bump version in 
return gulp.src(['./package.json'])
    
    // bump the version number in those files 
    .pipe(bump({type: importance}))
    
    // save it back to filesystem 
    .pipe(gulp.dest('./'))
}    

gulp.task('bump', function() { return inc('patch'); })

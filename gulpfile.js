const
    gulp = require('gulp'),
    git = require('gulp-git'),
    bump = require('gulp-bump')
    filter = require('gulp-filter'),
    tag_version = require('gulp-tag-version')
    ;


function inc(importance) {
    // get the files to bump version in 
    return gulp.src(['./package.json'])

    // bump the version number in those files 
    .pipe(bump({type: importance}))

    // save it back to filesystem 
    .pipe(gulp.dest('./'))

    // commit the changed version number 
    .pipe(git.commit('bumps package version'))

    // read only one file to get the version number 
    .pipe(filter('package.json'))

    // **tag it in the repository** 
    .pipe(tag_version());
}    

gulp.task('bump', function() { return inc('patch'); })

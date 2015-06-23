'use strict';

module.exports.tasks = {

    // this task optimizes your images
    imagemin: {
      png: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.png', '**/*.jpg', '**/*.gif'],
          dest: 'src/img'
        }]
      },
      svg: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.svg'],
          ext: '.svg',
          dest: 'src/img'
        }]
      }
    },

    copy: {
        images: {
            files: [
                { expand: true, cwd: 'img', src: ['**'], dest: 'build/img/'}
            ]
        },
        favicon: {
            files: [
                { expand: true, cwd: 'favicon', src: ['favicon.ico'], dest: 'build/'}
            ]
        }
    }
};

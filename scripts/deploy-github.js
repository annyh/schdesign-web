const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/annyh/blog_test.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
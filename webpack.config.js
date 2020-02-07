module.exports = {
    // Arquivo principal
    entry: [
        '@babel/polyfill',
        './src/main.js',
        './src/exercicios.js',
    ],
    // Pra onde vou mandar o
    // codigo convertido do es6
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        // Onde vai abrir o servidor, geralmente caminho pro index.html
        contentBase:  __dirname + '/public'
    },
    module: {
        // Obrigatorio, especifica regras:
        // test -> procura arquivos usando regex
        // exclude -> exclui determinados arquivos/pastas
        // use -> loader utilizado
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
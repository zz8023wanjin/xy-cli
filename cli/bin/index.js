#!/usr/bin/env node

const { program } = require('commander');
const fse = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');

const { devWebpack } = require('./webpack');

program
    .version('1.0.4', '-v, --version')

program
    .command('pack [entry]')
    .description('this is a pack tools')
    .option('-d, --dev', '开发模式')
    .option('-p, --prod', '生产模式')
    .action((entry, options) => {
        console.log(`this is the name :${entry}, and options is ${JSON.stringify(options)}`)

        const { dev, prod } = options;

        if (!(dev || prod)) {
            const promptList = [
                {
                    type: 'list',
                    name: 'packEnv',
                    message: '打包还是运行?',
                    choices: [
                        'dev', 'prod'
                    ]
                }
            ]
    
            inquirer.prompt(promptList).then((res) => {
                if(res.packEnv === 'dev') {
                    devWebpack(entry);
                } else {
                    console.log('我要打包')
                }
            })
        } else {
            dev && console.log('我要运行');
            prod && console.log('我要打包');
        }

        
    })

program
    .command('create')
    .description('this is template generator')
    .action(() => {
        const promptList = [
            {
                type: 'list',
                name: 'createEnv',
                message: '请选择需要创建的模板',
                choices: [
                    'act',
                    'sem',
                    'default'
                ]
            }
        ];

        inquirer.prompt(promptList).then(res => {
            fse.copy(path.resolve(__dirname, `../template/${res.createEnv}`), process.cwd(), (err) => {
                if(err) return console.log('Failed!');
            })

            console.log('success!');
        })
    })

program.parse(process.argv)
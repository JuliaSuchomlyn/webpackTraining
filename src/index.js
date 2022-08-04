import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import webpacklogo from '@/assets/webpackLogo'
import './styles/styles.css'

const post = new Post('webpack title', webpacklogo)

$('pre').addClass('code').html(post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('SCV:', csv)


'use strict';
import React from 'react';
import ReactDom from 'react-dom';

//引入样式文件
import './styles/app.scss';


//引入组件
import MainComponent from './components/App.js';


//最终渲染
ReactDom.render((
 		<div className="wrapper">
			<div className="top">
			    <span>FLY BLOG</span>
			</div>
			<MainComponent/>
		</div>

), document.getElementById('app'));
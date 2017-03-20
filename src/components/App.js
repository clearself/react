'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, useRouterHistory} from 'react-router';


/*
三种history管理
1、hashHistory（react默认），带有hash值和随机字符串?_k=xxxxx /#/user/haishanh?_k=adseis
2、browserHistory 以文件路径方式显示 /user/haishanh
3、useRouterHistory 去掉hashHistory随机字符串?_k=xxxxx
*/

// 去掉hashHistory随机字符串?_k=xxxxx
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


import First from './first.js';
import Second from './second.js';

const Home = () =><div><Nav/><First/></div> 
const About  = () =><div><Nav/><Second/></div>
// Nav Links
const Nav = () => 
        <nav className="list">
            <Link to='/' className="navChild" activeStyle={{color:'#fff',background:'#d00355',fontSize:'18px'}}>
                  markdown笔记
            </Link>
            <Link to='/zpdemo' className="navChild" activeStyle={{color: '#fff',background:'#d00355',fontSize:'18px'}}>
              作品案例
            </Link>
           
         </nav>
       

export default class MainComponent extends Component{
    render(){
        return (
          <Router history={appHistory}>
            <Route path='/' component={Home}/>
            <Route path='/zpdemo' component={About}/>
        </Router>
      )
    }
}


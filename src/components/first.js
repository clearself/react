'use strict';

import React from 'react';
import Data from './data.js';

var First = React.createClass({
    render: function () {
        return (
        	<div className="markdown">
	            <ul className="row indexList">
	            	{
				        Data.markdown.map(function (item) {
				            return (
				                 <li key={item.id+''+item.title} className="col-sm-4">
			                        <div className="li_inner">
			                            <a href={item.link}>
			                                <div className="title">
			                                    <strong>{item.title}</strong>
			                                    <span className="time">{item.dateline}</span>
			                                </div>
			                                <div className="description">{item.description}</div>
			                            </a>
			                        </div>
			                    </li>
				            )})
				    }
	            </ul>
	        </div>
        )
    }
})
export default First
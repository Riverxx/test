/*
* @Author: Marte
* @Date:   2018-09-02 15:03:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-02 16:08:33
*/

'use strict';
import React,{Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render(){
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}
export  default Greeter
import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

class Todo extends Component {
    render() {

        return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            the color is:<div className="card-body" style={{ backgroundColor: this.props.color }}>
                                {this.props.color}


                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    }
}
export default Todo;
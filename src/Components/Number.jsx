import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

class Number extends Component {
    render() {

        return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            the number is:<div className="card-body" style={{ backgroundColor: this.props.color }}>
                                {this.props.number}


                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    }
}
export default Number;
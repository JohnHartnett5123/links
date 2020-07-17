import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

class Word extends Component {
    render() {

        return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            the word is:<div className="card-body" style={{ backgroundColor: this.props.color }}>
                                {this.props.word}


                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    }
}
export default Word;
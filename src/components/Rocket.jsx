import React from 'react';

const Rocket = (props) => {
    const { rocket } = props;
    return (
        <div>
            <h2>Rocket Info</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{rocket.rocket_id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{rocket.rocket_name}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{rocket.description}</td>
                        </tr>
                        <tr>
                            <th>Cost per launch</th>
                            <td>{rocket.cost_per_launch}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Rocket;
import React from "react";

class ConfigRow extends React.Component {

    constructor() {
        super();
    }

    render() {

        let {
            country,
            countryName,
            host,
            id,
            ip,
            logType,
            message,
            operator,
            ping,
            score,
            speed,
            traffic,
            uptime,
            users,
            sessions,
            num,
            onClick,
            activeStatus
            } = this.props;

        const statusRel = {
            'Disconnected' :    'danger',
            'Connecting' :      'warning',
            'Connected' :       'success',
            '' :       ''
        };

        activeStatus = statusRel[activeStatus];

        return (
            <tr class={`config-row ${activeStatus}`} data-country={country} data-id={id} onClick={onClick}>
                <th class="col-md-1">{++num}.</th>
                <td class="col-md-1 col-country">
                    <img src={`http://www.vpngate.net/images/flags/${country}.png`}/>
                    <br/>
                    <span>{countryName}</span>
                </td>
                <td class="col-md-2 col-host">
                    <b>{host}</b>
                    <br/>
                    <span>{ip}</span>
                </td>
                <td class="col-md-2 col-sessions">
                    <b>{sessions} sessions</b>
                    <br/>
                    <span>{uptime}</span>
                    <br/>
                    <span>Total {(+users).toLocaleString()} users</span>
                </td>
                <td class="col-md-2 col-line-quality">
                    <b>{speed}</b>
                    <br/>
                    <span>Ping: {ping}</span>
                    <br/>
                    <b>{traffic}</b>
                    <br/>
                    <span>Logging policy:</span>
                    <br/>
                    <span>{logType}</span>
                </td>
                <td class="col-md-8 col-operator">
                    <b>{operator}</b>
                    <br/>
                    <i>{message}</i>
                </td>
                <td class="col-md-2 col-score">
                    {(+score).toLocaleString()}
                </td>
            </tr>
        );
    }

}

export default ConfigRow;

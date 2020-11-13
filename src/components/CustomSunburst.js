import React, { useEffect, useState } from "react";
import { ResponsiveSunburst } from '@nivo/sunburst';

const margin = { top: 30, right: 200, bottom: 30, left: 30 };

const styles = {
    root: {
        fontFamily: "consolas, sans-serif",
        textAlign: "center",
        position: "relative",
        width: 750,
        height: 750
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: margin.right,
        bottom: 0,
        left: margin.left,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 96,
        color: "#000000",
        // background: "#FFFFFF33",
        textAlign: "center",
        pointerEvents: "none"
    },
    totalLabel: {
        fontSize: 15
    }
};

export default function CustomSunburst(props) {
    let {
        dataset,
        noInheritStatus,
        inheritStatus,
        noInheritSet,
        inheritSet, } = props;
    let [status, setStatus] = useState({ from: 'color', modifiers: [] });

    useEffect(() => {
        if (noInheritStatus) {
            inheritSet(false);
            setStatus("noinherit");
        }
        else if (inheritStatus) {
            noInheritSet(false);
            setStatus("inherit:brighter(0.13)");
        }
        else if (!noInheritStatus && !inheritStatus) {
            noInheritSet(false);
            inheritSet(false);
            setStatus({ from: 'color', modifiers: [] });
        }
    }, [noInheritStatus, inheritStatus, inheritSet, noInheritSet]);

    return (
        <div style={styles.root}>
            < ResponsiveSunburst
                data={dataset}
                margin={margin}
                identity="name"
                value="size"
                description='description'
                source_name='source_name'
                source_link='source_link'
                cornerRadius={5}
                borderWidth={1}
                borderColor="white"
                colors={{ scheme: 'paired' }}
                childColor={status}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
                tooltip={({ data: { id, value, color, description, source_name, source_link } }) => (
                    <span style={{ color }}>
                        <strong>{id}:</strong> <br />
                        <strong>{'size: '}</strong>{value}<br />
                        <strong>{'description: '} </strong>{description}<br />
                        <strong>{'source_name: '} </strong>{source_name}<br />
                        <strong>{'source_link: '} </strong>{source_link}
                    </span>
                )}
            />
            <div style={styles.overlay}>
                <span style={styles.totalLabel}>{dataset.name}</span>
            </div>
        </div>
    )
}




import React from 'react'
import { Layer, Rect, Text } from 'react-konva';

const LayerWithZoom = (props) => (
    <Layer>
        <Rect
            x={0.75 * window.innerWidth}
            y={0.60 * window.innerHeight}
            width={0.03 * window.innerHeight}
            height={0.03 * window.innerHeight}
            fill="#ffffff"
            shadowBlur={8}></Rect>
        <Text
            x={0.753 * window.innerWidth}
            y={0.60 * window.innerHeight}
            fontSize={20}
            width={0.03 * window.innerHeight}
            height={0.03 * window.innerHeight}
            fill="black"
            text="+">
        </Text>

        <Rect
            x={0.75 * window.innerWidth}
            y={0.637 * window.innerHeight}
            width={0.03 * window.innerHeight}
            height={0.03 * window.innerHeight}
            fill="#ffffff"
            shadowBlur={8}></Rect>

        <Text
            x={0.754 * window.innerWidth}
            y={0.632 * window.innerHeight}
            fontSize={25}
            width={0.03 * window.innerHeight}
            height={0.03 * window.innerHeight}
            fill="black"
            text="-">
        </Text>
    </Layer>
)

export default LayerWithZoom
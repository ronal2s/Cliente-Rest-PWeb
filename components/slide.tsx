import React, { useEffect, useState } from "react";
import { Animated } from "react-native";

interface ISlide {
    delay?: number,
    height?:number,
    width?: number,
    children: React.ReactNode
}

function Slide(props: ISlide) {
    const [x, setX] = useState(new Animated.Value(-500));
    const { delay, height, width } = props;
    useEffect(function () {
        // Animated.spring(x, { toValue: 0, delay: 200, speed: 1 }).start();
        Animated.spring(x, { toValue: 0, delay: 200+delay, speed: 1, useNativeDriver: true }).start();
    }, [])

    return (
        <Animated.View style={{ transform: [{ translateX: x }], height, width  }}>
            {props.children}
        </Animated.View>
    )
}

export default Slide;
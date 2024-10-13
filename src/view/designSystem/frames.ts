import { keyframes } from "@emotion/react"

export const movingGradient = keyframes`
    0% {
        background-position: right bottom;
    }
    100% {
        background-position: left bottom;
    }
`

export const sheen = keyframes`
    0% {
        left: -142px;
    }
    100% {
        left: 100%;
    }
`

export const errorAnimation = keyframes`
    25% {
        transform: translateX(8px);
    }
    50% {
        transform: translateX(-8px);
    }
    750% {
        transform: translateX(8px);`

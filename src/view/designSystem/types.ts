import React from "react"

declare module "@mui/material/styles" {
	interface TypographyVariants {
		body2?: React.CSSProperties
		title?: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		body2?: React.CSSProperties
		title?: React.CSSProperties
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		body2?: true
		title?: true
	}
}

declare module "@mui/material/styles/createPalette" {
	interface Palette {
		orange400: { main: string }
		white: { main: string }
		orange: { main: string }
		orange32: { main: string }
		orange64: { main: string }
		bgColor: {
			light: string
			medium: string
			dark: string
			extraLight: string
		}
		textColor: { faded: string }
	}

	interface PaletteOptions {
		white: { main: string }
		orange: { main: string }
		orange400: { main: string }
		orange32: { main: string }
		orange64: { main: string }
		bgColor: {
			light: string
			medium: string
			dark: string
			extraLight: string
		}
		textColor: { faded: string }
	}
}

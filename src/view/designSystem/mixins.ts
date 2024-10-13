type JustifyContent =
	| "center"
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly"
type AlignItems = "center" | "flex-start" | "flex-end" | "stretch" | "baseline"
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"
type AlignContent =
	| "center"
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "stretch"

interface FlexMixinProps {
	jc?: JustifyContent
	ai?: AlignItems
	fd?: FlexDirection
	fw?: FlexWrap
	ac?: AlignContent
}

export const flexMixin = ({ ac, ai, fd, fw, jc }: FlexMixinProps) => {
	const justifyContent = jc || "center"
	const alignItems = ai || "center"
	const flexDirection = fd || "row"
	const flexWrap = fw || "nowrap"
	const alignContent: AlignContent = ac || "center"

	return {
		alignContent: `${alignContent}`,
		alignItems: `${alignItems}`,
		display: "flex",
		flexDirection: `${flexDirection}`,
		flexWrap: `${flexWrap}`,
		justifyContent: `${justifyContent}`,
	}
}

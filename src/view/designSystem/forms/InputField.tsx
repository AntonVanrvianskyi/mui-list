import { ChangeEvent, ReactNode, useState } from "react"
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput"
import { useField } from "formik"
import { useTheme } from "@mui/material/styles"
import { FormikErrors } from "formik/dist/types"
import { FormControl } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { flexMixin } from "../mixins"
import { CloseEyeIcon, EmailIcon, KeyIcon, OpenEyeIcon } from "../icons"
import { Body2 } from "../typography"
import { errorAnimation } from "../frames"
import InputError from "./InputError"

type InputFieldProps = {
	placeholder?: string
	name: string
	type?: "text" | "email" | "password" | "number"
	label?: string
	disabled?: boolean
	required?: boolean
	onChange?: (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
	) => void
	startAdornment?: ReactNode
	endAdornment?: ReactNode
	setErrors?: (errors: FormikErrors<Record<string, string>>) => void
	description?: string
} & OutlinedInputProps

function InputField({
	placeholder,
	onChange,
	required = false,
	setErrors,
	label,
	name,
	type,
	disabled,
	startAdornment,
	endAdornment,
	description,
	...props
}: InputFieldProps) {
	const theme = useTheme()
	const [showPassword, setShowPassword] = useState(false)

	const [field, meta, helpers] = useField(name)

	const isEmail = type === "email"
	const isPassword = type === "password"

	const handleChanging = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		field.onChange(event)
		if (meta.touched && meta.error) {
			helpers.setTouched(false)
			helpers.setError("")
			if (setErrors) {
				setErrors({})
			}
		}
		if (onChange) {
			onChange(event)
		}
	}

	const renderStartAdornment = () => {
		if (startAdornment) {
			return startAdornment
		}
		if (isEmail) {
			return (
				<InputAdornment
					position="start"
					sx={{
						mr: 1.75,
						...flexMixin({ fd: "row", jc: "center", ai: "center" }),
					}}
				>
					<EmailIcon />
				</InputAdornment>
			)
		}
		if (isPassword) {
			return (
				<InputAdornment
					position="start"
					sx={{
						...flexMixin({ fd: "row", jc: "center", ai: "center" }),
					}}
				>
					<KeyIcon />
				</InputAdornment>
			)
		}
		return null
	}

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const renderEndAdornment = () => {
		if (endAdornment) {
			return endAdornment
		}
		if (isPassword) {
			return (
				<InputAdornment position="end">
					<IconButton onClick={handleClickShowPassword} edge="end">
						{!showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
					</IconButton>
				</InputAdornment>
			)
		}
		return null
	}

	const inputType = isPassword && showPassword ? "text" : type

	return (
		<FormControl variant="outlined" fullWidth>
			{description && (
				<Body2
					sx={{
						color: theme.palette.textColor.faded,
						mb: 1,
						px: 1,
					}}
				>
					{description}
				</Body2>
			)}
			<OutlinedInput
				{...props}
				{...field}
				onChange={(event) => handleChanging(event)}
				type={inputType}
				fullWidth
				disabled={disabled}
				value={field.value}
				sx={{
					"& > textarea": {
						py: 0.5,
					},
					"&.Mui-disabled": {
						borderRadius: "16px",
						border: `2px solid ${theme.palette.bgColor.medium}`,
					},
					position: "relative",
					color: theme.palette.textColor.faded,
					border: disabled
						? "none"
						: `2px solid ${theme.palette.bgColor.light}`,
					background: theme.palette.bgColor.dark,
					borderRadius: "16px",
					height: "auto",
					minHeight: 40,
					py: 0,
					mb: 1,
					"&:hover": {
						borderColor: disabled
							? theme.palette.bgColor.extraLight
							: theme.palette.textColor.faded,
					},
					"&:focus": {
						borderColor: disabled
							? theme.palette.bgColor.extraLight
							: theme.palette.textColor.faded,
						input: {
							WebkitTextFillColor: disabled
								? theme.palette.bgColor.extraLight
								: theme.palette.white.main,
						},
					},
					"&.Mui-error": {
						animation: `${errorAnimation} 300ms`,
						borderColor: disabled ? "none" : theme.palette.error.main,
						background: disabled
							? theme.palette.bgColor.extraLight
							: theme.palette.bgColor.dark,
						input: {
							WebkitTextFillColor: disabled
								? theme.palette.textColor.faded
								: theme.palette.error.main,
						},
						"& svg": {
							"& path": {
								stroke: theme.palette.error.main,
							},
							"& circle": {
								stroke: theme.palette.error.main,
							},
							"& rect": {
								stroke: theme.palette.error.main,
								fill: theme.palette.error.main,
							},
						},
					},
					input: {
						WebkitTextFillColor: theme.palette.textColor.faded,
						"&:-webkit-autofill": {
							WebkitBackgroundOrigin: "content-box",
							WebkitTextFillColor: theme.palette.textColor.faded,
							WebkitBackgroundClip: "text",
						},
						"&::selection": {
							background: theme.palette.bgColor.light,
						},
					},
					"& .MuiOutlinedInput-input": {
						color: theme.palette.textColor.faded,
						border: "none",
						height: 0,

						"&.Mui-disabled": {
							color: theme.palette.textColor.faded,
							WebkitTextFillColor: theme.palette.textColor.faded,
							userSelected: "none",
							background: theme.palette.bgColor.dark,
						},
					},
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none",
						color: theme.palette.textColor.faded,
					},
					"& .MuiOutlinedInput-inputMultiline": {
						color: theme.palette.textColor.faded,
						border: "none",
					},
				}}
				startAdornment={renderStartAdornment()}
				endAdornment={renderEndAdornment()}
				required={required}
				label={label}
				placeholder={`${placeholder || ""} ${required ? "*" : ""}`}
				error={meta.touched && Boolean(meta.error)}
			/>
			{meta.touched && meta.error && <InputError error={meta.error} />}
		</FormControl>
	)
}

export default InputField
